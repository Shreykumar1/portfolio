import React from 'react';
import about from '../../../styles/sections/index/about.module.scss';

const Experience = () => {
    return (
        <div className={about.experience}>
            <div className={about.role}>
                <div className={about.roleHeader}>
                    <h3>Full Stack Developer Intern</h3>
                    <span className={about.company}>Debales AI</span>
                    <span className={about.duration}>September 2024 - January 2025</span>
                </div>
            <ul className={about.responsibilities}>
                <li><strong>Integrated</strong> e-commerce products into a RAG-based AI Sales Agent by collaborating with cross-functional teams, enhancing user interactions and workflows, and boosting engagement by <strong>25%</strong>.</li>
                <li><strong>Independently led</strong> the development of a Wix app & WooCommerce integration, boosting chatbot adoption by <strong>15%</strong> and enabling <strong>100+</strong> users to seamlessly manage chat functionalities on their websites.</li>
                <li><strong>Automated</strong> end-to-end testing with Cypress, reducing manual QA efforts by <strong>30%</strong> and ensuring application reliability.</li>
                <li><strong>Enhanced</strong> chatbot performance analytics by designing tracking features, enabling actionable insights that optimized engagement and improved retention rates by <strong>20%</strong>.</li>
            </ul>
            </div>
        </div>
    );
};

export default Experience; 