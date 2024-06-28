import React, { useState, useContext } from "react";
import { searchsContext } from "../context/searchsContext";

function NavNotflix() {

    const { setTitle, setType, results, setId } = useContext(searchsContext)
    const [placeHolder, setPlaceHolder] = useState("Title")
    const { Search } = results;

    const ResultList = (e) => {
        setTitle(e.target.value)
        document.getElementById("resultsList") ? document.getElementById("resultsList").classList.remove("resultsListHidden") : console.log("not resultsList");
        document.getElementById("titleSearchInput").value = ""
    }

    return (
        <div id="containerNav" className="containerNav">
            <a href="./index.html"><h2 className="logo">NOTFLIX</h2></a>
            <p id="aMovies" href="#" onClick={() => {
                setPlaceHolder("Movies");
                setType("movie");
            }}>Films</p>
            <p id="aSeries" href="#" onClick={() => {
                setPlaceHolder("Series");
                setType("series");
            }}>Series</p>
            <div className="searchContainer" id="searchContainer">
                <input id="titleSearchInput" type="search" placeholder={placeHolder} onKeyDown={(e) => {
                    e.keyCode === 13 ? ResultList(e) : console.log("not results")
                }} />
                <ul className="resultsList resultsListHidden" id="resultsList">
                    {
                        Search !== undefined && Search.map((newItem, index) => {
                            document.getElementById("titleSearchInput").value = ""
                            let resultsList = document.getElementById("resultsList")
                            return (<li key={index}
                                onClick={() => {
                                    setId(newItem.imdbID);
                                    resultsList.classList.toggle("resultsListHidden");
                                }}>{newItem.Title}</li>)
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default NavNotflix;