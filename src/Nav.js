import React from "react";
import { Link } from "react-router-dom";

function Nav({dogs}) {
  return (
    <div>
        <ul>
            {dogs.map(dog => (
                <li key={dog}>
                    <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
                </li>
            ))}
        </ul>
    </div>
  );
}


export default Nav;