import React, { useState, useEffect } from 'react'
import './Itemdetailcontainer.css'
import Itemdetail from '../Itemdetail/Itemdetail'
import { getSingleItem } from '../../services/firestore'
import {useParams} from 'react-router-dom'
import Loader from '../Loader/Loader'

function Itemdetailcontainer() {
    const [data, setData] = useState({}); 
    const [error, setError] = useState(false)
    const params = useParams()
    const id = params.id
    useEffect(() => {
        getSingleItem(id)
            .then((respuestaDatos) => setData(respuestaDatos))
            .catch((errormsg) => setError(errormsg.message))
    }, [id]) 

    if (!data.title) { 
        return (
        <div>
            {error ? <h2>{error}</h2> : <Loader/>}
        </div>
        ) 
    }

    return (
        <>
            <div className='item-detail__container'>
                <Itemdetail
                    id={data.id}
                    title={data.title}
                    detail={data.detail}
                    img={data.img}
                    stock={data.stock}
                    price={data.price}
                    ingredientes={data.ingredientes}
                    extradetail={data.extradetail}
                    imgaminograma={data.imgaminograma}
                    imgnutri={data.imginfonutri}
                    />
            </div> 
        </>
    )
}

export default Itemdetailcontainer