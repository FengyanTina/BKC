import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function ColorTabs() {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Item One"  sx={{ '&:focus': { outline: 'none' } }}/>
        <Tab value="two" label="Item Two"  sx={{ '&:focus': { outline: 'none' } }}/>
        <Tab value="three" label="Item Three"  sx={{ '&:focus': { outline: 'none' } }}/>
      </Tabs>
    </Box>
  );
}
