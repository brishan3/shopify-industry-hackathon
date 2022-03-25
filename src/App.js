import "./App.scss";
import LandingPage from "./pages/LandingPage/LandingPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Main} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;


