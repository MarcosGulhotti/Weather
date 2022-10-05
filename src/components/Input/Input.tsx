import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { StyledInputContainer } from "./styles";

interface InputPros {
  value: string;
  setValue: (val: string) => void;
  placeholder: string;
  searchFunc: () => void;
}

export const Input = ({ value, setValue, placeholder, searchFunc }: InputPros) => {
  const handleOnChange = (str: string) => {
    setValue(str);
  };

  return (
    <StyledInputContainer>
      <FontAwesomeIcon icon={faSearch} />
      <input placeholder={placeholder} onChange={(e) => handleOnChange(e.target.value)} type="text" value={value} />
      <button onClick={searchFunc}>Search</button>
    </StyledInputContainer>
  );
};
