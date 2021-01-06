import { Layout } from 'antd';
import { Row, Col } from 'antd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginForm from './components/Login';
import Feeds from './components/Feeds';
import './css/style.css';

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
              <Route path='/'>
                <LoginForm />
              </Route>
            </Col>
            <Col span={8}>&nbsp;</Col>
          </Row>
        </Content>
      </Switch>
      <Footer>
        <div className='txt-center'>
          <Row>
            <Col span={24}>
              <Feeds />
            </Col>
          </Row>
        </div>
      </Footer>
    </Router>
  );
}

export default App;
