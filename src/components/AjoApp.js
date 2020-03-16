import React from 'react';
import Ajo from './Ajo'

const ajopaivakirja = {
    rekisterinro: "XYZ-123",
    laatija: "Risto Reipas",
    luoja: "Marco Brandt",
    alku: {
        lukema: "32500",
        lahtoaika: "13:30",
        paiva: "2020-01-27",
        paikka: "Ratapihantie 13, Helsinki",

},
    loppu: {
        lukema: "32510",
        loppuaika: "13:50",
        paiva: "2020-06-27",
        paikka: "Hietakummuntie 1, Helsinki",
}
 } 

function AjoApp () {
    return (
        <div>
            <Ajo ajopaivakirja = { ajopaivakirja } />
        </div>
    )
}

export default AjoApp;