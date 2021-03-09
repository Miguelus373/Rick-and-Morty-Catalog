import '../assets/App.css';
import { Switch, Route } from 'react-router-dom';
import CharacterDisplay from '../containers/CharacterDisplay';

function App() {
  return (
    <Switch>
      <div className="App">
        {/* <Route path="/character/" component={CharacterDetails} /> */}
        <Route path="/" component={CharacterDisplay} />
      </div>
    </Switch>
  );
}

export default App;
