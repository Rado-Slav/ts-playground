import React, {ReactElement, ReactNode, useState} from 'react';
import '../App.css';

export interface SignUpFormProps {
    onSubmit?: (values: {
        username: string;
        nickname: string;
        password: string;
    }) => void;
}

const SignUpForm = ({ onSubmit }: SignUpFormProps) => {
    const [values, setValues] = useState({
        username: "",
        nickname: "",
        password: "",
    });

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValues((prevValues) => ({
            ...prevValues,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit: React.FormEventHandler = (e) => {
        e.preventDefault();
        onSubmit?.(values);
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column" }}
        >
            <input
                type="text"
                name="username"
                value={values.username}
                onChange={handleChange}
            />
            <input
                type="text"
                name="nickname"
                value={values.nickname}
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default SignUpForm;