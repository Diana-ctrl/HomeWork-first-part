import React from 'react';
import { AffairType } from './HW2';
import s from './Affairs.module.css';

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => { props.deleteAffairCallback(props.affair._id) }

    return (
        <div>
            {`${props.affair.name} [${props.affair.priority}]`}
            <button onClick={deleteCallback} style= {{backgroundColor: '#9370db', color: 'white'}} >X</button>
        </div>
    )
}

export default Affair;
