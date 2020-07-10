import React from 'react';

function Pif(props)
{
    console.log(props);
    return(
      <tr>
            <td>{props.id}</td>
            <td>{String(props.LOC)} </td>
            <td>{String(props.LOR)}</td> 
            <td>{String(props.LOA)}</td>
            <td>{String(props.WAPS)}</td> 
           <td> {props.last_review_date}</td>
           </tr>
    )
}
export default Pif;