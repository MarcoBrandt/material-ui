import React from 'react';
import '../App.css';
import Otsikko from './Otsikko';
import SliderApp from './Slider';

function MyApp() {

  return ( 
    <div className="App">
        <div className="container">
            <Otsikko />
            <SliderApp />
        </div>

    </div>
  );
}

export default MyApp;
