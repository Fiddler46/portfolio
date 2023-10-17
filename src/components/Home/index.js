import { Link } from 'react-router-dom'
import wavealice from '../../assets/images/wavealice.svg'
import layeredwaves from '../../assets/images/layeredwaves.svg'
import Sidebar from '../Sidebar'
import './index.scss'
import Loader from 'react-loaders'

const Home = () => {
  return (
    <>
      <Sidebar />
      <div className="home-page">
        <div className="text-zone">
          <h1>
            Hi, <br />
            I'm Adhyaksh
            <img src={wavealice} alt="wave" className="wave-svg" />
          </h1>
          <br />
          <h2>Full-Stack Developer | Backend and Frontend Architect</h2>
          <Link to="/contact" className="flat-button">
            CONTACT
          </Link>
        </div>
        <div class="wave-container">
          <img className="wave" src={layeredwaves} alt="waves in home page" />
        </div>
      </div>
      <Loader type="line-scale-pulse-out" />
    </>
  )
}

export default Home
