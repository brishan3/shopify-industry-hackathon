import "./Main.scss";
import ReactFullpage from "@fullpage/react-fullpage";
import LandingPage from "../../pages/LandingPage/LandingPage";
import Onboard from '../../pages/Onboard/Onboard';
import PreviewPage from "../../pages/PreviewPage/PreviewPage";
import onboardThree from "../../assets/images/onboardThree.svg";
import onboardFour from "../../assets/images/onboardFour.svg";
import stepperOne from "../../assets/images/stepperOne.svg";
import stepperTwo from "../../assets/images/stepperTwo.svg";
import stepperThree from "../../assets/images/stepperThree.svg";
import stepperFour from "../../assets/images/stepperFour.svg";
import onBoardOne from "../../assets/images/onBoardOne.png";
import onBoardTwo from "../../assets/images/onBoardTwo.png";

const staticText = [
  "With Shopify, we've made buying and selling NFT's sleek and simple. You'll be able to accept a variety of payment methods in a secure wallet.",
  "We're entering a new phase of tech - a social one ! Animated NFT's unlock a new playing field, one with limitless customization and personalized connections.",
  "Seamlessly upload GIF's, engage your audience, and create a tight community. We offer access to metrics on how to improve your campaign throughout your experience - We're always on your side !",
  "We're excited to welcome you to an exclusive international digital community and marketplace",
];

export default function () {
  return (
    <div className="App">
      <ReactFullpage
        scrollingSpeed={600}
        controlArrows={true}
        render={({ fullpageApi }) => {
          
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <LandingPage
                  welcomeHeader={"Welcome, Mike"}
                  welcomeMsg={"Looks like you're new here!"}
                  buttonText={"Let's get started"}
                  onClickHandler={() => {
                    fullpageApi.moveSectionDown();
                    fullpageApi.setAllowScrolling(false);
                  }}
                />
              </div>
              <div className="section">
                < PreviewPage
                    description={"Welcome! This would be a description of what your NFT has to offer. Users can like, comment and share at will."}
                    gifNum={"1"}
                    onClickHandler={() => {
                      fullpageApi.moveSectionDown()
                    }}
                  />  
              </div>
              <div className="section">
                < PreviewPage
                    description={"We have a limitless scroll to help keep our community engaged. Add some relevant hashtags below. Let's get trendy!"}
                    gifNum={"2"}
                    onClickHandler={() => {
                      fullpageApi.moveSectionDown()
                    }}
                  />
              </div>

              <div className="section">
                <div className="slide">
                  <div className="onboard-w">
                    <Onboard
                      text={"Forge Your Own Brand"}
                      description={staticText[0]}
                      handler={() => fullpageApi.moveSlideRight()}
                      image={onBoardOne}
                      stepper={stepperOne}
                    />
                  </div>
                </div>
                <div className="slide">
                  <div className="onboard-wrapper">
                    <Onboard
                      text={"Forge Your Own Brand"}
                      description={staticText[1]}
                      handler={() => fullpageApi.moveSlideRight()}
                      image={onBoardTwo}
                      stepper={stepperTwo}
                    />
                  </div>
                </div>
                <div className="slide">
                  <div className="onboard-wrapper">
                    <Onboard
                      text={"Market Your Way"}
                      description={staticText[2]}
                      handler={() => fullpageApi.moveSlideRight()}
                      image={onboardThree}
                      stepper={stepperThree}
                    />
                  </div>
                </div>
                <div className="slide">
                  <div className="onboard-wrapper">
                    <Onboard
                      text={"Future Forward"}
                      description={staticText[3]}
                      handler = {() => fullpageApi.moveSectionDown()}
                      image={onboardFour}
                      stepper={stepperFour}
                    />
                  </div>
                </div>

              </div>
                <div className="section">
                  <LandingPage
                    welcomeHeader={"Thanks for touring!"}
                    welcomeMsg={"Let's start creating"}
                    buttonText={"Start creating"}
                    onClickHandler={() => {
                      fullpageApi.moveTo(2);
                    }}
                  />
                </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
}
