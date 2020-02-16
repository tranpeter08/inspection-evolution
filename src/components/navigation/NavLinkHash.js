import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import {NavLink} from 'react-router-dom';

const useStyles = makeStyles({
  link: {
    padding: '10px'
  },
  active: {
    color: 'white'
  }
});

export default function NavLinkHash({name, path}) {
  const classes = useStyles();

  function handleClick() {
    const sect = window.document.getElementById(path);
    if (sect) sect.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <NavLink
      activeClassName={classes.active}
      className={classes.link}
      to={path}
      onClick={handleClick}
    >
      <Typography>{name}</Typography>
    </NavLink>
  );
}
