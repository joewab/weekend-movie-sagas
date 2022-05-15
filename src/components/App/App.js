import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';

function App() {
  return (
    <div className="App">
      <h1>These are movies 🤷‍♂️</h1>
      <Router>       
        {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/details">Details</Link>

        </nav>  */}
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        
        <Route path="/details">
          <Details/>
        </Route>
      </Router>
    </div>
  );
}


export default App;
