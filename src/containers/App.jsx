import React from 'react';
import '../assets/styles/App.scss'
import Header from '../components/Header';
import Search from '../components/Search';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Categories from '../components/Categorias';


const App = () => (
    <div className="App">
        <Header />
        <Search />
        <Categories>
            <Carousel>
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                
            </Carousel>
        </Categories>
        
    </div>
);

export default App