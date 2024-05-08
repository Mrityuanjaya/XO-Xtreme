import React from "react";
import Accordion from "../../components/Accordion/Accordion";
import { RULES } from "../../utils/constants";


const RulesPage = () => {
    return (
        <div className="text-center">
            <h2 className="text-5xl font-bold m-8">Rules 📜 </h2>
            <Accordion sections={RULES}/>
        </div>
    );
};

export default RulesPage;
