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
import image from "./assets/placeholder.jpg";
import { Link } from "react-router-dom";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Link to="/other">
          <Button content="link to other" secondary></Button>
        </Link>
        <button>primary</button>

        {FormExampleForm()}

        {InputExampleInput}
        {ImageExampleBordered()}
      </div>
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

const InputExampleInput = () => <Input placeholder="Search..." />;

const ImageExampleBordered = () => <Image src={image} size="medium" bordered />;

const HeaderExampleUsersIcon = () => {
  return (
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
  );
};

export default App;
