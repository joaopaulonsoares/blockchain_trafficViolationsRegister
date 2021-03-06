import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import { Link } from "react-router-dom";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PersonIcon from '@material-ui/icons/Person';
import WarningIcon from '@material-ui/icons/Warning';
import { INFRACTION_LIST_PAGE_URL, DRIVER_PROFILE_PAGE_URL} from '../../../api_urls'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));


export default function NestedToolListUser(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <AccountCircleIcon></AccountCircleIcon>
        </ListItemIcon>
        <ListItemText primary={"Área do Motorista"} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

        <ListItem  button component={Link} to={DRIVER_PROFILE_PAGE_URL} className={classes.nested}>
            <ListItemIcon>
              <Icon>
                <PersonIcon></PersonIcon>
              </Icon>
            </ListItemIcon>
            <ListItemText primary="Meu Perfil" />
        </ListItem>

        <ListItem button component={Link} to={INFRACTION_LIST_PAGE_URL} className={classes.nested}>
            <ListItemIcon>
              <Icon>
                <WarningIcon></WarningIcon>
              </Icon>
            </ListItemIcon>
            <ListItemText primary="Minhas Infrações" />
        </ListItem>
        
        </List>
      </Collapse>
    </List>
  );
}
