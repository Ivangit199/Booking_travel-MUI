import React from 'react'
import { makeStyles } from '@mui/styles';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'

const useStyles = makeStyles({
    mainLabel: {
        width: '22%',
        color: 'white',
        display: 'grid',
        marginRight: 20,
        fontSize: 16,
    },
    disabledInput: {
        width: '100%',
        backgroundColor: 'black',
        padding: 10,
        color: 'white',
        borderRadius: 7,
        border: '1px solid rgb(218,218,218)',
        height: 50,
        display: 'inline-flex'
    },
});

const SpanLabel = ({ children, content }) => {
  const classes = useStyles();
  const contentStyle = content.includes('*') ? { padding: '10px' } : {};

  return (
    <div className={classes.mainLabel}>
        <label style={{marginLeft:20}}>{children}</label>
        <label className={classes.disabledInput}>
            <span style={{ width: '70%', ...contentStyle }}>{content}</span>
            <span style={{width: '30%', cursor: 'pointer'}}>Change</span>
        </label>
    </div>
  )
}
export default SpanLabel
