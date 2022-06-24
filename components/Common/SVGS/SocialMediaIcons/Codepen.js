import { useState } from 'react';

export default function Codepen({ dynamicClass }) {
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
                className={dynamicClass}
                width="32"
                height="32"
                viewBox="0 0 32 32"
                onMouseOver={onMouseEnterHandler}
                onMouseLeave={onMouseLeaveHandler}
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M30.5 9.725L16.25 0.225C15.75 -0.075 15.25 -0.075 14.75 0.225L0.55 9.725C0.2 9.925 0 10.425 0 10.775V20.225C0 20.625 0.2 21.075 0.55 21.375L14.75 30.825C15.25 31.125 15.75 31.125 16.25 30.825L30.45 21.375C30.8 21.175 31 20.675 31 20.225V10.775C31.05 10.375 30.85 9.925 30.5 9.725ZM16.85 3.825L27.3 10.825L22.55 13.925L16.8 10.025C16.85 10.025 16.85 3.825 16.85 3.825ZM14.2 3.825V10.025L8.4 13.925L3.75 10.825L14.2 3.825ZM2.7 13.275L6 15.525L2.7 17.775V13.275ZM14.2 27.225L3.75 20.225L8.4 17.125L14.2 21.025V27.225ZM15.55 18.725L10.8 15.525L15.55 12.325L20.3 15.525L15.55 18.725ZM16.85 27.225V21.025L22.65 17.125L27.3 20.225L16.85 27.225ZM28.35 17.775L25.05 15.525L28.35 13.275V17.775Z"
                    fill={`#${fill}`}
                />
            </svg>
        </>
    );
}
