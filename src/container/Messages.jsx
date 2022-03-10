import React, {useEffect, useState} from 'react';
import {client} from "../client";
import './Message.scss'

const Messages = () => {
    const [dataMessage, setDataMessage] = useState([]);

    useEffect(async () => {
        const query = '*[_type == "contact"]';

        const res = await client.fetch(query)

        setDataMessage(res)
    }, [])
    return (
        <div className={'app__testimonial'}>
            {dataMessage.map((msg, index) => (
                <div className={'app__testimonial-item app__flex'} key={index}>
                    <div className={'app__testimonial-content'}>
                        <p className={'p-text'}>{msg.name}</p>
                        <div>
                            <h4 className={'bold-text'}>{msg.email}</h4>
                            <p className={'p-text'}>{msg.message}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Messages;