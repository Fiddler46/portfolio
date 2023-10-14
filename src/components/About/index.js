import "./index.scss"
import Sidebar from "../Sidebar"
import Loader from "react-loaders"

const About = () => {
  return (
  <div>
    <Sidebar />
   <div className="container about-page">
      <div className="text-zone">
        <h1>About me</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          tristique accumsan pharetra. Aliquam dui risus, volutpat vel gravida
          imperdiet, auctor nec justo. Donec commodo neque neque, a blandit
          neque pellentesque id. Integer faucibus, turpis nec suscipit finibus,
          ligula metus accumsan ex, ac faucibus odio lectus at nisi. Sed commodo
          arcu sit amet commodo imperdiet. Phasellus vitae nibh ipsum.
        </p>
      </div>
    </div>
    <Loader type="line-scale-pulse-out" />
  </div> 
  )
}

export default About
