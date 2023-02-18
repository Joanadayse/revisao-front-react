import { ChakraProvider } from "@chakra-ui/react";
import Main from "./Components/Main/Main";
import GlobalStyle from "./global/GlobalStyle";
import Router from "./router/Router";

function App() {
  return (
    <>
      <ChakraProvider>
        <GlobalStyle />
       <Router/>
      </ChakraProvider>
    </>
  );
}

export default App;
