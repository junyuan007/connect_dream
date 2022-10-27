import * as React from "react";
import { Link } from "react-router-dom";
//Images
import score_rating from "./assets/Overall_Score.png";
import pie_before from "./assets/Before_ConnectDream.png";
import pie_after from "./assets/After_ConnectDream.png";
import {Image} from "semantic-ui-react";
//Icon
import Fab from "@mui/material/Fab";
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HomeIcon from '@mui/icons-material/Home';
//Display Text
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

class UnderstandPage extends React.Component {
  render() {
    return <BasicMenu />;
  }
}
function BasicMenu() {

  return (
    <html lang="en" className="App-header">

    <title>
        Understand Page
    </title>
      <h1>
        Understand Page
        </h1>
    <div className="App">

      
      {TextAnalysisResult()} <br></br>
      
      {FooterButtons()}

    </div>
    </html>

  );
}

const Overall_Display = () => <Image src={score_rating} size="standard" bordered />;
const Pie_Display_Before = () => <Image src={pie_before} size="large" bordered />;
const Pie_Display_After = () => <Image src={pie_after} size="large" bordered />;
// const ImageDreamToRoute2 = () => <Image src={tempt} size="large" bordered />;
const TextAnalysisResult = () => {
  return (
    <Box sx={{ width: '100%', maxWidth: 500 }}>

      <Typography variant="h3" gutterBottom>
        Understand Yourself Better 
      </Typography>
      {Overall_Display()} <br></br><br></br>

      {/* Strength ---------------------------------------------------- */}
      <Typography variant="h5" gutterBottom>
        Strength: <i>Income Stability</i>
      </Typography>
        <Typography variant="body1" gutterBottom>
        Your income is relatively stable as you are getting paid a fixed amount on the same date in every month. From the data shown we believe your job is not commission based, and it is relatively good for long-term dreams with a stable income. 
      </Typography>

      {/* WEAKNESS ---------------------------------------------------- */}
      <div className="App-image-side-row">

        <div className="App-image-side-column">
          {Pie_Display_Before()} <br></br>
        </div>

        <div className="App-image-side-column">
            {Pie_Display_After()} <br></br>
        </div>
      </div>
      <Typography variant="h5" gutterBottom>
      Weakness: <i>Spending behavior</i>
      </Typography>
      <Typography variant="body1" gutterBottom>
      Spending behavior based on your income per month ratio is relatively high as we realize you have been spending a lot on digital online shopping platforms. We also realize the amount of cash withdrawn from ATMs is considered high as it might cause you to lose track of the amount of money that you are spending. 
      </Typography>

      <Typography variant="body1" gutterBottom>
      Based on the analysis, the achievability of your dream is highly affected by this factor and it might cause another additional 7 years to achieve your dream for yourself to be in a financially comfortable position
      </Typography>
      <br></br><br></br>
      {/* PROJECTIONS ---------------------------------------------------- */}
      <Typography variant="h5" gutterBottom>
      Projection Achievability: <i>7 Years</i>
      </Typography>
      <Typography variant="body1" gutterBottom>
      With the analysis we have, we predict if you improve your spending behavior to a relatively good score, you might even be capable of achieving your dream in just 5 years. Remember to have some savings for the coming inflation by thinking twice before you spend on unnecessary purchases.
      </Typography>
    </Box>
  );
};



const FooterButtons = () => {
  return (
    <Box sx={{ '& > :not(style)': { m: 3 } }}>

        <Link to="/Create">
          <Fab color="primary" aria-label="add">
                <ArrowBackIosNewIcon />
              </Fab>
        </Link>
        <Link to="/">
          <Fab color="primary" aria-label="add">
                <HomeIcon />
              </Fab>
        </Link>
        <Link to="/Solutions">
          <Fab color="primary" aria-label="add">
                <ArrowForwardIosIcon />
              </Fab>
        </Link>
    </Box>
  );
};

export default UnderstandPage;
