import React from 'react';

function WAPS(props)
{
    console.log(props);
    return(
        <tr>
            <td>{props.id}</td>
            <td>{String(props.time_in_service)} </td>
            <td>{String(props.time_in_grade)}</td> 
            <td>{String(props.epr_data)}</td>
        </tr>
    )
}
export default WAPS;