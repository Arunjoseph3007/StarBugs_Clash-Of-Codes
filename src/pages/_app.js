import "@/styles/globals.css";
import 'mapbox-gl/dist/mapbox-gl.css';
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}