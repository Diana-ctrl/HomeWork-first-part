import React from 'react'
import Message from './Message'
const messageData = {
    avatar: 'https://admin-salon.nethouse.ru/static/img/0000/0007/0436/70436824.9dfdgyefpu.W665.jpg',
    name: 'Administrator',
    message: 'Hello, how can I help you?',
    time: '22:00',
}


function HW1() {
    return (
        <div style={{ backgroundColor: '#DDA0DD' }}>
            <hr />
            <h3 style={{ color: "#4B0082" }}>homeworks 1</h3>

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            <hr />
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr />
        </div>
    )
}

export default HW1
