import React from 'react';

function Otsikko () {
    return (
        <header style={otsikkoTyyli}>
            <h1>Material-UI</h1>
        </header>
    )
}

const otsikkoTyyli = {
    background: '#0077b3',
    color: '#fff',
    textAlign: 'center',
    padding: '15px'
}


export default Otsikko;