import "./App.css";
import {
  Header,
  MainContent,
  ProductSection,
  Footer,
  FAQ,
} from "./components/components";
import * as React from "react";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div>
      <ChakraProvider>
        <Header />
        <MainContent />
        <ProductSection />
        <FAQ />
        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;
