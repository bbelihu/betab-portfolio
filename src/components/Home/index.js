import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
import Profile from '../../assets/images/myprofile2.png'
import AnimatedLetters from '../AnimatedLetters';
import { FidgetSpinner } from 'react-loader-spinner';
const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = [' ', 'B', 'e', 't', 'a', 'b'];
  const jobTitle = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  return (
    <>
      <div className="container home-page">
        <img className='img-zone' src={Profile} alt='Betab' />
        <div className="text-zone">
          <h1>
            <span className={`${letterClass}`}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={jobTitle} idx={21} />
          </h1>
          <h2>Software Developer that has done projects using javascript with angular and React, .net, C#, java</h2>
          <Link to="/contact" className='flat-button'>CONTACT ME</Link>
        </div>
      </div>
      <FidgetSpinner backgroundColor="yellow" wrapperClass="fidget" />
    </>
  );
}

export default Home