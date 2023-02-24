import React, { useContext } from "react";
import { searchsContext } from "../context/searchsContext";

function Carousel({ children }) {

    const { setId, results } = useContext(searchsContext);
    const search = results.Search

    return (
        <>
            <div className="carouselNotflix">
                <div className="titleContainer">
                    <h3 id="carouselTitle">Recomandé pour vous</h3>
                </div>
                <div className="carouselContainerAll">
                    <button id="carouselBtnLeft" className="carouselBtnLeft" role="button" onClick={() => {
                        let carouselContainer = document.getElementById("carouselContainer")
                        carouselContainer.scrollLeft += carouselContainer.offsetWidth
                    }}>-</button>
                    <div className="carouselContainer" id="carouselContainer">
                        <div className="carousel" id="carousel">
                            {
                                search != undefined ? search.map((carouselFilm, index) => {
                                    return (
                                        <div key={index} className="carouselFilm" id="carouselFilm">
                                            <a className={`filmLinkClass${index}`}
                                                href="#blockDescription"
                                                onClick={() => { setId(carouselFilm.imdbID) }}>
                                                <img src={carouselFilm.Poster} />
                                            </a>
                                        </div>
                                    )
                                }) : console.log("not carousel")
                            }
                        </div>
                    </div>
                    <button id="carouselBtnRigth" className="carouselBtnRigth" role="button" onClick={() => {
                        let carouselContainer = document.getElementById("carouselContainer")
                        carouselContainer.scrollLeft -= carouselContainer.offsetWidth
                    }}>+</button>
                </div>
            </div>
        </>
    )
}

export default Carousel;