import { Bookmark } from "lucide-react"; 

const Card = (props) => {
return (
<div className="parent">
    <div className="card">
        <div className="top">
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8WU0Emt19dyXiCPIuhVtxIFbqx13mkj54hA&s"
            alt=""
        />
        <button>
            Save <Bookmark/>
        </button>
        </div>

        <div className="centre">

            <h3>{props.name} <span>{props.datePosted}</span></h3>
            <h2>Senior UI/UX Designer</h2>

            <div>
                <h4>{props.tag1}</h4>
                <h4>{props.tag2}</h4>
            </div>

        
        </div>

        <div className="bottom">
            <div>
            <h3>{props.pay}</h3>
            <p>{props.location}</p>
            </div>
            <button>Apply Now</button>
        
        </div>
    </div>
    </div>
);
};

export default Card;
