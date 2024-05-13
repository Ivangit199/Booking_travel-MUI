import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IconButton, Typography} from '@mui/material'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import { makeStyles } from '@mui/styles';
import RadiusButton from '../../common/RadiusButton'
import RadiusToolbar from '../../common/RadiusToolbar'
import { Label } from 'reactstrap'
import BlueAppbar from '../../common/BlueAppbar'
import IconBrand from '../../common/IconBrand';

const Header = () => {

  return (
      <BlueAppbar>
        <RadiusToolbar>
          <IconBrand/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <label> bookai.travel</label>
          </Typography>
          <RadiusButton children="Sign-up">
          </RadiusButton> 
          <RadiusButton 
            color="inherit" children="Log-in">
          </RadiusButton>
        </RadiusToolbar>
      </BlueAppbar>
  )
}

export default Header
