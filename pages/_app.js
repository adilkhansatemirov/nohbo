import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'styles/index.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component toast={toast} {...pageProps} />
      <ToastContainer position="bottom-center" />
    </>
  );
}

export default MyApp;
