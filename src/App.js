import './App.css';
import  {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import UseState1 from "./components/useState/usestate1"

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/usestate1">UseState</Link></li>
        </ul>
      </nav>
      
      <Switch>
        <Route path="/usestate1" component={UseState1}/>
      </Switch>
    </Router>
  );
}

export default App;
