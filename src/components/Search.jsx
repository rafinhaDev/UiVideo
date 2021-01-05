import React from 'react';
import '../assets/styles/components/Search.scss'


const Search = ()=>(
    <section className="main">
        <h2 className="main__title">¿Qué Quieres ver hoy?</h2>
        <input type="text" className="input" placeholder="Buscar..."/>
    </section>

)

export default Search