import React, {useEffect, useState} from 'react'
import {AppWrap, MotionWrap} from '../../wrapper';
import { urlFor, client } from '../../client';
import './Testimonials.scss'
import {motion} from "framer-motion";
import {HiChevronLeft, HiChevronRight} from "react-icons/hi";

const Testimonials = () => {
  const [brends, setBrends] = useState([])
  const [feedbacks, setFeedbacks] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  const query = '*[_type == "testimonials"]';
  const brands = '*[_type == "brands"]';

  useEffect(async () => {
    const resFeed = await client.fetch(query);
    const resBrand = await client.fetch(brands);
    setFeedbacks(resFeed);
    setBrends(resBrand)
  }, [])

  const previewHandler = (i) => {
    setCurrentIndex(i)
    console.log(brends)
  }
  const buddy = feedbacks[currentIndex];
  return (
    <div className={'app__testimonial'}>
      {feedbacks.length && (
          <>
            <div className={'app__testimonial-item app__flex'}>
              <img src={urlFor(buddy.imageurl)} alt={feedbacks.name} />
              <div className={'app__testimonial-content'}>
                <p className={'p-text'}>{buddy.feedback}</p>
                <div>
                  <h4 className={'bold-text'}>{buddy.name}</h4>
                  <p className={'p-text'}>{buddy.company}</p>
                </div>
              </div>
            </div>

            <div className={'app__testimonial-btns app__flex'}>
              <div className={'app__flex'} onClick={() => previewHandler(currentIndex === 0 ? feedbacks.length - 1 : currentIndex - 1)}>
                <HiChevronLeft />
              </div>
              <div className={'app__flex'} onClick={() => previewHandler(currentIndex === feedbacks.length - 1 ? 0 : currentIndex + 1)}>
                <HiChevronRight />
              </div>
            </div>
          </>
      )}

      <div className={'app__testimonial-brands app__flex'}>
        {brends.map((brend, index) => (
            <motion.div
                whileInView={{opacity: [0, 1]}}
                transition={{ duration: .5, type: 'tween'}}
                key={index}
            >
              <img src={urlFor(brend.imgUrl)} alt={brend.name} />
            </motion.div>
        ))}
      </div>
    </div>
  )
}

export default AppWrap(
    MotionWrap(Testimonials, 'app__testimonials'),
    'testimonials',
    'app__primarybg'
)
