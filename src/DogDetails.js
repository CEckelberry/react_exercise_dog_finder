import React from "react";
import {useParams, Redirect} from "react-router-dom"

function DogDetails({dogs}) {

    const {name} = useParams();
    console.log(name)
    
    if(name){
        const currDog = dogs.find(
            dog => dog.name.toLowerCase() === name.toLowerCase()
        );
        if(currDog){
            return (
                <div>
                    <h1>Name: {currDog.name}</h1>
                    <h2>Age: {currDog.age}</h2>
                    <img src={currDog.src}/>
                    <ul>
                        {currDog.facts.map(fact => (
                            <li>
                                {fact}
                            </li>
                        ))}
                    </ul>
                </div>
            )
        } else{
            return <Redirect to="/dogs" />;
        }

    } else {
        return <Redirect to="/dogs" />;
    }
}

export default DogDetails;