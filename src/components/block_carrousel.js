import React, { useContext } from "react";
import { searchsContext } from "../context/searchsContext";

function Carousel() {

    const { setId, results } = useContext(searchsContext);
    const { Search } = results;
    return (
        <div className="carouselNotflix">
            <div className="titleContainer">
                <h3 id="carouselTitle">Titres associes</h3>
            </div>
            <div className="carouselContainerAll">
                <button id="carouselBtnLeft" className="carouselBtnLeft" onClick={() => {
                    let carouselContainer = document.getElementById("carouselContainer")
                    carouselContainer.scrollLeft += carouselContainer.offsetWidth
                }}>-</button>
                <div className="carouselContainer" id="carouselContainer">
                    <div className="carousel" id="carousel">
                        {
                            Search !== undefined && Search.map((carouselFilm, index) => {
                                return (
                                    <div key={index} className="carouselFilm" id="carouselFilm">
                                        <a className={`filmLinkClass${index}`}
                                            href="#blockDescription"
                                            onClick={() => { setId(carouselFilm.imdbID) }}>
                                            <img src={carouselFilm.Poster} alt="poster" />
                                        </a>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <button id="carouselBtnRigth" className="carouselBtnRigth"onClick={() => {
                    let carouselContainer = document.getElementById("carouselContainer")
                    carouselContainer.scrollLeft -= carouselContainer.offsetWidth
                }}>+</button>
            </div>
        </div>
    )
}

export default Carousel;