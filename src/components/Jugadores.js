import React from 'react'

import '../styles/Jugadores.css'

function Jugadores(props) {
    return (
        <div className='mb-5'>
            <div class="container">

                <div className="row justify-content-around bg-primary">

                    <div className="col-3 m-5 bg-primary">
                        <img src={require(`../img/${props.imagen}.png`)} alt="" className='w-100' />
                    </div>
                    <div className="col-6 bg-light m-5">
                        <p>{props.texto}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Jugadores