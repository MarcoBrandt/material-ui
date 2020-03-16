import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';

import InfoIcon from '@material-ui/icons/Info';
import PersonIcon from '@material-ui/icons/Person';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
        <List>
        <ListItem button>   
            <ListItemIcon>
                <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="Tietoja" />
            </ListItem>
        <ListItem button>   
            <ListItemIcon>
                <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="Omat tiedot" />
            </ListItem>
     </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer('left', true)}><MenuIcon/></Button>
 
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>

    </div>
  );
}

