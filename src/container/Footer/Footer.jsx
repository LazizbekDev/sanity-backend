import React, {useState} from 'react'
import './Footer.scss'
import {AppWrap, MotionWrap} from "../../wrapper";
import {images} from "../../constants";
import {client} from "../../client";
import {MdEmail} from "react-icons/md";

const Footer = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmited, setIsSubmited] = useState(false)
    const [loading, setLoading] = useState(false)
    const {name,email,message} = formData;

    const handleChangeInput = (e) => {

        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const submitHandler = () => {
        setLoading(true)

        const contact = {
            _type: 'contact',
            name: name,
            email: email,
            message: message
        }

        client.create(contact)
            .then(() => {
                setIsSubmited(true)
                setLoading(false)
            })
    }

  return (
    <div className={'app__footer'}>
      <h2 className={'head-text'}>Chat with me</h2>

      <div className={'app__footer-cards'}>
        <div className={'app__footer-card'}>
          <MdEmail />
          <a href={'mailto:dev.iProger@gmail.com'} className={'p-text'}>
            dev.iProger@gmail.com
          </a>
        </div>
        <div className={'app__footer-card'}>
          <img src={images.mobile} alt={'number'} />
          <a href={'tel:+998 99 037 3914'} className={'p-text'}>
            +998 99 037 39 14
          </a>
        </div>
      </div>
        {isSubmited ? (
            <div>
                <h3 className="head-text">
                    Thanks a bunch 😊
                </h3>
            </div>
        ) : (
            <div className="app__footer-form app__flex">
                <div className="app__flex">
                    <input
                        className="p-text"
                        type="text"
                        placeholder="Your Name"
                        onChange={handleChangeInput}
                        value={name}
                        name="name" />
                </div>
                <div className="app__flex">
                    <input
                        className="p-text"
                        type="email"
                        placeholder="Your Email"
                        name="email"
                        onChange={handleChangeInput}
                        value={email}

                    />
                </div>
                <div>
            <textarea
                className="p-text"
                placeholder="Your Message"
                name="message"
                value={message}
                onChange={handleChangeInput}
            />
                </div>
                <button
                    type="button"
                    className="p-text"
                    onClick={submitHandler}
                >
                    {loading ? 'Sending...' : 'Send Message'}
                </button>
            </div>
        )}
    </div>
  )
}

export default AppWrap(
    MotionWrap(Footer, 'app__contact'),
    'contact',
    'app__whitebg'
)