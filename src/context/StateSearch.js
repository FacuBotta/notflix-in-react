import React, { useEffect, useState } from "react";
import { searchsContext } from "./searchsContext";

const StateSearch = ({ children }) => {
    const [data, setData] = useState("");
    const [id, setId] = useState("tt0095483")
    const [title, setTitle] = useState("")
    const [type, setType] = useState("movie")
    const [results, setResults] = useState("")

    /* id search */
    useEffect(() => {
        fetch(`http://www.omdbapi.com/?apikey=73ab5181&i=${id}`)
            .then(Response => Response.json())
            .then(data => setData(data));
    }, [id])

    /* title search */
    useEffect(() => {
        console.log(title, type)
        fetch(`http://www.omdbapi.com/?apikey=73ab5181&s="${title === '' ? data.title : title}"&type="${type === '' ? data.type : type}"&page=1`)
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