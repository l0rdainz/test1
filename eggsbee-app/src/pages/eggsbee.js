import React, {useState,useEffect} from 'react'
import BannerImage from "../assets/explore.webp";
import '../styles/eggsbee.css';
import axios from 'axios';
import { Card,Button,Row,Container,Col} from "react-bootstrap";

const BASE_URL = process.env.REACT_APP_BASE_URL;

function Eggsbee() {
  const[Title,SetTitle] = useState("")
  const[Description,SetDescription] = useState("")
  const[Materials,SetMaterials] = useState("")
  const[Instruction,SetInstruction] = useState("")
  const[Private,SetPrivate] = useState(false)
  const[submitted,SetSubmitted] = useState(false)
  const[Explore,SetExplore] = useState(false)
  const[Mine,SetMine] = useState(false)
  const[Addrecipe,SetAddrecipe] = useState(false)
  const[Top,SetTop] = useState(false)
  

  const handleExplore =() =>{
    console.log('hi')
  }
  const handleMyrecipes =() =>{
    console.log('hi1')
  }
  const handleAddrecipe =() =>{
    console.log('hi2')
    SetAddrecipe(!Addrecipe)
  }
  const handleTop =() =>{
    console.log('This button is under construction')
  }
  const addrecipe = async()=>{
    
    axios.post(BASE_URL+'recipes/',{
        Title: `${Title}`,
        Description: `${Description}`,
        Private:`${Private}`,
        Createdby: "tester1111",
        Materials: `${Materials}`.split(','),
        Instruction: `${Instruction}`.split(','),

    })
    document.getElementById("checkbox").checked = false;
    SetSubmitted(true)
    SetDescription("")
    SetInstruction ("")
    SetMaterials("")
    SetTitle("")
    SetPrivate(false)
    
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
    <button onClick={handleAddrecipe}>Add Recipe </button>
    <button onClick={handleTop}>Top Recipes</button>

    </div>
      {Addrecipe ?(
      <div className="results"> 
      
      <h2>Add New Recipe</h2>
      <input type="text" placeholder='Title' value={Title} onChange={(e) => SetTitle(e.target.value)}></input>
      <textarea placeholder='Description' value={Description} onChange={(e) => SetDescription(e.target.value)}></textarea>
      <input type="text" placeholder='Materials (delimiter = commar)eg. material1,material2,material2' value={Materials} onChange={(e)=>SetMaterials(e.target.value)}></input>
      <textarea placeholder='Instructions (delimiter = commar) step1,step2,step3' value={Instruction} onChange={(e)=>SetInstruction(e.target.value)}></textarea>
      <span><input type="checkbox" id="checkbox" onChange={()=>SetPrivate(!Private)} />This is a private recipe</span>
      <button onClick={addrecipe}> Add</button>
      
      {submitted ?(
                <h3>Your recipe has been added. </h3>):("")} 
               
              
      </div> ):(
        
        <div className='results'>
          <Container>
            <Row>
            {Recipes.map((Recipes) => (
                    <Col xs='4'>
                        <Card key ={Recipes._id} className='cards'>
                            
                            <Card.Img className="cardimg" src="https://via.placeholder.com/150x150" />

                            <Card.Body>
                                <Card.Title>{Recipes.Title}</Card.Title>
                                <Card.Text>{Recipes.Description}</Card.Text>
                                <Button>View Recipe </Button>
                            </Card.Body>
                            
                        </Card>
                        </Col>
               
                ))}
</Row>
          </Container>
        </div>
       
      )}
    </div>
    </div>
  )
}

export default Eggsbee

