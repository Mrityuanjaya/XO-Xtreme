import React from "react";
import AccordionSection from "./AccordionSection";

const Accordion = (props) => {
    const { sections } = props;
    return (
        <div>
            {sections.map((section, idx) => (
                <AccordionSection
                    key={idx}
                    idx={idx}
                    heading={section.heading}
                    content={section.content}
                />
            ))}
        </div>
    );
};

export default Accordion;
