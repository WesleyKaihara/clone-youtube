import '../styles/globals.css'
import 'antd/dist/antd.css';
import Header from '../components/header'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header/>
      <Component {...pageProps} />
    </div>

  )
}

export default MyApp
