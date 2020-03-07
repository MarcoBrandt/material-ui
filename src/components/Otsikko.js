import React from 'react';

function Otsikko () {
    return (
        <header style={otsikkoTyyli}>
            <h1>Grid ja Card + slider</h1>
        </header>
    )
}

const otsikkoTyyli = {
    background: '#0b802a',
    color: '#fff',
    textAlign: 'center',
    padding: '15px'
}


export default Otsikko;