import React, {useState,useEffect} from 'react'
import BannerImage from "../assets/explore.webp";
import '../styles/eggsbee.css';
import axios from 'axios';
import { Card,Button,Row,Container,Col,Modal} from "react-bootstrap";
import {useAuth0} from "@auth0/auth0-react";
import {FaEdit, FaTrash} from 'react-icons/fa';
import {Link} from 'react-router-dom'

const BASE_URL = process.env.REACT_APP_BASE_URL;

function Eggsbee() {
  // state variables 
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
  const [cardbutton,SetCardbutton]= useState(true)
  const [mycardbutton,SetMycardbutton] = useState(false)
  const [selectedArray,setSelectedArray]=useState([""])
  const {user} = useAuth0();

// handle when explore is clicked
  const handleExplore =() =>{
    document.getElementById('explore').style.display = 'block';
    document.getElementById('newrecipe').style.display = 'none';
    document.getElementById('myrecipe').style.display = 'none';
   
  }

  // handle when My Recipe is clicked
  const handleMyrecipes =() =>{ 
    document.getElementById('myrecipe').style.display = 'inline-block';
    document.getElementById('newrecipe').style.display = 'none';
    document.getElementById('explore').style.display = 'none';
    retrieveuserrecipe()

  }
  // handle when add recipe is clicked
  const handleAddrecipe =() =>{
    document.getElementById('newrecipe').style.display = 'block';
    document.getElementById('explore').style.display = 'none';
    document.getElementById('myrecipe').style.display = 'none';
   
    
  }
  // handle when top recipes is clicked
  const handleTop =() =>{
    console.log('This button is under construction') //have not added the functionality
  }
 
  const handlemycardbutton= async(recipe) =>{
    await setSelectedArray(recipe)
    SetCardbutton(!cardbutton)

  }
//retrieves all recipe created by logged in user
  const retrieveuserrecipe= async() =>{
          const response = await fetch(BASE_URL+'recipes/owneremail?email='+user.email)
          const recipes = await response.json()
          SetMine(recipes)
          console.log(recipes)
  }
  //send delete request to database
  const triggerdlt= async(recipe) =>{
    await axios.delete(BASE_URL+'recipes/id?id='+ `${recipe._id}`);
    window.location.reload()
   

  }
 
  useEffect(() => {
    
    const callmodel=() =>{
      SetCardbutton(!cardbutton)
    }
    callmodel();
     // This is be executed when `loading` state changes
}, [selectedArray])
  const addrecipe = async()=>{
    //send post request to add new recipe into database
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
    //clear form after submission
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
    },[]) //upon loading, remove all private recipe so they dont show up on explore page prob shld transfer this logic to the back end because users can still use packet sniffer to get the files
 
  
  return (
    <div>
    <div className="explore" style={{ backgroundImage: `url(${BannerImage})` }}>
     <h1>Explore Recipes</h1>
     </div>
     
    <div className="explorebody">
    <div className="sidenav"> 
    {/* sidenav bar in black */}
    <button onClick={handleExplore}> Explore</button>
    <button onClick={handleMyrecipes}>My Recipes </button>
    <button >Saved Recipes </button>
    <button onClick={handleAddrecipe}>Add Recipe </button>
    <button onClick={handleTop}>Top Recipes</button>

    </div>
      
      <div className="results" id="newrecipe"> 
      {/* html form here to add new recipe */}
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
                                <Button onClick={()=>handlemycardbutton(Recipe)}>View Recipe </Button>
                                {/* footer of card only exist if its a premium card */}
                                <div className='cardfooter' id={ Recipe.Premium === true ? 'prem' : 'norm'}>Premium</div>
                            </Card.Body>
                            {cardbutton ?(
                            <Modal show={cardbutton} onHide={()=>SetCardbutton(false)} >

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
                                  <Button style={{color: "white",backgroundColor:"#C54E57",border:"none"}} >   <Link id='link' to='/beforeexp' state={{ recipe: selectedArray }} >  Run </Link> </Button>
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
        {/* can possibly write this code into a component so that it can be reused for explore and my recipe */}
       <div className='results' id="myrecipe">
       <Row>
       {mine.map((Recipe) => (
              
              <Col xs={12} sm={6} md={4}>
                
                  <Card key ={Recipe._id} className='cards'>
                      
                      <Card.Img className="cardimg" src={Recipe.Img[0] } />

                      <Card.Body>
                          <Card.Title><b>{Recipe.Title}</b></Card.Title>
                          <Card.Text>{Recipe.Description.split(".",1)}</Card.Text>
                          <Button onClick={()=>handlemycardbutton(Recipe)}><FaEdit/> </Button> 
                          {/* edit button only opens the modal but doesnt provide edit functionality */}
                          <Button onClick={()=>triggerdlt(Recipe)}><FaTrash/> </Button>
                          <div className='cardfooter' id={ Recipe.Premium === true ? 'prem' : 'norm'}>Premium</div>
                      </Card.Body>
                      {cardbutton ?(
                      <Modal show={mycardbutton} onHide={()=>SetMycardbutton(false)}>

                          <Modal.Header closeButton>

                              <Modal.Title><b>{selectedArray.Title} fdsafdsfas</b></Modal.Title>

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

