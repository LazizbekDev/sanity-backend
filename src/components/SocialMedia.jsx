import React, { useState, useEffect } from 'react'
import { client, urlFor } from '../client';

const SocialMedia = () => {
    const [socials, setSocials] = useState([]);

    useEffect(() => {
        const query = '*[_type == "socials"]'

        const fetchData = async () => {
            const res = await client.fetch(query);

            setSocials(res)
        }

        fetchData().then(r => console.log(r));
    }, [])

    // noinspection JSValidateTypes
    return (
        <div className='app__social'>
            {socials.map(social => (
                <a href={social.url} key={social.url} target="_blank" rel="noreferrer">
                    <div>
                        <img src={urlFor(social.icon)} alt={social.name} style={{maxWidth: '90%'}} width="40" />
                    </div>
                </a>
            ))}
        </div>
    )
}

export default SocialMedia