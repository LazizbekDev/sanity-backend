// noinspection ES6CheckImport

import React, {useEffect, useState} from 'react';
import {client} from "../client";
import './Message.scss'
import { Navigate } from "react-router-dom";
import {BiArrowBack} from "react-icons/bi";

const Messages = () => {
    const [dataMessage, setDataMessage] = useState([]);
    const [back, setBack] = useState(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const query = '*[_type == "contact"]';

        const res = await client.fetch(query)

        setDataMessage(res)
    }, [])
    return (
        <div className={'app__testimonial'}>
            <button
                onClick={() => setBack(true)}
                style={
                {
                    position: "fixed",
                    top: 0,
                    width: '100%',
                    padding: '6px 12px',
                    textTransform: 'uppercase',
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    color: '#fff',
                    border: 'none',
                    backdropFilter: 'blur(8px)',
                    boxShadow: '0 0 1rem rgba(0,0,0,0.6)'
                }
            }><BiArrowBack /> Orqaga</button>
            {back && <Navigate to={'/'} replace={true} /> }
            {dataMessage.map((msg, index) => (
                <div
                    className={'app__testimonial-item app__flex'}
                    style={{margin: '4rem auto', width: '80%'}}
                    key={index}
                >
                    <div className={'app__testimonial-content'}>
                        <p className={'p-text'}>{msg.name}</p>
                        <div>
                            <h4 className={'bold-text'} style={{fontFamily: 'sans-serif'}}>{msg.email}</h4>
                            <p className={'p-text'} style={{fontWeight: 200, fontSize: 13, color: '#7a7070'}}>{msg.message}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Messages;