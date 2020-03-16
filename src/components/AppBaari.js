import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import CreateIcon from '@material-ui/icons/Create';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import MenuIcon from '@material-ui/icons/Menu';

import ListaApp from './ListaApp';
import AjoApp from './AjoApp';
import MyGridApp from './MyGridApp';
import Henkilolomake from './Henkilolomake';
import Menut from './Menut';
import Menut2 from './Menut2';

function AppBaari(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={4}>{children}</Box>}
    </Typography>
  );
}

AppBaari.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab icon={<DriveEtaIcon/>} label="Ajopäiväkirja (Tehtävä 2)" {...a11yProps(0)} />
          <Tab icon={<CreateIcon/>} label="Arviointi (Tehtävä 3)" {...a11yProps(1)} />
          <Tab icon={<FastfoodIcon/>} label="Ruokahaku (Tehtävä 4)" {...a11yProps(2)} />
          <Tab icon={<CreateIcon/>} label="Lomake (Tehtävä 5)" {...a11yProps(3)} />
          <Tab icon={<MenuIcon/>} label="Menu (Tehtävä 6)" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <AppBaari value={value} index={0}>
        <AjoApp />
      </AppBaari>
      <AppBaari value={value} index={1}>
        <Henkilolomake />
      </AppBaari>
      <AppBaari value={value} index={2}>
        <ListaApp />
      </AppBaari>
      <AppBaari value={value} index={3}>
        <MyGridApp />
      </AppBaari>
      <AppBaari value={value} index={4}>
        <Menut2 />
        <Menut /> 
      </AppBaari>
    </div>
  );
}