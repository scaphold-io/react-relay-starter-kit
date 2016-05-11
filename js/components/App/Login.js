import React from 'react';
import Relay from 'react-relay';
import { hashHistory } from 'react-router';
import { Button, Modal, OverlayTrigger, NavItem, Form, FormControl, FormGroup, Row, Col, ControlLabel} from 'react-bootstrap';
import * as Auth from './../../auth/Auth';
import config from './../../../config';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      loginEmail: undefined,
      loginPassword: undefined,
      errors: undefined
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this._handleLoginEmailChange = this._handleLoginEmailChange.bind(this);
    this._handleLoginPasswordChange = this._handleLoginPasswordChange.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  _handleLoginEmailChange(e) {
    this.state.loginEmail = e.target.value;
  }
  _handleLoginPasswordChange(e) {
    this.state.loginPassword = e.target.value;
  }

  loginUser() {
    Auth.login(this.state.loginEmail, this.state.loginPassword)
      .then((result) => {
        close();
        config.userToken = result.loginUser.token;
        localStorage.userId = result.loginUser.id;
        localStorage.userToken = config.userToken;
        localStorage.email = this.state.loginEmail;
        hashHistory.push(`/home`);
      }).catch((error) => {
        var e;
        if (error) {
          e  = error.split('[ERROR]')[1];
        }
        this.setState({errors: "Error: " + e});
      });
  }

  render() {
    return (
      <NavItem onClick={this.open}>
        Login

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Login Here!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form horizontal>
              <FormGroup controlId="formLoginEmail">
                <Col componentClass={ControlLabel} smOffset={1} sm={2}>
                  Email
                </Col>
                <Col sm={8}>
                  <FormControl type="email" placeholder="Email" onChange={this._handleLoginEmailChange} />
                </Col>
              </FormGroup>

              <FormGroup controlId="formLoginPassword">
                <Col componentClass={ControlLabel} smOffset={1} sm={2}>
                  Password
                </Col>
                <Col sm={8}>
                  <FormControl type="password" placeholder="Password" onChange={this._handleLoginPasswordChange} />
                </Col>
              </FormGroup>
            </Form>
            <div style={styles.errors}>{this.state.errors}</div>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary" type="submit" onClick={this.loginUser}>Login</Button>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </NavItem>
    );
  }
}

export default Relay.createContainer(Login, {
  fragments: {
  }
});

const styles = {
  errors: {
    textAlign: 'center',
    color: 'red'
  }
};
