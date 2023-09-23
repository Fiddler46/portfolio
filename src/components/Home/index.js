import { Link } from "react-router-dom";
import Sidebar from '../Sidebar';
import './index.scss';

const Home = () => {

    return (
        <div className='App'>
            <Sidebar />
            <div className="container home-page">
                <div className="text-zone">
                    <h1>Hi, <br />I'm Adhyaksh <br />
                    <br />
                    </h1>
                    <h2>Full-Stack Developer | Backend and Frontend Architect</h2>
                    <Link to='/contact' className='flat-button'>CONTACT</Link>
                </div>
            </div>
        </div>
    );
}

export default Home