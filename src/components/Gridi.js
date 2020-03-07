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


function Gridi(props) {
  return (
    
    <Grid container spacing={5}>
      { 
        props.data.map(data => {
           return (
            <Grid item key={ data.id }>
              <Card style={ {minWidth: 250, minHeight: 400 } }>
                <CardContent>

                <CardActions>
                <Button startIcon={ <AccountCircleIcon /> }>Näytä</Button>
                <Button color='secondary' startIcon={ <DeleteIcon/> }>Poista</Button>
                </CardActions>

                  <Typography variant='h5'>{ data.otsikko }</Typography>
                  <Typography>{ data.paiva }</Typography>
                    {
                      data.picture ?
                          <CardMedia
                            style={ {height: 300, width: 200} }
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

export default Gridi;