import React, {useState} from 'react';
const axios = require('axios').default;


function NewAirman(props)
{ 
    const [state, setState] = useState({
        amn_id: '',
        rank: '',
        first_name: '',
        last_name: '',
        LOC: '',
        LOR: '',
        LOA: '',
        WAPS: '',
        last_review_date: '',
        time_in_service: '',
        time_in_grade: '',
        epr_data: '',
        grandparent: props.grandparent
    })


    const handleChange = event => setState({
        ...state, 
        [event.target.name]: event.target.value
        
    })

    const handleSubmit = async () => { 
        let newAirmanPIF = {
            rank: state.rank,
            first_name: state.first_name,
            last_name: state.last_name,
            LOC: state.LOC,
            LOR: state.LOR,
            LOA: state.LOA,
            WAPS: state.WAPS,
            last_review_date: state.last_review_date,
            time_in_service: state.time_in_service,
            time_in_grade: state.time_in_grade,
            epr_data: state.epr_data
        }
        axios.post("http:localhost:3000/api/airman", JSON.stringify({
            rank: state.rank,
            first_name: state.first_name,
            last_name: state.last_name
        }))
        await state.grandparent.setState({
            airmen: [...state.grandparent.state.airmen, newAirman]
        })
        props.history.push("/airman")
    }
   
   
    return(
        <div>
            <input type = "text" name = "rank" onChange = {handleChange}/>
            <input type = "text" name = "first_name"  onChange = {handleChange}/>
            <input type = "text" name = "last_name"  onChange = {handleChange}/>

            <button onClick = {handleSubmit}> Submit </button>
        </div>
    )
}


export default NewAirman;