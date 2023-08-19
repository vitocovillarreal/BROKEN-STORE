import { useState } from 'react'

function Button(props) {

    return (
        <button
            onClick={props.onClick}
            className='btn item-count__btn-add'
        >
            {props.children}
        </button> )
}

export default Button