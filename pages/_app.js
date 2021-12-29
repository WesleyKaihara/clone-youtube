import '../styles/globals.css'
import Header from '../components/header'
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>

  )
}

export default MyApp
