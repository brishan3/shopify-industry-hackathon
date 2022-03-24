import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageHeader from './components/PageHeader/PageHeader';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PageHeader/>
        <Switch>
          <Route path="/" exact component={HomePage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;