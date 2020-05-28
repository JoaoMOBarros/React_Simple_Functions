import React, {useState} from 'react';
import {Link} from 'react-router-dom'


function InputSearch(props){

    const [query, setQuery] = useState("")

    return(
        <div>
            <h2>Search here for users</h2>
            <input type="text" value={query} onChange={e => setQuery(e.target.value)}/>
            <button><Link to={"/search/user/"+query}>Search!</Link></button>
        </div>
    )
}

export default InputSearch