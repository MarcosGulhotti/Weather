import styled from "styled-components";
import city from "../../assets/images/city.jpg";

const StyledWeatherContainer = styled.div`
  background-image: url(${city});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;

  width: 100%;
  height: 500px;

  display: flex;
  justify-content: center;
`;

export { StyledWeatherContainer };
