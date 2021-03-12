import '../assets/App.css';
import { Switch, Route } from 'react-router-dom';
import CharacterDisplay from '../containers/CharacterDisplay';
import CharacterDetails from '../containers/CharacterDetails';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/character/:id" component={CharacterDetails} />
        <Route exact path="/" component={CharacterDisplay} />
      </Switch>
    </div>
  );
}

export default App;
