import React from 'react';
import Relay from 'react-relay';
import { hashHistory } from 'react-router';
import { Button, Modal, OverlayTrigger, NavItem, Form, FormControl, FormGroup, Row, Col, ControlLabel} from 'react-bootstrap';
import * as Auth from './../../auth/Auth';
import config from './../../../config';

class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      registerEmail: undefined,
      registerPassword: undefined,
      errors: undefined
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this._handleRegisterEmailChange = this._handleRegisterEmailChange.bind(this);
    this._handleRegisterPasswordChange = this._handleRegisterPasswordChange.bind(this);
    this.registerUser = this.registerUser.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  registerUser() {
    Auth.register(this.state.registerEmail, this.state.registerPassword)
      .then((result) => {
        close();
        config.userToken = result.loginUser.token;
        localStorage.userId = result.loginUser.id;
        localStorage.userToken = config.userToken;
        localStorage.email = this.state.registerEmail;
        hashHistory.push(`/home`);
      }).catch((error) => {
        // var e  = error.split('[ERROR]')[1];
        this.setState({errors: "Error: " + error});
      });
  }

  _handleRegisterEmailChange(e) {
    this.state.registerEmail = e.target.value;
  }

  _handleRegisterPasswordChange(e) {
    this.state.registerPassword = e.target.value;
  }

  render() {
    return (
      <NavItem onClick={this.open}>
        Register

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Register Here!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form horizontal>
              <Row>
                <FormGroup controlId="formRegisterEmail">
                  <Col componentClass={ControlLabel} smOffset={1} sm={2}>
                    Email
                  </Col>
                  <Col sm={8}>
                    <FormControl type="email" placeholder="Email" onChange={this._handleRegisterEmailChange} />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formRegisterPassword">
                  <Col componentClass={ControlLabel} smOffset={1} sm={2}>
                    Password
                  </Col>
                  <Col sm={8}>
                    <FormControl type="password" placeholder="Password" onChange={this._handleRegisterPasswordChange} />
                  </Col>
                </FormGroup>
              </Row>
            </Form>
            <div style={styles.errors}>{this.state.errors}</div>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary" type="submit" onClick={this.registerUser}>Register</Button>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </NavItem>
    );
  }
}

export default Relay.createContainer(Register, {
  fragments: {
  }
});

const styles = {
  errors: {
    textAlign: 'center',
    color: 'red'
  }
};
