import { useState } from 'react';

function Instagram({ dynamicClass }) {
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
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M16 8.64999C11.95 8.64999 8.65002 11.95 8.65002 16C8.65002 20.05 11.95 23.35 16 23.35C20.05 23.35 23.35 20.05 23.35 16C23.35 11.95 20.05 8.64999 16 8.64999ZM16 21.6C12.9 21.6 10.4 19.1 10.4 16C10.4 12.9 12.9 10.4 16 10.4C19.1 10.4 21.6 12.9 21.6 16C21.6 19.1 19.1 21.6 16 21.6Z"
                    fill={`#${fill}`}
                />
                <path
                    d="M24.05 5.04999C23 5.04999 22.15 5.89999 22.15 6.94999C22.15 7.99999 23 8.84999 24.05 8.84999C25.1 8.84999 25.95 7.99999 25.95 6.94999C25.95 5.89999 25.1 5.04999 24.05 5.04999Z"
                    fill={`#${fill}`}
                />
                <path
                    d="M24 0.149994H8.00002C3.65002 0.149994 0.150024 3.64999 0.150024 7.99999V24C0.150024 28.35 3.70002 31.85 8.05002 31.85H24.05C28.4 31.85 31.9 28.3 31.9 23.95V7.99999C31.9 3.64999 28.35 0.149994 24 0.149994ZM30.15 24C30.15 27.4 27.4 30.15 24.05 30.15H8.00002C4.65002 30.15 1.90002 27.4 1.90002 24V7.99999C1.90002 4.64999 4.65002 1.89999 8.00002 1.89999H24C27.4 1.89999 30.15 4.64999 30.15 8.04999V24Z"
                    fill={`#${fill}`}
                />
            </svg>
        </>
    );
}

export default Instagram;
