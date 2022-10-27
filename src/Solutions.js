import * as React from "react";
import { Link } from "react-router-dom";
//Image only
import {Image} from "semantic-ui-react";
// import salary_stats from "./assets/try_pie.png";
import solution_1 from "./assets/HLB_C_APP.png";
import solution_2 from "./assets/Car_Loan_Ads.png";
//Icon
import Fab from "@mui/material/Fab";
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HomeIcon from '@mui/icons-material/Home';
//Display Text
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

class SolutionsPage extends React.Component {
  render() {
    return <BasicMenu />;
  }
}
function BasicMenu() {

  return (

    <html lang="en" className="App-header">

    <title>
      Solutions Page
    </title>
    <h1>
      Solutions Page
      </h1>

    <div className="App">
      {/* {ImageDreamToRoute()} */}
      {display_content()}
      <br></br><br></br>
      {FooterButtons()}  
    </div>
    </html>

  );
}
const display_content = () => {
  return (
    <Box sx={{ width: '100%', maxWidth: 500 }}>

      <Typography variant="h4" gutterBottom>
        Solutions just for you
      </Typography>

      <Typography variant="body1" gutterBottom>
      We strongly believe that your spending behavior is the main obstacle that is between you and your dream. Therefore, we would like to strongly advise you to open an additional savings account just for your monthly expenses. During the day you get paid you can transfer a fixed amount into the newly opened savings account for the entire month’s expenses. This will limit the money you can use for every month and increase your savings at a fixed rate.
For example: a constant monthly saving RM800 you will have a a projected sum of saving for the year of RM9000 as this might be higher due to increment in monthly salary and so on.

      </Typography>

      {solutions_1_display()} <br></br>
        <a
            className="App-link"
            href="https://www.hlb.com.my/en/personal-banking/hlb-connect.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i>HLB Connect App</i> <br></br>
        </a>

      <Typography variant="body1" gutterBottom>
      We also would like to encourage you to use Hong Leong Connect on a normal basis for spending money. Because it allows you to keep track of your spending better by providing an e-Statement via email monthly. It can solve your problem of losing track of cash spending by using the in-app QR Pay system.

      </Typography> <br></br>
      {solutions_2_display()} <br></br>
      <p><b>
        Solutions just for you → </b>
        <a
            className="App-link"
            href="https://www.hlb.com.my/en/personal-banking/loans/motor-loan/auto-loans.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i>HLB Auto Loan</i> <br></br>
        </a>
      </p>
      <Typography variant="body1" gutterBottom>
      We believe this is the product which bridges you and your dream as we have some attractive rates for this specific banking solution. Based on your monthly savings which is RM800 we concluded that it is suitable for you to get a 7-years loan for monthly payment at RM 500 to achieve this dream at a comfortable rate
Although this is a common product use by the majority to buy a car, but we hope that you will be able to understand fully about the entire products including the consequences of late payment charges or even repossessing of the car when there is a default on payment. 
      </Typography>
    </Box>
  );
};
//https://www.hlb.com.my/en/personal-banking/hlb-connect.html
const FooterButtons = () => {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>

        <Link to="/Understand">
          <Fab color="primary" aria-label="add">
                <ArrowBackIosNewIcon />
              </Fab>
        </Link>
        <Link to="/">
          <Fab color="primary" aria-label="add">
                <HomeIcon />
              </Fab>
        </Link>
        <Link to="/Advice">
          <Fab color="primary" aria-label="add">
                <ArrowForwardIosIcon />
              </Fab>
        </Link> 

    </Box>
  );
};

//const ImageDreamToRoute = () => <Image src={salary_stats} size="normal" bordered />;
const solutions_1_display = () => <Image src={solution_1} size="Standard"/>;
const solutions_2_display = () => <Image src={solution_2} size="standard"/>;
export default SolutionsPage;
