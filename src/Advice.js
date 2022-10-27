import * as React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

//Icon
import Fab from "@mui/material/Fab";
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HomeIcon from '@mui/icons-material/Home';
import Box from '@mui/material/Box';

//Radio
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';

import Alert from '@mui/material/Alert';

class AdvicePage extends React.Component {
  render() {
    return <BasicMenu />;
  }
}
function BasicMenu() {

  return (

    <html lang="en" className="App-header">
    <title>
        Advice Page
    </title>
    <h1>Advice Page</h1>

    <div className="App">  
    {/* <Alert variant="outlined" severity="success">
        This is a success alert — check it out!
      </Alert> */}
      {RadioPopQuiz()}
      {FooterButtons()} 
        
    </div>
    </html>

  );
}

// -------------------------------------------------------------------
const RadioPopQuiz = () => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Choose wisely');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === 'YES') {
      setHelperText('Wrong answer! You should always consider about the costs after sales which includes fuel consumption, service maintenance, insurance, etc.');
      setError(true);
    } else if (value === 'NO') {
      setHelperText('Correct answer! Achieving ');
      setError(false);
    } else {
      setHelperText('Please select an option.');
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl sx={{ m: 3 }} error={error} variant="standard">
        <FormLabel id="demo-error-radios"><b>LnD time:</b> Is it suitable to buy your dream car when you 
                                                          have just enough cash flow 
                                                          for the commitment of purchasing it? </FormLabel>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
          <FormControlLabel value="YES" control={<Radio/>} label="Yes, let's buy my dream car." />
          <FormControlLabel value="NO" control={<Radio/>} label="No, let's have more cash flow first." />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          Check Answer
        </Button>
      </FormControl>
    </form>
  );
};

// -------------------------------------------------------------------

const FooterButtons = () => {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Link to="/Solutions">
          <Fab color="primary" aria-label="add">
                <ArrowBackIosNewIcon />
              </Fab>
        </Link>
        <Link to="/">
          <Fab color="primary" aria-label="add">
                <HomeIcon />
              </Fab>
        </Link>
        <Link to="/">
          <Fab color="primary" aria-label="add">
                <ArrowForwardIosIcon />
              </Fab>
        </Link>
        
        {/* <Link to="/Solutions">
            <IconButton sx={{ 
                color: "white", 
                backgroundColor: "#47A2D6", 
                borderRadius: "50%" 
              }}aria-label="BACK"
              size="large">
                <ArrowBackIosNewIcon />
            </IconButton>
        </Link>

        <Link to="/">
            <IconButton sx={{ 
                color: "white", 
                backgroundColor: "#D53F31", 
                borderRadius: "50%" 
              }}aria-label="HOME"
              size="large">
                <HomeIcon />
            </IconButton>
        </Link>
        
        <Link to="/">
            <IconButton sx={{ 
                color: "white", 
                backgroundColor: "#47A2D6", 
                borderRadius: "50%" 
              }}aria-label="NEXT"
              size="large">
                <ArrowForwardIosIcon />
            </IconButton>
        </Link> */}
    </Box>
  );
};

export default AdvicePage;
