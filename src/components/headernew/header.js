import React from "react"; 
import { makeStyles } from '@mui/styles';
import MainHead from "./MainHeader";
import TopText from "./TopText";

const useStyles = makeStyles({
    mainBackground: {
        backgroundColor: 'black'
    }
  });


const Header = () => {
    const classes = useStyles();    
    return(
        <div className={classes.mainBackground}>
            <TopText/>
            <MainHead></MainHead>
        </div>
    )
}

export default Header