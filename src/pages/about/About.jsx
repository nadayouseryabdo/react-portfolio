import './about.css'
import aboutImg from '../../assets/images/about.svg'
import { Link } from 'react-router-dom';
function About() {

    return (
     <>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
     <div className="about_container ">
     <div>
     <h1>My Skills</h1>
     <p className='fw-light'>Here are some programming langauges, frameworks, libraries, concepts and databases that I can work with: </p>
     <div className="skillSpans">
     <span className='border border-success p-2 m-2 rounded'>HTML5</span>
     <span className='border border-success p-2 m-2 rounded'>CSS3</span>
     <span className='border border-success p-2 m-2 rounded'>JavaScript</span>
     <span className='border border-success p-2 m-2 rounded'>React Js</span>
     <span className='border border-success p-2 m-2 rounded'>Angular</span>
     <span className='border border-success p-2 m-2 rounded'>Flutter</span>
     <span className='border border-success p-2 m-2 rounded'>Bootstrap</span>
     <span className='border border-success p-2 m-2 rounded'>SASS</span>
     <span className='border border-success p-2 m-2 rounded'>EcmaScript6</span>
     <span className='border border-success p-2 m-2 rounded'>C++</span>
     <span className='border border-success p-2 m-2 rounded'>React Native</span>
     <span className='border border-success p-2 m-2 rounded'>JQuery</span>
     <span className='border border-success p-2 m-2 rounded'>DataBase</span>
     <span className='border border-success p-2 m-2 rounded'>GitHub</span>
     <span className='border border-success p-2 m-2 rounded'>Node Js</span>
     <span className='border border-success p-2 m-2 rounded'>Wepback</span>
     <span className='border border-success p-2 m-2 rounded'>Unit Testing</span>

     </div>

     <a className='text-success fs-3 m-2' href='https://web.facebook.com/nda.youseri' target={'_blank'}><i class="fa-brands fa-facebook"></i></a>
     <a className='text-success fs-3 m-2' href="https://github.com/nadayouseryabdo" target={'_blank'}><i class="fa-brands fa-github"></i></a>
     <a className='text-success fs-3 m-2' href="https://www.linkedin.com/in/nada-yousery-abdo/" target={'_blank'}><i class="fa-brands fa-linkedin"></i></a>
     </div >
     <img src={aboutImg} alt="about"  />
     </div>
     </>
    );
  }
  export default About;