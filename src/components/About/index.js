import './index.scss'
import Sidebar from '../Sidebar'
import Loader from 'react-loaders'
import layeredwaves from '../../assets/images/layeredwaves.svg'

const About = () => {
  return (
    <div>
      <Sidebar />
      <div className="container about-page">
        <div class="wave-container2">
          <img
            className="waveUpsidedown"
            src={layeredwaves}
            alt="waves in about page"
          />
        </div>
        <div className="text-zone">
          <h1>About me</h1>
          <p>
            I'm Adhyaksh Guhan, a coder with a heart full of backend passion.
            I'm on a journey to make the digital world run smoother, one line at
            a time. I've dipped my toes in everything from Discord bots to
            ethical hacking. Whether it's Node.js, Go, or Ruby, I'm all about
            solving puzzles and making cool things happen. But I also like
            making a richer experience utilising the full stack with a focus on
            accessibility and modern design. 
            <br />
            Outside of work, you can find me
            worldbuilding with my friends in D&D and other tabletop RPGs, and
            messing about part-time with VA roles in small projects. I also
            believe Rust and Wasm might be the future of the web and care about
            community learning so I dedicate my open-source time/learning to
            those kinds of projects.
          </p>
        </div>
      </div>
      <Loader type="line-scale-pulse-out" />
    </div>
  )
}

export default About
