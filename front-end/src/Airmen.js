import React from 'react';

function Airmen(props)
{
    
    return(
  
            <tr>
                   <td>{props.id} </td>
                   <td>{props.rank} </td>
                   <td>{props.first_name}</td>
                  <td>{props.last_name}</td> 
                </tr>
    )
}

export default Airmen;
