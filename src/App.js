import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/pokemon/:name" component={DetailPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
