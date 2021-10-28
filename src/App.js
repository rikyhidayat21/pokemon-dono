import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import MyPokemonListPage from './pages/MyPokemonListPage';
import Header from './components/Header';


function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/pokemon/:name" component={DetailPage} />
          <Route path="/mypokemons" component={MyPokemonListPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
