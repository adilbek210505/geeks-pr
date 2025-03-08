import React, {useEffect, useState} from 'react';
import axios from "axios";
import "./PakeMon.css"

const PokeMon = () => {
    const [pac,setPac] = useState([])

    const getPak = async () => {
        const url = axios.get("https://pokeapi.co/api/v2/pokemon/ ")
        const {data} = await url
        setPac(data.results)
    }

    useEffect(() => {
        getPak()
    },[])

    return (
        <>
            <div className="container">
                {
                    pac.map((el,index) =>(
                        <div className="block" key={el.name}>
                            <img width={50} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt=""/>
                            <h1>{el.name}</h1>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default PokeMon;