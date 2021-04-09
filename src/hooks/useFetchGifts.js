import {useEffect, useState} from 'react';
import {getGif} from '../components/helpers/getGifs';


export const useFetchGifts = (category) => {

    const [state, setState] = useState({
        data:[],
        loading: true
    });

    
    useEffect(() => {
        getGif(category)
            .then( imgs => {
                setState({
                    data:imgs,
                    loading:false
                })
            })
    }, [category])


    return state;
}