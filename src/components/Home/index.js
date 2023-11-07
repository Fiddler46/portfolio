import { Link } from 'react-router-dom'
import waveNameIcon from '../../assets/images/waveNameIcon.svg'
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
            <img src={waveNameIcon} alt="wave icon near name" className="waveIcon" />
          </h1>
          <br />
          <h2>Software Engineer | Backend Designer</h2>
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
