import './App.scss'
import ReactFullpage from '@fullpage/react-fullpage'
// import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import PageHeader from './components/PageHeader/PageHeader'
import LandingPage from './pages/LandingPage/LandingPage'
import PreviewPage from './pages/PreviewPage/PreviewPage'
import OnboardingPage from './pages/OnboardingPage/OnboardingPage'

function App() {
  return (
    <div className="App">
      <ReactFullpage
        /* Fullpage Options */
        licenseKey={'YOUR_KEY_HERE'}
        /* Options here */
        scrollingSpeed={600}
        controlArrows = {true}
        sectionsColor = {["#95bf47","#ff9d72", "#018765", "#f6c058"]}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                < LandingPage />
              </div>
              <div className="section">
                < PreviewPage />
              </div>
              <div className="section">
                // Shopify Preview Page 2
              </div>
              <div className="section">
                <div className="slide">
                  < OnboardingPage />
                </div>
                <div className="slide">
                  // Onboarding Page 2
                </div>
                <div className="slide">
                  // Onboarding Page 3
                </div>
                <div className="slide">
                  // Onboarding Page 4
                </div>
              </div>
            </ReactFullpage.Wrapper>
          )
        }}
      />
    </div>
  )
}

export default App
