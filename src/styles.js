import {
    makeStyles
  } from '@material-ui/core';


 const useStyles = makeStyles((theme) => ({
    card: {
    marginBottom: theme.spacing(5),
    background: "black",
    color:'white',
    },
    cardArea: {
      margin: "0 auto",
      width: "90vw",
    },
    media: {
    height: "auto",
    marginRight: 'auto',
    marginLeft: 'auto',
    },
    content:{
      color: "white",
      lineHeight: 2,
      fontSize: "15px",
    },
    links:{
      display: "flex",
      justifyContent: "space-between",
      margin: "0 auto",
      width: "90vw",
      color: "rgb(194, 6, 6)",
      '& hover': {
        color: "white",
      },
    }

  })) 
  
  export default useStyles