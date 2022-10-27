import logo from "./logo.svg";
import "./App.css";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Header,
  Icon,
  Image,
} from "semantic-ui-react";
import title_logo from "./assets/CD_LOGO_TRANS_2.png";
import { Link } from "react-router-dom";
import React from "react";
//icons
import Fab from "@mui/material/Fab";
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';


class App extends React.Component {
  render() {
    return (
      <html lang="en" className="App-header">
        <head className="App">
        
        </head>
        <body className="App">
          <img src={logo} className="App-logo" alt="logo" />
          {ImageConnectDreamTrans()}
          <div className="App-logo-tag-line">
          <Typography variant="h6" gutterBottom>
              <i>Dare to Dream, Dare to Be.</i>
          </Typography>
          </div>
          <a
            className="App-link"
            href="https://www.hlb.com.my/en/personal-banking/home.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            HLB Official Website <br></br><br></br>
          </a>

          {/* Create Button */}
          <div className="App">
          {CreateDreamButton()}<br></br>
          </div>
          </body>
        
      </html>
    );
  }
}

const FormExampleForm = () => (
  <Form>
    <Form.Field>
      <label>First Name</label>
      <input placeholder="First Name" />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder="Last Name" />
    </Form.Field>
    <Form.Field>
      <Checkbox label="I agree to the Terms and Conditions" />
    </Form.Field>
    <Button type="submit">Submit</Button>
  </Form>
);

const CreateDreamButton = () => {
  return (
    <div>
        <Link to="/create">
              <Fab color="primary" aria-label="add">
                <AddIcon />
              </Fab>
            </Link>
    </div>
  );
};
const ImageConnectDreamTrans = () => <Image src={title_logo} size="medium" centered bordered />;

// Unused 
const InputExampleInput = () => <Input placeholder="Search..." />;
const ImageExampleBordered = () => <Image src={title_logo} size="medium" bordered />;
const HeaderExampleUsersIcon = () => {
  return (
    <html lang="en">
    <div>
      <Header as="h2" icon textAlign="center">
        <Icon name="users" circular />
        <Header.Content>Kawan</Header.Content>
      </Header>
      <Image
        centered
        size="large"
        src="/images/wireframe/centered-paragraph.png"
      />
    </div>
    </html>
  );
};

export default App;
