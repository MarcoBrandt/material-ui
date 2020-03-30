import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { blue} from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import { CardHeader } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
      margin:10, 
      padding:10,
      color: blue[300],
      maxWidth: 345,
      background: 'linear-gradient(130deg, #ff9633 30%, #21cbf3 80%)',
      borderRadius: 25,
      borderWidth: 20,
    },
    image: {
      height: 300,
      width: 200,
    },
    div: {
      textAlign:'center', 
      marginTop: 10,
    },
    button: {
      textAlign: 'center',
      flexGrow: 1,
    },
    dark: {
        color: '#f4f4f4'
    }
  });

function Gridi2(props) {
 
    const classes = useStyles();
 
    return (
    
    <Grid container spacing={5}>
      { 
        props.data.map(data => {
           return (
            <Grid item key={ data.id }>
              <Card className={ classes.card }>
                <CardContent>

                <CardActions>
                    <div className={  classes.button } >
                    <Button startIcon={ <AccountCircleIcon /> }>Näytä</Button>
                    <Button color='secondary' startIcon={ <DeleteIcon/> }>Poista</Button>
                    </div>
                </CardActions>

                <CardHeader
                    className={ classes.dark }
                    title={ data.otsikko }
                    subheader={ data.paiva } />

                {
                      data.picture ?
                          <CardMedia
                            className={ classes.image }
                            image={ data.picture }
                            title={ data.nimi } />
                          :
                          <Typography style={ {height: 300, width: 200} }>Ei kuvaa</Typography> 
                    }
                </CardContent>
                
              </Card>
            </Grid>
        )}
      )}
    </Grid>
  );
}

export default Gridi2;