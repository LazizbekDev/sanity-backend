import React from 'react'

const NavigationDots = ({ active }) => {
    return (
        <div className='app__navigation'>
            {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map((item, index) => (
                <a
                    href={`#${item}`}
                    key={index}
                    className='app__navigation-dot'
                    style={active === item ? {background: '#313bac'} : { }}
                />
            ))}
        </div>
    )
}

export default NavigationDots