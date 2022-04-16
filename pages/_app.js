import Layout from "../components/Layout";
import "../styles/globals.css";

// import App from 'next/app'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
