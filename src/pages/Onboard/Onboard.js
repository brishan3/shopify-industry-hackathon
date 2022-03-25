import "./Onboard.scss";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import iphoneHead from "../../assets/images/iphoneHead.svg";

const ColorButton = styled(Button)(() => ({
  fontSize: "15px",
  lineHeight: "20px",
  textAlign: "center",
  backgroundColor: "#008060",
  fontFamily: "SF Pro",
  fontWeight: 400,
  color: "#FFFFFF",
  padding: "0.5rem 0rem",
  width: "65px",
}));

export default function Onboard(props) {
  const { text, description, image, handler, stepper } = props;

  return (
    <>
      <div className="onboard">
        <div className="onboard__image">
          <img src={iphoneHead} alt="iphone-head" />
          <img className="onboard__svg" src={image} alt="onboard-img" />
        </div>
        <div className="onboard__footer">
          <h1 className="onboard__footer-head"> {text} </h1>
          <p className="onboard__footer-description">{description}</p>
          <div className="onboard__footer-btn">
            <img src={stepper} alt="stepper" />
            <ColorButton onClick={handler} className="onboard__btn">
              {" "}
              Next{" "}
            </ColorButton>
          </div>
        </div>
      </div>
    </>
  );
}
