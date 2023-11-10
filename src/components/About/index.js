import './index.scss'
import { useState, useEffect } from 'react';
import { aboutcontentlist } from '../../assets/contents/content';
import AnimatedLetters from '../AnimatedLetters'
import Content from '../Content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJava, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { FidgetSpinner } from 'react-loader-spinner';
const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const title = ['A', 'b', 'o', 'u', 't', ' ', 'M', 'e'];
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
      <div className='container about-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={title}
              idx={15}
            />
          </h1>
          <Content contentArray={aboutcontentlist} />
        </div>
        <div className='cube-zone'>
          <div className='cubespinner'>
            <div className='face1'>
              <FontAwesomeIcon icon={faJava} color='#F89820' />
            </div>
            <div className='face2'>
              <FontAwesomeIcon icon={faHtml5} color='#F06529' />
            </div>
            <div className='face3'>
              <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
            </div>
            <div className='face4'>
              <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
            </div>
            <div className='face5'>
              <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
            </div>
            <div className='face6'>
              <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
            </div>

          </div>

        </div>
      </div>
      <FidgetSpinner wrapperClass="fidget" backgroundColor="yellow" />
    </>
  )
}
export default About;