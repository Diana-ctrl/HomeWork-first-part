import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string;
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void;
    addUser: () => void;
    error: string;
    totalUsers: number;
};

const Greeting: React.FC<GreetingPropsType> = (
    { name, setNameCallback, addUser, error, totalUsers }
) => {
    const inputClass = error ? s.error : "";
    return (
        <div className={s.wrapper}>
            <input value={name} onChange={setNameCallback} className={inputClass} />
            {error && <span className={s.errorMessage}>{error}</span>}
            <button onClick={addUser} className={s.button}>
                Say hello
            </button>
            <span>{totalUsers}</span>
        </div>
    );
};
export default Greeting;