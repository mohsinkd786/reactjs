import { Container,Col,Button,Card,CardHeader,CardBody ,Form,FormGroup,Input, Label, Alert, FormFeedback,FormText} from "reactstrap";
import React, { Component } from 'react';

class User extends Component {
    constructor(props) {
        super(props);
          this.state = {
          'email': '',
          validate: {
            emailState: '',
          },
        }
        //this.handleChange = this.handleChange.bind(this);
      }
    validateEmail(e) {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { validate } = this.state
        if (emailRex.test(e.target.value)) {
        validate.emailState = 'valid'
        } else {
        validate.emailState = 'invalid'
        }
        this.setState({ validate })
    }
    submitForm(e) {
        e.preventDefault();
        console.log(`Email: ${ this.state.email }`)
        }
    render() {
      return (
        <Container>
            <Col xl="4">
            <Card>
              <CardHeader >
                 <Alert color='info'> User Form</Alert>
              </CardHeader>
              <CardBody>
                <Form className="form" onSubmit={ (e) => this.submitForm(e) }>
                  <Label>Name</Label>
                  <FormGroup name='name'>
                    <Input type="text" placeholder="Name" />
                           </FormGroup>
                  <Label>Email</Label>
                  <FormGroup name='email'>
                    <Input type="email" placeholder="Email" 
                    valid={ this.state.validate.emailState === 'valid' }
                    invalid={ this.state.validate.emailState === 'invalid' }
                    onChange={ (e) => {this.validateEmail(e)}}/>
                                
                    <FormText>Please specify your email here : youremail@email.com</FormText>
                    <FormFeedback>Invalid Email</FormFeedback>
                   </FormGroup>
                  <Label>Password</Label>
                  <FormGroup>
                    <Input type="password" placeholder="Password" />
                  </FormGroup>
                  <Label>Phone</Label>
                  <FormGroup>
                    <Input type="number" placeholder="Phone" />
                  </FormGroup>
                  <Label>Marital Status</Label>
                  <FormGroup>
                    <Input type='select' name=''>
                      <option>Bachelor</option>
                      <option>Married</option>
                      <option>Dont want to disclose</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Button name='register' value='Register' color='primary' block>Register</Button>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
            </Col>
            
          
        </Container>
      );
    }
  }
export default User