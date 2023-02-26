import { ChakraProvider } from "@chakra-ui/react";
import Main from "./Components/Main/Main";
import GlobalStyle from "./global/GlobalStyle";

function App() {
  return (
    <>
      <ChakraProvider>
        <GlobalStyle />

        <Main />
      </ChakraProvider>
    </>
  );
}

export default App;
