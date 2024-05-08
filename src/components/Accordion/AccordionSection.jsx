import React, { useState } from "react";

const AccordionSection = (props) => {
    const { idx, heading, content } = props;
    const [isVisible, setIsVisible] = useState(false);
    const handleClick = () => {
        setIsVisible(!isVisible);
    };
    return (
        <div className="w-8/12 shadow-lg mx-auto my-4">
            <div
                className="flex justify-between bg-gray-700 text-white px-4 py-6 cursor-pointer"
                onClick={handleClick}
            >
                <span className="font-bold text-xl">
                    {idx + 1 + ". " + heading}
                </span>
                <span>{isVisible ? "⬆️" : "⬇️"}</span>
            </div>
            {isVisible && <div className="text-lg p-4">{content}</div>}
        </div>
    );
};

export default AccordionSection;
