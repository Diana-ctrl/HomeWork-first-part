import classes from './Message.module.css';
import React from 'react'

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

const Message: React.FC<MessageType> = ({
    avatar,
    name,
    message,
    time,
}) => {
    return (
        <div className={classes.main}>
            <div><img className={classes.img} src={avatar} alt='Not found' /></div>

            <div className={`${classes.main2} ${classes.d33}`}>

                <div className={classes.name}>{name}</div>

                <div className={classes.message}>{message}</div>

                <div className={classes.time}>{time}</div>

            </div>

        </div>
    )
}

export default Message;
