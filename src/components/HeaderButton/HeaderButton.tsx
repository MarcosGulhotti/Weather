import { StyledButton } from "./styles";

interface ButtonsInt {
  children: React.ReactNode;
  onClick?: () => void;
  selected: boolean;
}

export const HeaderButton = ({ children, onClick, selected }: ButtonsInt) => {
  return (
    <StyledButton selected={selected} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
