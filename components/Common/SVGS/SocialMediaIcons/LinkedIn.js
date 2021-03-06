import { useState } from 'react';

function LinkedIn({ dynamicClass }) {
    const [fill, setFill] = useState('C4CEE9');
    const onMouseEnterHandler = () => {
        setFill('18ffc9');
    };
    const onMouseLeaveHandler = () => {
        setFill('C4CEE9');
    };
    return (
        <>
            <svg
                onMouseOver={onMouseEnterHandler}
                onMouseLeave={onMouseLeaveHandler}
                className={dynamicClass}
                width="33"
                height="31"
                viewBox="0 0 33 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M7.3 31H2.85C1.3 31 0 29.75 0 28.25V13.5C0 11.95 1.25 10.75 2.85 10.75H7.3C8.85 10.75 10.15 12 10.15 13.5V28.25C10.2 29.75 8.9 31 7.3 31ZM2.85 13.2C2.7 13.2 2.55 13.25 2.55 13.4V28.15C2.55 28.2 2.6 28.35 2.85 28.35H7.3C7.45 28.35 7.6 28.3 7.6 28.15V13.5C7.6 13.45 7.45 13.3 7.3 13.3H2.85V13.2Z"
                    fill={`#${fill}`}
                />
                <path
                    d="M29.4 31H24.9C23.35 31 22.05 29.75 22.05 28.25V22.15C22.05 21.85 21.85 21.65 21.45 21.65C21.15 21.65 20.85 21.85 20.85 22.15V28.2C20.85 29.75 19.6 30.95 18 30.95H13.55C12 30.95 10.7 29.7 10.7 28.2V13.5C10.7 11.95 11.95 10.75 13.55 10.75H18C18.95 10.75 19.75 11.2 20.25 11.9C20.45 11.85 20.7 11.7 20.85 11.6C22.4 10.85 24.15 10.65 25.75 10.85C29.25 11.3 31.95 14.2 32 17.7V28.35C32.15 29.75 30.9 31 29.4 31ZM21.5 19.2C23.2 19.2 24.55 20.6 24.55 22.2V28.25C24.55 28.3 24.6 28.45 24.85 28.45H29.3C29.45 28.45 29.6 28.4 29.6 28.25V17.65C29.55 15.45 27.8 13.55 25.5 13.35C24.35 13.2 23 13.4 21.85 13.95C21.25 14.15 20.75 14.55 20.25 14.85L18.3 16.25V13.5C18.3 13.45 18.25 13.3 18 13.3H13.55C13.4 13.3 13.25 13.35 13.25 13.5V28.25C13.25 28.3 13.3 28.45 13.55 28.45H18.05C18.2 28.45 18.35 28.4 18.35 28.25V22.15C18.45 20.5 19.75 19.2 21.5 19.2Z"
                    fill={`#${fill}`}
                />
                <path
                    d="M5.39998 10.45C2.49998 10.45 0.0999756 8.1 0.0999756 5.2C0.0999756 2.3 2.39998 0 5.39998 0C8.39998 0 10.7 2.35 10.7 5.25C10.7 8.15 8.29998 10.45 5.39998 10.45ZM5.39998 2.55C3.84998 2.55 2.54998 3.8 2.54998 5.25C2.54998 6.8 3.79998 7.95 5.39998 7.95C6.99998 7.95 8.24998 6.7 8.24998 5.25C8.24998 3.7 6.99998 2.55 5.39998 2.55Z"
                    fill={`#${fill}`}
                />
            </svg>
        </>
    );
}

export default LinkedIn;
