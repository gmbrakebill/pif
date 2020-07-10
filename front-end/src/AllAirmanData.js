import React from 'react';

function AllAirmanData(props)
{
    console.log(props);
    return(
        <tr>
            <td>{props.amn_id}</td>
            <td>{props.rank}</td>
            <td>{props.first_name}</td> 
            <td>{props.last_name}</td>
            <td>{String(props.LOC)}</td> 
            <td>{String(props.LOR)}</td> 
            <td>{String(props.LOA)} </td>
           <td>{String(props.WAPS)}</td>
            <td> {props.last_review_date}</td>
             <td>{String(props.time_in_service)}</td>
            <td>{String(props.time_in_grade)} </td>
          <td>{String(props.epr_data)}</td>
        </tr>
    )
}
export default AllAirmanData;