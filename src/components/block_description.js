import React, { useState, useContext } from "react"
import { searchsContext } from "../context/searchsContext";

function BlockDescription() {

    const { data, type } = useContext(searchsContext);

    return (
        <>
        <h2 id="typeResult">{type}</h2>
        <div id="blockDescription" className="blockDescription">
            <div className="posterContainer" id="posterContainer" style={{ backgroundImage: `url(${data.Poster})` }}></div>
            <div className="descriptionContainer">
                <h3 id="title" className="title">{data.Title}</h3>
                <h4 id="year" >Year: {data.Year}</h4>
                <h4 id="country">Country: {data.Country}</h4>
                <h4 id="director">Directors: {data.Director}</h4>
                <h4 id="genre">Genre: {data.Genre}</h4>
                <h4 id="runtime">Runtime: {data.Runtime}</h4>
                <h4 id="rating">ImdbRating: {data.imdbRating}</h4>
                <h4 id="votes">ImdbVotes: {data.imdbVotes}</h4>
                <p id="actors">Actors: {data.Actors}</p>
                <p className="description" id="description">Description: {data.Plot}</p>
            </div>
        </div>
        </>
    )
}

export default BlockDescription;