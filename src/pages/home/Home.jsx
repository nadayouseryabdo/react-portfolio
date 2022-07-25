import './home.css'
import pic from '../../assets/images/mypic.jpeg'
import { Link } from 'react-router-dom';
function Home() {

    return (
        <>
            <div className="homeComponent justify-content-between">
                <div className='col-7 py-3'>
                    <p>My Name is:</p>
                    <p className='text-success fw-bold fs-2'>Nada Yosri Abdo</p>
                    <p className='fw-normal'>Front End and cross-platform Developer</p>
                    <p>Junior front end developer having technical background in front-end and cross-platform mobile app development , graduated from Information Technology Institute ( iti ) three months scholarship and this is my portofolio using React.</p>
                    <Link to='/about'><button className='btn btn-outline-success p-2 px-4 mt-4'>About Me</button></Link>
                    <a ><button className='btn btn-outline-success p-2 px-4 mt-4 ms-3'>Resume</button></a>
                </div>
                <img src={pic} className='w-25' alt="" />

            </div>
        </>
    );
}
export default Home;