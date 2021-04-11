import React from "react";

function DogList({dogs}) {
    return(
        
        <div>
            {dogs.map(dog => (
                <div>
                    <h1>{dog.name}</h1>
                    <img src={dog.src}/>
                </div>
            ))}
        </div>
    )
}

export default DogList;