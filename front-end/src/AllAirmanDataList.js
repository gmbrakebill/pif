import React from 'react';
import AllAirmanData from './AllAirmanData';
import NewAirman from './NewAirman';


import {
    Route,
    Link
} from 'react-router-dom'

function AllAirmanDataList({airmandata, parent})
{
    return (
        <div>
            <Route exact path = "/"><div>
                
                <div className="center">
                    <table class = "table table -md">
                        <thead>

                        <tr class = 'table-primary'>

                        <th>Airman ID</th>
                        <th>Rank</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>LOC</th>
                        <th>LOR</th>
                        <th>LOA</th>
                        <th>WAPS</th>
                        <th>WAPS Last Review Date</th>
                        <th>Time in service</th>
                        <th>Time in grade</th>
                        <th>EPR data</th>
                        </tr>
                        </thead>
                        <tbody>

                       
                    
                
    {airmandata.map(data => {console.log(data);return <AllAirmanData amn_id = {data.airman_id} rank = {data.rank} first_name = {data.first_name} last_name = {data.last_name} LOC = {data.loc} LOR = {data.loa} LOA = {data.loa} WAPS = {data.waps} last_review_date = {data.last_review_date} time_in_service = {data.time_in_service} time_in_grade = {data.time_in_grade} epr_data = {data.epr_data}/> })}
                
    </tbody>
                </table>
                </div>
                </div>
                </Route>
                {/* <Route path = "/airmen/new" render={props => <NewAirman {...props} grandparent={parent} />} /> */}
                            <NewAirman/>
                <Link to = "/airmen/new">Add New Airmen</Link>

        </div>
    )
}
export default AllAirmanDataList