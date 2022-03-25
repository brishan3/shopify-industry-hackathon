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
        sectionsColor = {["white","#ff9d72", "#018765", "#f6c058"]}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                < LandingPage
                  welcomeHeader={"Welcome, Mike"}
                  welcomeMsg={"Looks like you're new here!"}
                  buttonText={"Let's get started"}
                  onClickHandler={() => {fullpageApi.moveSectionDown()}}
                />
              </div>
              <div className="section">
                < PreviewPage
                  description={"Welcome! This would be a description of what your NFT has to offer. Users can like, comment and share at will."}
                  gifNum={"1"}
                />
              </div>
              <div className="section">
              < PreviewPage
                  description={"We have a limitless scroll to help keep our community engaged. Add some relevant hashtags below. Let's get trendy!"}
                  gifNum={"2"}
                />
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
              <div className="section">
                < LandingPage
                    welcomeHeader={"Thanks for touring!"}
                    welcomeMsg={"Let's start creating"}
                    buttonText={"Start creating"}
                    onClickHandler={() => {fullpageApi.moveTo(2)}}
                  />
              </div>
            </ReactFullpage.Wrapper>
          )
        }}
      />
    </div>
  )
}

export default App
