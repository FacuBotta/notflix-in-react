import React, { useEffect, useState } from "react";
import { searchsContext } from "./searchsContext";

const StateSearch = ({ children }) => {
    const [data, setData] = useState("");
    const [id, setId] = useState("tt0095483")
    const [title, setTitle] = useState("")
    const [type, setType] = useState("movie")
    const [results, setResults] = useState("")
    
/* tt0095483  ID tests*/
// my key 38c8d091
// nicolas key 73ab5181


    /* id search */
    useEffect(() => {
        fetch(`http://www.omdbapi.com/?apikey=73ab5181&i=${id}`)
            .then(Response => Response.json())
            .then(data => setData(data));
    }, [id])

    /* title search */
    useEffect(() => {
        fetch(`http://www.omdbapi.com/?apikey=73ab5181&s="${title}"&type="${type}"&page=1`)
            .then(Response => Response.json())
            .then(data => setResults(data));
    }, [title])

    return (
        <searchsContext.Provider value={{ data, type, setId, setTitle, setType, results }}>
            {children}
        </searchsContext.Provider>
    )

}

export default StateSearch;