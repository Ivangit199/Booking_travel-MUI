import React from 'react'
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
    verticalLine: {
        height: 20,
        backgroundColor: 'white',
        width: 1
    },
    borderRound: {
        backgroundColor: 'white',
        width: 10,
        height: 10,
        borderRadius: 10,
        marginLeft: '-5px'
    }
})

const VerticalLine = () => {
    const classes = useStyles();
    return(
        <div style={{marginLeft: 25, marginRight: 45}}>
            <div className={classes.verticalLine}>               
            </div>
            <div className={classes.borderRound}
            ></div>
            <div className={classes.verticalLine}>               
            </div>
        </div>
    )
}

export default VerticalLine