import React, {useState} from 'react';
const axios = require('axios').default;


function NewPif(props)
{ 
    const [state, setState] = useState({
        LOC: '',
        LOR: '',
        LOA: '',
        WAPS: '',
        last_review_date: '',
        grandparent: props.grandparent
    })


    const handleChange = event => setState({
        ...state, 
        [event.target.name]: event.target.value
        
    })

    const handleSubmit = async () => { 
        let newPif = {
            LOC: String(state.LOC),
            LOR: state.LOR,
            LOA: state.LOA,
            WAPS: state.WAPS,
            last_review_date: state.last_review_date
        }
        axios.post("http:localhost:3000/api/pif", JSON.stringify({
            LOC: String(state.LOC),
            LOR: String(state.LOR),
            LOA: String(state.LOA),
            WAPS: String(state.WAPS),
            last_review_date: state.last_review_date
        }))
        await state.grandparent.setState({
            pif_data: [...state.grandparent.state.pif_data, newPif]
        })
        props.history.push("/pif")
    }
   
   
    return(
        <div>
            <input type = "text" name = "LOC" onChange = {handleChange}/>
            <input type = "text" name = "LOR"  onChange = {handleChange}/>
            <input type = "text" name = "LOA"  onChange = {handleChange}/>
            <input type = "text" name = "WAPS"  onChange = {handleChange}/>
            <input type = "date" name = "last_review_date"  onChange = {handleChange}/>

            <button onClick = {handleSubmit}> Submit </button>
        </div>
    )
}


export default NewPif;