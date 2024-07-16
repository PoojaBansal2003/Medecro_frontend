import React, { useEffect } from 'react';
import './ParallaxComponent.css';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp, faUserDoctor, faStethoscope, faUsers } from '@fortawesome/free-solid-svg-icons';
import video from '../assets/video.mp4';
import FooterComponent from './FooterComponent';

const ParallaxComponent = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset;

            const leftCell = document.querySelector('.left-cell');

            if (leftCell) {
                if (scrollPosition > 0) {
                    leftCell.classList.add('bg-img-scroll');
                }
                else {
                    leftCell.classList.remove('bg-img-scroll');
                }
            }

            const parallaxElement = document.querySelector('.parallax-background');
            if (parallaxElement) {
                const zoomFactor = 1 + scrollPosition * 0.0001; // Adjust the zoom factor to your liking
                parallaxElement.style.transform = `scale(${zoomFactor})`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const bottomBoxes = document.querySelectorAll('.bottom-box');
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };

       

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('slide-in');
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        bottomBoxes.forEach(box => {
            observer.observe(box);
        });

        return () => {
            bottomBoxes.forEach(box => {
                observer.unobserve(box);
            });
        };
    }, []);

    return (
        <div className="parallax-container">
            <Navbar />
            <div className="parallax-background">
                <p className='heading'>Building New Age</p>
                <p className="sub-heading">Healthcare With AI</p>
                <p className="sub-text">
                    Assisting medical professionals<br />
                    <span className="inline">in</span> achieving enhanced clinical<br />
                    <span className="inline2">outcomes</span>
                </p>
                {/* <button className="learn-more-btn">Learn More</button> */}
            </div>

            <div className="table-container">
                <table className="info-table">
                    <colgroup>
                        <col style={{ width: '40%', height: '80%' }} />
                        <col style={{ width: '60%', height: '80%' }} />
                    </colgroup>
                    <thead>
                        <tr>
                            <th className='bg-img'>
                                <p className='head'>Revolutionizing </p>
                                <p className='sub'>Healthcare</p>
                                <p className='para'>Our AI-based algorithms swiftly and <br />   <span className="inline3">accurately</span> analyze patient clinical <br />   <span className="inline4">data</span> assisting medical professionals<br />   <span className="inline3">in</span> diagnosing health issues more<br /> <div style={{ marginLeft: '-214px', fontSize: '17px' }}>efficiently.</div></p>
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='left-cell'>
                                {/* <p>This is a paragraph on the image.</p> */}
                            </td>
                            <td>
                                <div className="box box1">
                                    <FontAwesomeIcon icon={faCloudArrowUp} size="2x" color="rgb(233, 116, 87)" style={{ marginLeft: "-165px", marginTop: '30px', marginBottom: '-35px' }} />
                                    <p className='box1Heading'>Timely Recognition</p>
                                    <p className='box1SubHeading'>of Diseases</p>
                                    <p className='box1Para'>By utilizing India-specific<br />training data, our AI<br />algorithms facilitate early<br />detection of health issues,<br />enabling prompt treatment<br />and prevention of<br />complications.</p>
                                </div>
                                <div className="box box2">
                                    <FontAwesomeIcon icon={faUserDoctor} size="2x" color="rgb(233, 116, 87)" style={{ marginLeft: "-165px", marginTop: '30px', marginBottom: '-35px' }} />
                                    <p className='box1Heading'>Accelerate Healthcare</p>
                                    <p className='box1SubHeading'>Research with AI</p>
                                    <p className='box1Para'>Leverage AI to expedite<br />healthcare research and<br />development. Our cutting-<br />edge technology <br />enabling prompt treatment<br />accelerates scientific<br />discoveries and innovation.</p>
                                </div>
                                <div className="box box3">
                                    <FontAwesomeIcon icon={faStethoscope} size="2x" color="rgb(233, 116, 87)" style={{ marginLeft: "-165px", marginTop: '30px', marginBottom: '-35px' }} />
                                    <p className='box1Heading'>Flexible AI Application</p>
                                    <p className='box1SubHeading'>for Healthcare</p>
                                    <p className='box1Para'>Our AI application meets<br />the unique needs of<br />healthcare organizations.<br />Our solutions are versatile <br />and adaptable, ensuring<br />seamless integration.<br /></p>
                                </div>
                                <div className="box box4">
                                    <FontAwesomeIcon icon={faUsers} size="2x" color="rgb(233, 116, 87)" style={{ marginLeft: "-165px", marginTop: '30px', marginBottom: '-35px' }} />
                                    <p className='box1Heading'>Enhanced Patient</p>
                                    <p className='box1SubHeading'>Experience with AI</p>
                                    <p className='box1Para'>Elevate the patient<br />experience through AI<br />driven solutions. From<br />personalized care <br />recommendations to<br />optimized workflows, we<br />prioritize the holistic well-<br />being of patients.</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>

           
            <div className="bottom-boxes-container-2" style={{paddingBottom: '150px'}}>
           
                <div  style={{
    color: 'white', 
    border: '1px solid lightgray', 
    height: '590px', 
    width: '782px', 
    marginTop: '0px', 
    marginLeft: '75px',
    overflow: 'hidden' // Ensure the video doesn't overflow the div
}}>
    <video 
        src={video} // Replace with the actual path to your video
        autoPlay 
        loop 
        muted 
        style={{
            width: '100%', 
            height: '100%', 
            objectFit: 'cover' // Cover the entire div
        }}
    />
    <p style={{
        position: 'absolute', 
        fontSize: '34px',
        fontFamily: 'inherit',
        top: '2360px', 
        left: '30%', 
        transform: 'translate(-50%, -50%)', 
        color: 'white', 
        zIndex: 1
    }}>Explore the potential of AI in <br/> Healthcare</p>
</div>
<div  style={{
    color: 'white', 
    border: '1px solid lightgray', 
    height: '589px', 
    width: '539px', 
    marginTop: '-591px', 
    marginLeft: '840px',
    
}}>
    <p style={{
        position: 'absolute', 
        fontSize: '20px',
        fontFamily: 'inherit',
        top: '2330px', 
        left: '64%', 
        color: 'white', 
        zIndex: 1
    }}>
Discover how AI can revolutionize <br/> healthcare delivery and management.<br/> Take the first step towards a smarter,<br/> more efficient healthcare ecosystem.</p>
<button style={{ 
    marginTop: '347px',
    marginLeft: '44px',
    padding: '20px 25px 20px 25px',
    backgroundColor: '#FF5733',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    
    }}>Get Started</button>
</div>
            </div>
            <FooterComponent />
        </div>
    );
};

export default ParallaxComponent;
