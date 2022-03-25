import './App.scss'
import ReactFullpage from '@fullpage/react-fullpage'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PageHeader from './components/PageHeader/PageHeader'
import HomePage from './pages/HomePage/HomePage'

function App() {
  return (
    <div className="App">
      <ReactFullpage
        /* Fullpage Options */
        licenseKey={'YOUR_KEY_HERE'}
        /* Options here */
        scrollingSpeed={600}
        controlArrows = {true}
        sectionsColor = {["red","orange", "purple", "green"]}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <div className="page-wrapper"> // For each components - Outer parent
                  // Landing Component
                </div>
              </div>
              <div className="section">
                // Shopify Preview Page
              </div>
              <div className="section">
                // Shopify Preview Page 2
              </div>
              <div className="section">
                <div className="slide">
                  // Onboarding Page 1
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
