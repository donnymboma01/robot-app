import React from "react";

const Card = (props) =>{

    const {id, name,email ,address} = props;
    return(
        <div className='bg-light-green dib pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?200x200`} alt="robots"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
                <p>{address}</p>
            </div>
        </div>
    );
}

export default Card;