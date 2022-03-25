import "./App.scss";
import ReactFullpage from "@fullpage/react-fullpage";
// import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import PageHeader from './components/PageHeader/PageHeader'
import LandingPage from "./pages/LandingPage/LandingPage";
import PreviewPage from "./pages/PreviewPage/PreviewPage";
import OnboardingPage from "./pages/OnboardingPage/OnboardingPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PageHeader from "./components/PageHeader/PageHeader";
import Onboard from "./components/Onboard/Onboard";
import onboardOne from "./assets/images/onboardOne.svg";
import onboardTwo from "./assets/images/onboardTwo.svg";
import onboardThree from "./assets/images/onboardThree.svg";
import onboardFour from "./assets/images/onboardFour.svg";
import stepperOne from "./assets/images/stepperOne.svg";
import stepperTwo from "./assets/images/stepperTwo.svg";
import stepperThree from "./assets/images/stepperThree.svg";
import stepperFour from "./assets/images/stepperFour.svg";
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
