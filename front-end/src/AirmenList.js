import React from 'react';
import Airmen from './Airmen';
import NewAirman from './NewAirman';

import {
    Route,
    Link
} from 'react-router-dom'

function AirmenList({airmen, parent})
{
    return (
        <div>
            
            <Route exact path = "/airmen"><div>
            <div className="center">
                <table class = "table table -md">
                    <thead>
                        <tr class = 'table-primary'>
                            <th>ID</th>
                            <th>Rank </th>
                            <th>First Name </th>
                            <th>Last Name </th>
                        </tr>
                    </thead>
                    <tbody>
                        
            {airmen.map(airman => <Airmen 
                id = {airman.amn_id}
                rank = {airman.rank}
				 first_name = {airman.first_name} 
               last_name = {airman.last_name}/>)}
             
             
                </tbody>
                </table>
                </div>
                </div>
        
                </Route>
                
            

                <Route path = "/airmen/new" render={props => <NewAirman {...props} grandparent={parent} />} />
                <Link to = "/airmen/new">Add New Airmen</Link>
        </div>
    )
}
export default AirmenList