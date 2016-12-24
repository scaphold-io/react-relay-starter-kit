import React from 'react';
import Relay from 'react-relay';
import { hashHistory } from 'react-router';
import { Button, Modal, OverlayTrigger, NavItem, Form, FormControl, FormGroup, Row, Col, ControlLabel, Alert } from 'react-bootstrap';
import * as Auth from './../../auth/Auth';
import config from './../../../config';

class Register extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      registerEmail: '',
      registerPassword: '',
      errors: null
    };

    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this._handleRegisterEmailChange = this._handleRegisterEmailChange.bind(this);
    this._handleRegisterPasswordChange = this._handleRegisterPasswordChange.bind(this);
    this.validateInput = this.validateInput.bind(this);
    this.registerUser = this.registerUser.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  _handleRegisterEmailChange(e) {
    this.setState({
      registerEmail: e.target.value
    });
  }

  _handleRegisterPasswordChange(e) {
    this.setState({
      registerPassword: e.target.value
    })
  }

  validateInput() {
    return (
      this.state.registerEmail && this.state.registerEmail.length &&
      this.state.registerPassword && this.state.registerPassword.length
    );
  }

  registerUser() {
    if (this.validateInput()) {
      Auth.register(this.state.registerEmail, this.state.registerPassword).then(data => {
        if (!data.errors) {
          localStorage.setItem('scapholdAuthToken', data.loginUser.token);
          localStorage.setItem('user', JSON.stringify(data.loginUser.user));
          this.setState({ errors: [] });
          hashHistory.push('/home');
        } else {
          this.setState({ errors: data.errors });
        }
      }).catch(errors => {
        this.setState({ errors });
      });
    } else {
      this.setState({
        errors: 'Username or password was not filled out. Please fill out the required fields.'
      });
    }
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
            <div style={styles.errors}>
              {
                this.state.errors ?
                  <Alert bsStyle="danger">{this.state.errors}</Alert> : ''
              }
            </div>
            <Form horizontal>
              <Row>
                <FormGroup>
                  <Col componentClass={ControlLabel} smOffset={1} sm={2}>
                    Email
                  </Col>
                  <Col sm={8}>
                    <FormControl type="email" placeholder="Email" onChange={this._handleRegisterEmailChange} />
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col componentClass={ControlLabel} smOffset={1} sm={2}>
                    Password
                  </Col>
                  <Col sm={8}>
                    <FormControl type="password" placeholder="Password" onChange={this._handleRegisterPasswordChange} />
                  </Col>
                </FormGroup>
              </Row>
            </Form>
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

const styles = {
  errors: {
    textAlign: 'left',
    color: 'red'
  }
};

export default Relay.createContainer(Register, {
  fragments: {}
});
