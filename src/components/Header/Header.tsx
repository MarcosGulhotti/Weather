import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderIcon from "../../assets/icons/HeaderIcon.svg";
import { Button } from "./components/HeaderButton/Button";
import { StyledHeader, StyledImage } from "./styles";

export const Header = () => {
  const navigate = useNavigate();

  const [selectedButton, setSelectedButton] = useState<"Home" | "About">("Home");

  const handleHomeButton = () => {
    setSelectedButton("Home");
    navigate("/");
  };

  const handleAboutButton = () => {
    setSelectedButton("About");
    navigate("/about");
  };

  return (
    <StyledHeader>
      <div className="icon-container">
        <StyledImage onClick={handleHomeButton} src={HeaderIcon} alt="Weather Icon" />
        <div className="texts">
          <p className="title">Weather</p>
          <p className="subtitle">Find the weather.</p>
        </div>
      </div>
      <div className="buttons-container">
        <Button selected={selectedButton === "Home"} onClick={handleHomeButton}>
          Home
        </Button>
        <Button selected={selectedButton === "About"} onClick={handleAboutButton}>
          About
        </Button>
      </div>
    </StyledHeader>
  );
};
