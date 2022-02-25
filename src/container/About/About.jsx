import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { images } from '../../constants'
import './About.scss'
import { urlFor, client } from '../../client';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect( async () => {
    const query = '*[_type == "abouts"]'
    // const wt = () => {
      const res = await client.fetch(query)
      setAbouts(res)
      console.log(res)
    // }
    // return () => wt()
  }, [])
  const dummyData = [
    {title:'Bu Men', desc: "Men o'zim bilgan ko'p narsalarni Allohning izni ila o'zim o'rgandim!", url: images.about01},
    {title:'O\'zbek', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident culpa numquam ad officiis dolorem reiciendis perferendis, unde eum facere, magni, corporis repellendus in neque excepturi nostrum reprehenderit enim totam?", url: images.about02},
    {title:'Hammisi yaxshi bo\'ladi', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quis! Architecto, cum debitis praesentium illum perferendis aperiam eligendi laborum similique?", url: images.about03}
  ]

  return (
    <>
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
    </>
  )
}

export default About