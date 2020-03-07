import React from 'react';
import '../App.css';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';


function SliderApp() {
    const classes = useStyles();
  return ( 
    <div className="App">
       
        <Grid container spacing={1}>
        <Card style={ {minWidth: 500, minHeight: 300 } }>
                <CardContent>


                <TextField label='Nimi ' name='nimi  'variant='outlined' fullWidth />
            
                <Typography style={{ textAlign: "left", paddingTop: "15px", color: "#808080" }}>Arvosana</Typography>
                
                <div className={classes.root}>
                <Slider
                    defaultValue={3}
                    aria-labelledby="discrete-slider-small-steps"
                    valueLabelDisplay="auto"
                    step={1}
                    marks={marks}
                    min={0}
                    max={5}
                   />
                </div>

                <FormControlLabel style={switchTyyli}
                    value="start"
                    control={<Switch color="primary" />}
                    label="Suosittelen"
                    labelPlacement="start"
                    />
                <CardActions>
                <Button variant="outlined" color="primary">
                        LISÄÄ
                </Button>
                <Button variant="outlined" color="secondary">
                        PERUUTA
                </Button>
                </CardActions>
              


                </CardContent>
            
              </Card>
              </Grid>
        

    </div>
  );
}

const switchTyyli = {
    paddingRight: 400,
}

const marks = [
    {
        value: 0,
        label: '0',
    },
    {
      value: 1,
      label: '1',
    },
    {
      value: 2,
      label: '2',
    },
    {
      value: 3,
      label: '3',
    },
    {
      value: 4,
      label: '4',
    },
    {
        value: 5,
        label: '5',
    },
  ];

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
    },
    margin: {
      height: theme.spacing(3),
    },
  }));


export default SliderApp;