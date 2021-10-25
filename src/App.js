import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import MyPokemonListPage from './pages/MyPokemonListPage';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/pokemon/:name" component={DetailPage} />
          <Route path="/mypokemon" component={MyPokemonListPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
