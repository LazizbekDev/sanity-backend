import React from 'react'
import {
    TiSocialLinkedinCircular,
    TiSocialInstagramCircular,
    TiSocialGithubCircular,
    TiSocialFacebookCircular
} from 'react-icons/ti';
import { RiTelegramLine } from 'react-icons/ri'

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <a href='https://www.linkedin.com/in/lazizbek-tojiboyev-24185420b' target="_blank">
                <div>
                    <TiSocialLinkedinCircular />
                </div>
            </a>

            <a href='https://instagram.com/mern.me' target="_blank">
                <div>
                    <TiSocialInstagramCircular />
                </div>
            </a>

            <a href='' target="_blank">
                <div>
                    <TiSocialFacebookCircular />
                </div>
            </a>

            <a href='https://t.me/mernme' target="_blank">
                <div>
                    <RiTelegramLine />
                </div>                
            </a>

            <a href='https://github.com/LazizbekDev' target="_blank">
                <div>
                    <TiSocialGithubCircular />
                </div>
            </a>
        </div>
    )
}

export default SocialMedia