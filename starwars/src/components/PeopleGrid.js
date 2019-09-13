import React, {useState, useEffect} from "react";
import axios from "axios"
import PeopleCard from "./PeopleCard"


const People = () => {
    const [ppl] = useState(People);
    return (
    <div>
        {
        ppl.map((results, index ) => (
        
        <PeopleCard key={index} people={results} />
        ) )
        }
    </div>
    );
};




function PeopleGrid(){
const {name, setName} = useState();
const {height, setHeight} = useState();
const {gender, setGender} = useState();


useEffect(() => {
    axios
    .get(`https://swapi.co/api/people/`)
    .then(response =>{
        console.log(response.data)
        setName(response.data.name);
        setHeight(response.data.height);
        setGender(response.data.gender);
    })
    .catch(error =>{
        console.log("u dummy", error)
    })

},[])

return(
    <div className="container">
        <PeopleCard
        name = {name}
        height = {height}
        gender = {gender}
        />
    </div>
)
}
export default PeopleGrid;