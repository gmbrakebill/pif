import React from 'react';
import WAPS from './WAPS';

import {
    Route,
    Link
} from 'react-router-dom'

function WAPSList({waps, parent})
{
    return (
        <div>
            <Route exact path = "/waps"><div>
            <div className="center">
                <table class = "table table -md">
                    <thead>
                        <tr class = 'table-primary'>
                            <th> Airman ID</th>
                            <th>Time in Service</th>
                            <th>Time in Grade</th>
                            <th>EPR data</th>
                            </tr>
                    </thead>
                    <tbody>
                
    {waps.map(waps => {console.log(waps);return <WAPS id = {waps.id} 
    time_in_service = {waps.time_in_service}
     time_in_grade = {waps.time_in_grade} epr_data = 
     {waps.epr_data}/> })}
                
                </tbody>
                </table>
                </div>
                </div>
                </Route>

        </div>
    )
}
export default WAPSList;