import React, { useState } from 'react';

function Henkilolomake () {
    const [henkilo, setValues] = useState ({nimi: '', paiva: '', email: '',});    

    const [viesti, setViesti] = useState('');

    const muuta = (e) => {
        setValues({
            ...henkilo, 
            [e.target.name]: e.target.value
        }); 
    setViesti('');
    };

    const lisaaHenkilo = (e) => {
        e.preventDefault();
        
        if (!henkilo.nimi) {
            setViesti('Anna nimi');
            return;
        } else if (!henkilo.paiva) {
            setViesti('Anna päivämäärä');
            return;
        } else if (!henkilo.arvosana) {
            setViesti('Anna arvosana');
            return;
        } else {
            console.log("Opiskelija " + henkilo.nimi + " sai arvosanan " + henkilo.arvosana + " " + henkilo.paiva)
        setValues ({
                nimi: '', paiva: '', arvosana: '',
            });
            setViesti('Lisätty! Jippii!');         
        }  
    }

    return (
        <div>
            <form>
                <label htmlFor='nimi'>Nimi</label>
                <input type='text' name='nimi' value={henkilo.nimi} onChange={(e) => muuta(e)} /><br />
                <label htmlFor='paiva'>Päivä</label>
                <input type='text' name='paiva' value={henkilo.paiva} onChange={(e) => muuta(e)} /><br />
                <label htmlFor='arvosana'>Arvosana</label>
                <input type='number' name='arvosana' value={henkilo.arvosana} onChange={(e) => muuta(e)} /><br />
                <input type='submit' value='Lisää' onClick={ (e) => lisaaHenkilo(e)} />
            </form>
            <p> { viesti } </p>
        </div>
    )

}

export default Henkilolomake;