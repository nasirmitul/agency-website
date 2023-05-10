import React from 'react';

const SectionTitle = ({ title }) => {
    return (
        <div>
            <div className="section-title">
                <div className="box-before"></div>
                <p>{title}</p>
            </div>
        </div>
    );
};

export default SectionTitle;