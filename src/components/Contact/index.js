import { FidgetSpinner } from "react-loader-spinner"
import './index.scss';
import AnimatedLetters from "../AnimatedLetters"
import { useEffect, useRef, useState } from "react"
import { contactcontentlist } from "../../assets/contents/content";
import Content from "../Content"
import emailjs from '@emailjs/browser'
import { Alert, AlertTitle } from "@mui/material";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const refForm = useRef();
  const position = [39.05097, -77.10164];
  const submitHandler = (e) => {
    e.preventDefault();
    emailjs.
      sendForm('service_en49zws', 'template_0kl4znx', refForm.current, '8JjXykH5PDiUf3ocd')
      .then(
        () => {
          setSuccess(true)
          setTimeout(() => {
            window.location.reload(false)
          }, 4000)
        }
      ).catch(() => {
        setError(true)
        setTimeout(() => {
          window.location.reload(false)
        }, 5000)
      })
    // setSuccess(false);
    // setError(false);
  }
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  const strList = ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters strArray={strList} idx={15} letterClass={letterClass} />
          </h1>
          <Content contentArray={contactcontentlist} />
          <div className="contact-form">
            <form ref={refForm} onSubmit={submitHandler}>
              <li className="half">
                <input type="text" name="name" placeholder="Name" required />
              </li>
              <li className="half">
                <input type="email" name="email" placeholder="Email" required />
              </li>
              <li>
                <input type="tel" name="number" placeholder="888 888 8888" pattern="[0-9]{3} [0-9]{3} [0-9]{4}" maxlength="12" title="Ten digits code" required />
              </li>
              <li>
                <input type="text" name="subject" placeholder="Subject" required />
              </li>
              <li>
                <textarea name="message" placeholder="Message" required />
              </li>
              <li>
                <input type="submit" className="flat-button" value="Submit" />
              </li>
            </form>
            {success ? <>
              <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                Your message was sent I will be in contact with you shortly!
              </Alert>
            </> :
              <></>}
            {error ? <>
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                Something went wrong sorry! If you want to reach out, here is my number 2028536681
              </Alert>
            </> :
              <></>}
          </div>
          <div className="info-location">
            Betab Belihu,
            <br />
            North Bethseda, MD, 20852
            <br />
            <span>betab.belihu2@gmail.com</span>
          </div>
          <div className="map-container">
            <MapContainer center={position} zoom={13}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={position}>
                <Popup>Betab's location</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
      <FidgetSpinner wrapperClass="fidget" backgroundColor="yellow" />
    </>
  )
}
export default Contact