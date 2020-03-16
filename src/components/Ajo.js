import React from 'react';
import '../App.css';

function Ajo (props) {
    let alku = props.ajopaivakirja.alku.lukema;
    let loppu = props.ajopaivakirja.loppu.lukema;
    let matka = loppu - alku;

    //let matka = props.ajopaivakirja.loppu.lukema - props.ajopaivakija.alku.lukema;

    return (
        <div>
            <header className="App-header">      
                <h2>Ajopäiväkirja</h2>
                <p>
                  Nimi: { props.ajopaivakirja.laatija }  <br />
                  Rekisterinumero: { props.ajopaivakirja.rekisterinro } <br />
                  Matka: {matka} kilometriä<br />
                <br />
                  Tekijä: {props.ajopaivakirja.luoja}
                </p>
            
            
            </header>
        </div>
    )
}

export default Ajo;