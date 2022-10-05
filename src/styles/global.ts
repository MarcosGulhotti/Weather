import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root{
        --primary: #269AF2;
        --secondary: #323544;
        --background-color: #1E202B;
        --dark-gray: #262936;
        --darker-gray: #222531;
        --text-color: #AEAEAE;
        --white: #FFFFFF;
        --font-roboto: 'Roboto', sans-serif;;
        --font-roboto-mono: 'Roboto Mono', monospace;;
    }
`;

export default GlobalStyles;
