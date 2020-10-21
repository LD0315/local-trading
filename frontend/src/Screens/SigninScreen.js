import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/userActions';
//import { Button, Form, Header, Input, Message, Segment } from 'semantic-ui-react';
//import { login as loginFn } from './api/auth';
//import { setToken } from './utils/auth';

/*
class Login extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      email: 'kiala@test.com',
      error: null,
      isLoading: false,
      password: '1234'
    };
  }
  
    handleChange = event => {
      const key = event.target.name;
      const value = event.target.value;
      this.setState({ [key]: value});
    }

    login = () => {
      this.setState({ error: null, isLoading: true }, () => {
          loginFn(this.state.email, this.state.password)
              .then(jwtToken => {
                  this.setState({ isLoading: false }, () => {
                      setToken(jwtToken);
                      const locationState = this.props.location.state;
                      const redirectTo = (locationState && locationState.from) || '/';
                      this.props.history.replace(redirectTo);
                  });
              })
              .catch(error => this.setState({ error, isLoading: false }));
      });
  }

  render() {
      return (
              <Form
                  className="login-form" size="large"
                  error={!!this.state.error}
                  loading={this.state.isLoading}
              >
                  <Header size="large" textAlign="center">
                      Learning Management System
                  </Header>
                  <Segment stacked>
                      <Form.Field>
                          <Input
                              icon='user'
                              iconPosition='left'
                              name="email"
                              onChange={this.handleChange}
                              placeholder='E-mail address'
                              value={this.state.email}
                          />
                      </Form.Field>
                      <Form.Field>
                          <Input
                              icon='lock'
                              iconPosition='left'
                              name="password"
                              onChange={this.handleChange}
                              placeholder='Password'
                              type="password"
                              value={this.state.password}
                          />
                      </Form.Field>
                     {!!this.state.error && (
                          <Message
                              error
                              header="Login failed"
                              content="Please check your email and password"
                          />
                     )}
                      <Button
                          size="large"
                          fluid
                          primary
                          onClick={this.login}
                      >
                          Login
                      </Button>
                  </Segment>
              </Form> 
      );
  }
};

export default Login;
   
*/


function SigninScreen(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userSignin = useSelector(state => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const dispatch = useDispatch();
  const redirect = props.location.search ? props.location.search.split("=")[1] : '/';
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
    return () => {
      //
    };
  }, [userInfo]);

  

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));

  }
  return <div className="form">
    <form onSubmit={submitHandler} >
      <ul className="form-container">
        <li>
          <h2>Sign-In</h2>
        </li>
        <li>
          {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}
        </li>
        <li>
          <label htmlFor="email">
            Email
          </label>
          <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
          </input>
        </li>
        <li>
          <button type="submit" className="button primary">Signin</button>
        </li>
        <li>
          New to amazona?
        </li>
        <li>
          <Link to={redirect === "/" ? "register" : "register?redirect=" + redirect} className="button secondary text-center" >Create your amazona account</Link>
        </li>
      </ul>
    </form>
  </div>
}
export default SigninScreen;
