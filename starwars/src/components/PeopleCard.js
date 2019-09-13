import React from "react";
import styled from "styled-components";

const Card = styled.div`
    background: #99f3eb;
    color: black;
    width: 300px;
    max-height: 800px;
    height:200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`



const PeopleCard = props =>{
    console.log(props)
    return(
        <Card>
            <h1>{props.name}</h1>
            <h3>{props.height}</h3>
            <h3>{props.gender}</h3>
        </Card>
    )
}

export default PeopleCard;