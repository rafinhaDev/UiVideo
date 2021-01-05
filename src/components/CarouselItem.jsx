import React from 'react';
import '../assets/styles/components/CarouselItem.scss'
const CarouselItem = () => (
    <div className="carousel--item">
        <img className="carousel--item__img" src="../assets/img/pexels-wendy-wei-2513841.jpg" alt="imgCarousel"/>
        <div className="carousel--item__details">
            <div>
                <img className="carousel-item__details--img" src="../assets/img/good-cinema.png" alt="icon"/>
                <img className="carousel-item__details--img" src="../assets/img/tocar.png" alt="touch"/>
            </div>
            <p className="carousel-item__details--title">Titulo Descriptivo</p>
            <p className="carousel-item__details--subtitle">2020 +35 116 minutos</p>
        </div>

    </div>
)

export default CarouselItem