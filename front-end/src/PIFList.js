import React from 'react';
import Pif from './Pif';
import NewPif from './NewPif';


import {
    Route,
    Link
} from 'react-router-dom'

function PIFList({pif, parent})
{
    return (
        <div>
            <Route exact path = "/pif"><div>
            <div className="center">
                <table class = "table">
                <thead>
                <tr class = 'table-primary'>
                    <th>ID</th>
                    <th>LOC</th>
                    <th>LOR</th>
                    <th>LOA</th>
                    <th>WAPS</th>
                    <th>Last Review Date</th>

                </tr>
                </thead>

            <tbody>
              
    {pif.map(pif => {console.log(pif);return <Pif id = {pif.id} LOC = {pif.loc} LOR = {pif.loa} LOA = {pif.loa} WAPS = {pif.waps} last_review_date = {pif.last_review_date}/> })}
                     </tbody>
                </table>
                </div>
                </div>
                </Route>
    <Route path = "/pif/new" render={props => <NewPif {...props} grandparent={parent} />} />
    <Link to = "/pif/new">Add New Pif</Link>
        </div>
    )
}
export default PIFList