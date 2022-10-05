import { Header } from "./components/Header/Header";
import Router from "./routes";
import GlobalStyles from "./styles/global";

function App() {
  return (
    <>
      <Header />
      <GlobalStyles />
      <Router />
    </>
  );
}

export default App;
