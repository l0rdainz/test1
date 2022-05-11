import React, {useState,useEffect} from 'react'
import BannerImage from "../assets/explore.webp";
import '../styles/eggsbee.css';
import Myrecipe from '../components/Myrecipe';
import axios from 'axios';
import { Card,Button,Row,Container,Col,Modal} from "react-bootstrap";
import {useAuth0} from "@auth0/auth0-react";
import {FaEdit, FaTrash} from 'react-icons/fa';

const BASE_URL = process.env.REACT_APP_BASE_URL;

function Eggsbee() {
  const[Title,SetTitle] = useState("")
  const[Description,SetDescription] = useState("")
  const[Materials,SetMaterials] = useState("")
  const[Instruction,SetInstruction] = useState("")
  const[Private,SetPrivate] = useState(false)
  const[Premium,SetPremium] = useState(false)
  const[Imgurl,Setimgurl]=useState("")
  const[submitted,SetSubmitted] = useState(false)
  const[mine,SetMine] = useState([])
  const[Myrecipe,SetMyrecipe] = useState([])
  // const[Top,SetTop] = useState(false)
  const [cardbutton,SetCardbutton]= useState(true)
  const [mycardbutton,SetMycardbutton] = useState(false)
  const [selectedArray,setSelectedArray]=useState([""])
  const {user} = useAuth0();
  const handleExplore =() =>{
    document.getElementById('explore').style.display = 'block';
    document.getElementById('newrecipe').style.display = 'none';
    document.getElementById('myrecipe').style.display = 'none';
   
  }
  const handleMyrecipes =() =>{ 
    document.getElementById('myrecipe').style.display = 'inline-block';
    document.getElementById('newrecipe').style.display = 'none';
    document.getElementById('explore').style.display = 'none';
    retrieveuserrecipe()

  }
  const handleAddrecipe =() =>{
    document.getElementById('newrecipe').style.display = 'block';
    document.getElementById('explore').style.display = 'none';
    document.getElementById('myrecipe').style.display = 'none';
   
    
  }
  const handleTop =() =>{
    console.log('This button is under construction')
  }
  const handlecardbutton=(recipe) =>{
    setSelectedArray(recipe)
    
  }

  const retrieveuserrecipe= async() =>{
          const response = await fetch(BASE_URL+'recipes/owneremail?email='+user.email)
          const recipes = await response.json()
          SetMine(recipes)
          console.log(recipes)
  }
  const triggerdlt= async(recipe) =>{
    axios.delete(BASE_URL+'recipes/id?id='+ `${recipe._id}`)
  }
 
  useEffect(() => {
    
    const callmodel=() =>{
      SetCardbutton(!cardbutton)
    }
    callmodel();
     // This is be executed when `loading` state changes
}, [selectedArray])
  const addrecipe = async()=>{
    
    axios.post(BASE_URL+'recipes/',{
        Title: `${Title}`,
        Description: `${Description}`,
        Private:`${Private}`,
        Createdby: `${user.email}`,
        Materials: `${Materials}`.split(','),
        Instruction: `${Instruction}`.split(','),
        Premium: `${Premium}`,
        Img: `${Imgurl}  `

    })
    document.getElementById("checkbox").checked = false;
    document.getElementById("checkbox1").checked = false;
    SetSubmitted(true)
    SetDescription("")
    SetInstruction ("")
    SetMaterials("")
    SetTitle("")
    SetPrivate(false)
    SetPremium(false)
    Setimgurl("")
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  }
  const [Recipes,SetRecipe] = useState([])
  useEffect(()=>{
  
      const fetchData = async () => {
        const response = await fetch(BASE_URL+'recipes/')
        const recipes = await response.json()
        //remove the recipes that are private here!!
        
        for(var i=0;i<recipes.length;i++){
          if(recipes[i].Private === true){
            recipes.splice(i,1)
          }
        }
        SetRecipe(recipes)
        
      }
      fetchData()
    },[])
 
  
  return (
    <div>
    <div className="explore" style={{ backgroundImage: `url(${BannerImage})` }}>
     <h1>Explore Recipes</h1>
     </div>
     
    <div className="explorebody">
    <div className="sidenav"> 
    <button onClick={handleExplore}> Explore</button>
    <button onClick={handleMyrecipes}>My Recipes </button>
    <button >Saved Recipes </button>
    <button onClick={handleAddrecipe}>Add Recipe </button>
    <button onClick={handleTop}>Top Recipes</button>

    </div>
      
      <div className="results" id="newrecipe"> 
      
      <h2>Add New Recipe</h2>
      <input type="text" placeholder='Title' value={Title} onChange={(e) => SetTitle(e.target.value)}></input>
      <textarea placeholder='Description' value={Description} onChange={(e) => SetDescription(e.target.value)}></textarea>
      <input type="text" placeholder='Materials (delimiter = commar)eg. material1,material2,material2' value={Materials} onChange={(e)=>SetMaterials(e.target.value)}></input>
      <textarea placeholder='Instructions (delimiter = commar) step1,step2,step3' value={Instruction} onChange={(e)=>SetInstruction(e.target.value)}></textarea>
      <input type="text" placeholder='Image URL' value={Imgurl} onChange={(e) => Setimgurl(e.target.value)}></input>
      <span><input type="checkbox" id="checkbox" onChange={()=>SetPrivate(!Private)} />This is a private recipe</span>
      <span><input type="checkbox" id="checkbox1" onChange={()=>SetPremium(!Premium)} />This is a premium recipe</span>
      <button onClick={addrecipe}> Add</button>
      
      {submitted ?(
                <h3>Your recipe has been added. </h3>):("")} 
               
              
      </div> 
        
        <div className='results' id="explore">
          <Container>
            <Row>
            {Recipes.map((Recipe) => (
              
                    <Col xs={12} sm={6} md={4}>
                      
                        <Card key ={Recipe._id} className='cards'>
                            
                            <Card.Img className="cardimg" src={Recipe.Img[0] } />

                            <Card.Body>
                                <Card.Title><b>{Recipe.Title}</b></Card.Title>
                                <Card.Text>{Recipe.Description.split(".",1)}</Card.Text>
                                <Button onClick={()=>handlecardbutton(Recipe)}>View Recipe </Button>
                                
                                <div className='cardfooter' id={ Recipe.Premium === true ? 'prem' : 'norm'}>Premium</div>
                            </Card.Body>
                            {cardbutton ?(
                            <Modal show={cardbutton} onHide={()=>SetCardbutton(false)}>

                                <Modal.Header closeButton>

                                    <Modal.Title><b>{selectedArray.Title}</b></Modal.Title>

                                </Modal.Header>

                                <Modal.Body><b>Description: </b>{selectedArray.Description}<br></br>
                                                 <b>Materials:</b> <ul>{selectedArray.Materials.map((ingredient)=>(
                                            <li>{ingredient}</li>
                                            ))}</ul>
                                            <b>Instructions:</b><ol>{selectedArray.Instruction.map((instruction)=>(
                                            <li>{instruction}</li>
                                            ))}</ol>
                                </Modal.Body>

                                <Modal.Footer>

                                   <Button onClick={()=>SetCardbutton(false)}>

                                    Close

                                  </Button>

                                </Modal.Footer>

                            </Modal>):("")}
                              </Card>
                       
                        </Col>
                        
               
                ))}
</Row>
          </Container>


          
        </div>
       <div className='results' id="myrecipe">
       <Row>
       {mine.map((Recipe) => (
              
              <Col xs={12} sm={6} md={4}>
                
                  <Card key ={Recipe._id} className='cards'>
                      
                      <Card.Img className="cardimg" src={Recipe.Img[0] } />

                      <Card.Body>
                          <Card.Title><b>{Recipe.Title}</b></Card.Title>
                          <Card.Text>{Recipe.Description.split(".",1)}</Card.Text>
                          <Button ><FaEdit/> </Button>
                          <Button onClick={()=>triggerdlt(Recipe)}><FaTrash/> </Button>
                          <div className='cardfooter' id={ Recipe.Premium === true ? 'prem' : 'norm'}>Premium</div>
                      </Card.Body>
                      {cardbutton ?(
                      <Modal show={mycardbutton} onHide={()=>SetMycardbutton(false)}>

                          <Modal.Header closeButton>

                              <Modal.Title><b>{selectedArray.Title}</b></Modal.Title>

                          </Modal.Header>

                          <Modal.Body><b>Description: </b>{selectedArray.Description}<br></br>
                                      <b>Materials:</b> <ul>{selectedArray.Materials.map((ingredient)=>(
                                      <li>{ingredient}</li>
                                      ))}</ul>
                                      <b>Instructions:</b><ol>{selectedArray.Instruction.map((instruction)=>(
                                      <li>{instruction}</li>
                                      ))}</ol>
                          </Modal.Body>

                          <Modal.Footer>

                             <Button onClick={()=>SetMycardbutton(false)}>

                              Close

                            </Button>

                          </Modal.Footer>

                      </Modal>):("")}
                        </Card>
                 
                  </Col>
                  
         
          ))}    
          </Row>                       
       </div>
      
    </div>
    </div>
  )
}

export default Eggsbee

