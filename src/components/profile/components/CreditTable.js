import React from 'react'
import { makeStyles } from '@mui/styles';;

const useStyles = makeStyles({
    creditTable: {

  },
});

const CreditTable = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.creditTable}>
        <table className="table intro-table table-bordered">
            <thead className={classes.tableHead}>
                <tr style={{width: '100%'}}>
                    <th style={{width: '15%', fontWeight: 'normal', textAlign: 'center'}}>
                        Type
                    </th>
                    <th style={{width: '15%', fontWeight: 'normal', textAlign: 'center'}}>
                        Status
                    </th>
                    <th style={{width: '15%', fontWeight: 'normal', textAlign: 'center'}}>
                        Amount
                    </th>
                    <th style={{width: '15%', fontWeight: 'normal', textAlign: 'center'}}>
                        Payment method
                    </th>
                    <th style={{width: '10%', fontWeight: 'normal', textAlign: 'center'}}>
                        date
                    </th>
                    <th style={{fontWeight: 'normal', paddingLeft: 30}}>
                        Additional Info
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr style={{height: 200, border: '1px solid white'}}>
                    <td style={{border: '1px solid white'}}></td>
                    <td style={{border: '1px solid white'}}></td>
                    <td style={{border: '1px solid white'}}></td>
                    <td style={{border: '1px solid white'}}></td>
                    <td style={{border: '1px solid white'}}></td>
                    <td style={{border: '1px solid white'}}></td>
                </tr>
            </tbody>
        </table>
    </div>
  )

}

export default CreditTable
