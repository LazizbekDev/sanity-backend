import React from 'react'
import { images } from '../../constants/index';
import { motion } from 'framer-motion';
import './Header.scss'

const Header = () => {
  const variants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: [1],
        ease: 'easeInOut'
      }
    }
  }
  return (
    <div className='app__header app__flex' id="home">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__header-info'
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>🙌</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, i'm</p>
              <h1 className="heat-text">Laziz</h1>
            </div>
          </div>

          <div className="tag-cmp app-flex">
            <p className="p-text">I'm web developer</p>
            <p className="p-text">Front-end, back-end sometimes mobile apps and learning something 😁</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__header-img'
        style={{ userSelect: 'none' }}
      >
        <img src={images.profile} alt="Laziz" />

        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeIn' }}
          src={images.circle}
          alt="Laziz"
          className='overlay_circle' />
      </motion.div>

      <motion.div
        variant={variants}
        whileInView={variants.whileInView}
        className='app__header-circles'
      >
        {[images.react, images.redux, images.sass].map(item => (
          <div className="circle__cmp app__flex" key={item}>
            <img src={item} alt={`LazizbekDev ${item}`} />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Header