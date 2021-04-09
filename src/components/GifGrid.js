import React from "react";
import { useFetchGifts } from "../hooks/useFetchGifts";
import Item from './GifGridItem';

function GifGrid({category}) {

    const {data:images, loading} = useFetchGifts(category);

    return (
        <>
            <h3 className="animate__animated  animate__fadeIn">{ category }</h3>
            { loading && <p className="animate__animated  animate__flash">Cargando</p> }

            <div className="card-grid">
                {
                    images.map(img => (
                        <Item 
                            key={img.id} 
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
export default GifGrid;