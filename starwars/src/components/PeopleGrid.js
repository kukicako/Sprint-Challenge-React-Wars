import React, {useState, useEffect} from "react";
import axios from "axios"
import PeopleCard from "./PeopleCard"


// const Character = () => {
//     const [ppl] = useState(character);
//     return (
//     <div>
//         {
//         ppl.map((results, index ) => (
        
//         <PeopleCard key={index} people={results} />
//         ) )
//         }
//     </div>
//     );
// };




function PeopleGrid(){
const [characters, setCharacters] = useState([]);



useEffect(() => {
    axios
    .get(`https://swapi.co/api/people/`)
    .then(response =>{
        console.log(response.data.results)
        setCharacters(response.data.results)
        
    })
    .catch(error =>{
        console.log("WRONG", error)
    })

},[])

return(
    <div className="container">
        {characters.map((character, index) => (
            <PeopleCard
            key={index}
            name={character.name}
            height={character.height}
            gender={character.gender}
            
            />
        ))}
        
        
    </div>
)
}
export default PeopleGrid;