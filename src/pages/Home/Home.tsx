import { useState } from "react";
import { Input } from "../../components/Input/Input";
import { StyledWeatherContainer } from "./styles";

const HomePage = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSearchWeather = () => {
    if (!inputValue.length) {
      return;
    }

    console.log(inputValue)
  };

  return (
    <div>
      <StyledWeatherContainer>
        <Input value={inputValue} setValue={setInputValue} placeholder={"Find your location..."} searchFunc={handleSearchWeather} />
        <div>{/* Weather content */}</div>
      </StyledWeatherContainer>
    </div>
  );
};

export default HomePage;
