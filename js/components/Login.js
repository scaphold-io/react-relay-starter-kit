import React from 'react';
import Relay from 'react-relay';
import { hashHistory } from 'react-router';
import { Form, FormGroup, Col, ControlLabel, FormControl, Checkbox, Button } from 'react-bootstrap';
// import RegisterMutation from '../mutations/RegisterMutation';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginEmail: undefined,
      loginPassword: undefined,
      registerEmail: undefined,
      registerPassword: undefined
    }
    this.handleLoginEmailChange = this.handleLoginEmailChange.bind(this);
    this.handleLoginPasswordChange = this.handleLoginPasswordChange.bind(this);
    this.handleRegisterEmailChange = this.handleRegisterEmailChange.bind(this);
    this.handleRegisterPasswordChange = this.handleRegisterPasswordChange.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.registerUser = this.registerUser.bind(this);
  }
  loginUser() {
    console.log("LOGIN");
    console.log(this);

  }
  handleLoginEmailChange(e) {
    this.state.loginEmail = e.target.value;
  }
  handleLoginPasswordChange(e) {
    this.state.loginPassword = e.target.value;
  }
  registerUser() {
    console.log("REGISTER");
    console.log(this);

    // Relay.Store.commitUpdate(new RegisterMutation({
    //   input: {
    //     credentials: {
    //       basic: {
    //         email: this.state.registerEmail,
    //         password: this.state.registerPassword
    //       }
    //     }
    //   }
    // }));
    // console.log(this.props);

    // Assuming the above works...
    hashHistory.push('/home');

  }
  handleRegisterEmailChange(e) {
    this.state.registerEmail = e.target.value;
  }
  handleRegisterPasswordChange(e) {
    this.state.registerPassword = e.target.value;
  }
  render() {
    console.log("Login.props");
    console.log(this.props);
    return (
      <div>
        <h3>Login Here!</h3>
        <Form horizontal>
          <FormGroup controlId="formLoginEmail">
            <Col componentClass={ControlLabel} sm={1}>
              Email
            </Col>
            <Col sm={5}>
              <FormControl type="email" placeholder="Email" onChange={this.handleLoginEmailChange} value={this.state.loginEmail} />
            </Col>
          </FormGroup>

          <FormGroup controlId="formLoginPassword">
            <Col componentClass={ControlLabel} sm={1}>
              Password
            </Col>
            <Col sm={5}>
              <FormControl type="password" placeholder="Password" onChange={this.handleLoginPasswordChange} value={this.state.loginPassword} />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={1} sm={5}>
              <Button type="submit" onClick={this.loginUser}>
                Sign in
              </Button>
            </Col>
          </FormGroup>
        </Form>

        <br />

        <h3>Register Here!</h3>
        <Form horizontal>
          <FormGroup controlId="formRegisterEmail">
            <Col componentClass={ControlLabel} sm={1}>
              Email
            </Col>
            <Col sm={5}>
              <FormControl type="email" placeholder="Email" onChange={this.handleRegisterEmailChange} value={this.state.registerEmail} />
            </Col>
          </FormGroup>

          <FormGroup controlId="formRegisterPassword">
            <Col componentClass={ControlLabel} sm={1}>
              Password
            </Col>
            <Col sm={5}>
              <FormControl type="password" placeholder="Password" onChange={this.handleRegisterPasswordChange} value={this.state.registerPassword} />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={1} sm={5}>
              <Button type="submit" onClick={this.registerUser}>
                Register
              </Button>
            </Col>
          </FormGroup>
        </Form>

      </div>
    );
  }
}

export default Relay.createContainer(Login, {
  initialVariables: {
    // input: null
  },
  fragments: {
    // user: () => Relay.QL `
    //   fragment on UserMutationSet {
    //     create (input: $input) {
    //       id
    //     }
    //   }
    // `,
  }
});