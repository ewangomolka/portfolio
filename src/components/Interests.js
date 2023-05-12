import React from 'react';

const Interests = ({interests}) => {

    const interestList = interests.map((interest, index) => {
        return <li key={index}><p>{interest.name}</p><p>{interest.image}</p></li>
    })

    return ( 
        <>
        {interestList}
        </>
     );
}
 
export default Interests;