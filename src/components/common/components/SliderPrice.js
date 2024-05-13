import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}

const sliderStyles = {
    width: '100%', // Set the width to 100%
  };

export default function SliderPrice() {
  const [value, setValue] = React.useState([11, 381]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={11}  // Minimum value
        max={381} // Maximum value
        width={'100%'}

      />
    </Box>
  );
}