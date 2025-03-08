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
    console.log(pac)

    return (
        <>
            <div className="container">
                {
                    pac.map(el => (
                        <div className="block" key={el.name}>
                            <h2>{el.name}</h2>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default PokeMon;