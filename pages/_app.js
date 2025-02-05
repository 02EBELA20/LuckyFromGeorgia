import Layout from "../components/Layout";
import "../styles/globals.css"; // შენს პროექტში თუ გაქვს გლობალური სტილები

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
