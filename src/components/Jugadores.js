import React from 'react'

import '../styles/Jugadores.css'

function Jugadores(props) {
    return (
        <div className='mb-3'>
            <div class="container">

                <div className="row justify-content-around bg-primary m-2">

                    <div className="col-sm-3 col-lg-3 m-5 bg-primary">
                        <img src={require(`../img/${props.imagen}.jpg`)} alt="" className='w-100 rounded-circle img-fluid' />
                    </div>
                    <div className="col-sm-6 col-lg-7 bg-light m-5 rounded-3">
                        <p className='m-3'>{props.texto}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Jugadores