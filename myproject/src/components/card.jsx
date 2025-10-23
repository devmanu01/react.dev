
const Card  = (props) => {
    console.log(props)
return (
    <div className="parent">
        <div className="card">
    < img src={props.img}/>
    
    <h1>{props.name }{props.age}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, illo.</p>

    <button>view more</button>
    </div>
 
    </div>
)
}
  
export default Card;
