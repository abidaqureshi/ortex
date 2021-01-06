import {Row, Col, Layout, Alert } from 'antd';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginForm from './components/Login';
import Feeds from './components/Feeds';
import './css/style.scss';

function App() {
  const { Header, Footer, Content } = Layout;

  return (
    <Router>
      <Header className='header-ortex'>Login</Header>
      <Switch>
        <Content>
          <Row>
            <Col span={8}>&nbsp;</Col>
            <Col span={8}>
              <Route  path="/login">
                  <Alert message="You are logged in successfully!" type="success" />
              </Route>
              <Route exact path='/'>
                <LoginForm />
              </Route>
            </Col>
            <Col span={8}>&nbsp;</Col>
          </Row>
        </Content>
      </Switch>
      <Footer className="footer-ortex">
        <div style={{display:"flex"}}>
          <div style={{justifyContent:"center"}}>
            <Feeds /> 
            </div>
          </div>      
              
      </Footer>
    </Router>
  );
}

export default App;
