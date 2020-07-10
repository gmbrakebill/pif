import React, {useState} from 'react';
const axios = require('axios').default;


function NewAirman(props)
{ 
    const [state, setState] = useState({
        rank: '',
        first_name: '',
        last_name: '',
        loc: true,
        lor: true,
        loa: true,
        waps: true,
        last_review_date: '',
        parent: props.parent
    })


    const handleChange = event => setState({
        ...state, 
        [event.target.name]: event.target.value
        
    })

    const handleSubmit = async () => { 
        let newAirman = {
            rank: state.rank,
            first_name: state.first_name,
            last_name: state.last_name,
            loc: state.loc,
            lor: state.lor,
            loa: state.loa,
            waps: state.waps,
            last_review_date: state.last_review_date
            
        }
        axios.post("http://localhost:3000/airman", JSON.stringify({
            amn_id: 'DEFAULT',
            rank: state.rank,
            firstName: state.first_name,
            lastName: state.last_name
        }))
        axios.post("http://localhost:3000/api/pif", JSON.stringify({
            loc: state.LOC,
            lor: state.LOR,
            loa: state.LOA,
            waps: state.WAPS,
            last_review_date: state.last_review_date
        }))
        console.log(props, props.parent,state)
        // await props.parent.setState({
        //     airmen: [...props.parent.props.airmen, newAirman]
        // })
        // props.history.push("/airman")
        // props.history.push("/api/pif")
    }
   
   
    return(
        <div>
            <div className = "center">
                <table class = "table table -md">

              <thead>
                  <tr class = 'table-primary'>
                      <th>Add Rank</th>
                      <th>Add First Name</th>
                      <th>Add Last Name</th>
                      <th>LOC(True/False)</th>
                      <th>LOR(True/False)</th>
                      <th>LOA(True/False)</th>
                      <th>WAPS(True/False)</th>
                      <th>Date reviewed</th>
                  </tr>
              </thead>
              <tbody>

              
            
            <td><input type = "text" name = "rank"  onChange = {handleChange}/></td>
            <td><input type = "text" name = "first_name"  onChange = {handleChange}/></td>
            <td><input type = "text" name = "last_name"  onChange = {handleChange}/></td>
            <td><input type = "text" name = "loc" onChange = {handleChange}/></td>
            <td><input type = "text" name = "lor"  onChange = {handleChange}/></td> 
            <td><input type = "text" name = "loa"  onChange = {handleChange}/></td>
            <td><input type = "text" name = "waps" onChange = {handleChange}/></td>
            <td><input type = "date" name = "last_review_date"  onChange = {handleChange}/></td>
            <button onClick = {handleSubmit}> Submit </button>
            </tbody>
          
            </table>
           
        </div>
        </div>
    )
}


export default NewAirman;