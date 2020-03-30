import React from 'react';
import '../App.css';
import AppBaari from './AppBaari';
import { CssBaseline, MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import {amber, lightBlue, brown} from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: { primary: {main: lightBlue[500], contrastText: '#FFFFFF'},
  secondary: {main: amber[300], contrastText: lightBlue[50]},
  text: {primary: brown[800], secondary: brown[50 ] }, 
  },  
  typography: {fontFamily: ['Poppins', 'Sans Serif']}
});

function MyApp() {

  return ( 
    <MuiThemeProvider theme= { theme }>
      <div className="App">
          <div className="container">
              <CssBaseline />
              <AppBaari />
          </div>
      </div>
    </MuiThemeProvider>
  );
}

export default MyApp;
