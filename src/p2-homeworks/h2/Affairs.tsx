import React from 'react';
import Affair from './Affair';
import { AffairType } from './HW2';
import s from './Affairs.module.css';


type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: any
    deleteAffairCallback: any
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => { props.setFilter('all') } // need to fix
    const setHigh = () => { props.setFilter('high') }
    const setMiddle = () => { props.setFilter('middle') }
    const setLow = () => { props.setFilter('low') }

    return (
        <div>

            {mappedAffairs}

            <button onClick={setAll} className={s.button}>All</button>
            <button onClick={setHigh} className={s.button}>High</button>
            <button onClick={setMiddle} className={s.button}>Middle</button>
            <button onClick={setLow} className={s.button}>Low</button>
        </div>
    )
}

export default Affairs;
