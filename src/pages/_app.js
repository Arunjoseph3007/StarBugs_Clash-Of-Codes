import "@/styles/globals.css";
import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { ChakraProvider } from "@chakra-ui/react";
import AuthProvider from "@/context/userContext";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>

    
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
    </AuthProvider>
  );
}
