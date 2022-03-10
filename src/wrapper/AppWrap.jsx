import React from 'react'
import { SocialMedia, NavigationDots} from '../components/'

const AppWrap = (Component, idName, classes) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classes}`}>

        <SocialMedia />
        
        <div className='app__wrapper app__flex'>
            <Component />
        </div>

        <NavigationDots active={idName} />
    </div>
  )
}

export default AppWrap