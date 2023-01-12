import "../styles/globals.css";
import { Header } from "../components/navigation/Header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
