import styled from "styled-components";

interface StyledButtonProps {
  selected: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  cursor: pointer;

  border: 2px solid ${({ selected }) => (selected ? "#269AF2" : "#fff")};
  border-radius: 20px;

  width: 100px;
  height: 40px;

  background-color: transparent;

  font-size: 1.1rem;
  font-family: var(--font-roboto);
  font-weight: bold;

  color: ${({ selected }) => (selected ? "#269AF2" : "#fff")};

  box-shadow: 5px 5px 20px -5px #000;
`;

export { StyledButton };
