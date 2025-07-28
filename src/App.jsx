import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './layout/Layout.jsx';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          {/* <Route path="/shop" component={ShopPage} /> */}
          {/* <Route path="/contact" component={ContactPage} />  */}
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
