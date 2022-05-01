import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './About.scss'
import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
      const query = '*[_type == "abouts"]';
      const msgs = '*[_type == "contact"]';

      const fetchData = async () => {
          const res = await client.fetch(query)
          await client.fetch(msgs)
          setAbouts(res)
      }
      fetchData()
  }, [])

  return (
    <div>
      <h2 className="head-text">
        I Know that
        <span> Good Design </span>
        <br />
        means <span> GOOD Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((item, index) => (
          <motion.div
            whileInView={{opacity: [0,1]}}
            whileHover={{scale: 1.1}}
            transition={{ duration: .5, type: 'tween'}}
            className='app__profile-item'
            key={index}
          >
            <img src={urlFor(item.imageurl)} alt={item.title} />
            <h2 className="bold-text" style={{ marginTop: 20}}>{item.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default AppWrap(
    MotionWrap(About, 'app__about'),
    'about',
    'app__whitebg'
)