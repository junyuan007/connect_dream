import * as React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./App.css";
//Icon
import Fab from "@mui/material/Fab";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import HomeIcon from "@mui/icons-material/Home";

//Forms
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";

class CreatePage extends React.Component {
  render() {
    return <BasicMenu />;
  }
}
function BasicMenu() {
  return (
    <div className="App">
      <h1 className="App">Create Page</h1>
      {CreateFormInput()} <br></br>
      {FooterButtons()}
    </div>
  );
}

const currencies = [
  {
    value: "MYR",
    label: "RM",
  },
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "GBP",
    label: "£",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const dream_type = [
  {
    value: "short_type",
    label: "Short-term",
  },
  {
    value: "long_type",
    label: "Long-term",
  },
];

const dream_category = [
  {
    value: "House",
    label: "House",
  },
  {
    value: "Car",
    label: "Car",
  },
  {
    value: "Travel",
    label: "Travel",
  },
  {
    value: "Education",
    label: "Education",
  },
  {
    value: "Retirement",
    label: "Retirement",
  },
  {
    value: "Marriage Fund",
    label: "Marriage Fund",
  },
  {
    value: "Luxury Goods",
    label: "Luxury Goods",
  },
  {
    value: "Others",
    label: "Others",
  },
];

//Input Form
const CreateFormInput = () => {
  const [value, setValue] = React.useState("");
  const [currency, setCurrency] = React.useState("MYR");
  const [period, setPeriod] = React.useState("Long-term");
  const [values, setValues] = React.useState({ amount: "" });

  const handleChange_option = (event) => {
    setPeriod(event.target.value);
  };
  const handleChange_amount = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleChange_currency = (v) => setCurrency(v.target.value);

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 3, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="dream_title"
        label="Dream Title"
        variant="outlined"
        size="large"
      />
      {/* Dream's Period */}
      <TextField
        id="outlined-select-period"
        select
        label="Type of Dream"
        value={period}
        onChange={handleChange_option}
        helperText="Please select Type of Dream"
      >
        {dream_type.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      {/* Dream's Category */}
      <TextField
        id="outlined-select-category"
        select
        label="Dream Category"
        value={period}
        onChange={handleChange_option}
        helperText="Please select Type of Dream"
      >
        {dream_category.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        id="dream_description"
        label="Dream Description"
        placeholder="Description"
        multiline
        maxRows={5}
        value={value}
        onChange={handleChange_option}
      />

      {/* Dream's Currency */}
      <TextField
        id="outlined-select-currency"
        select
        label="Currency"
        value={currency}
        onChange={handleChange_currency}
        helperText="Please select currency"
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          value={values.amount}
          onChange={handleChange_amount("amount")}
          startAdornment={
            <InputAdornment position="start"> {currency} </InputAdornment>
          }
          label="Amount"
        />
      </FormControl>
    </Box>
  );
};

const FooterButtons = () => {
  return (
    <Box sx={{ "& > :not(style)": { m: 2 }, marginBottom: 2 }}>
      {/* <Link to="/">
            <IconButton sx={{ 
                color: "white", 
                backgroundColor: "#47A2D6", 
                borderRadius: "50%" 
              }} aria-label="BACK">
                <ArrowBackIosNewIcon />
            </IconButton>
        </Link> */}

      <Link to="/">
        <Fab color="primary" aria-label="add">
          <ArrowBackIosNewIcon />
        </Fab>
      </Link>

      <Link to="/understand">
        <Button variant="contained">Create Dream</Button>
      </Link>
    </Box>
  );
};

export default CreatePage;
