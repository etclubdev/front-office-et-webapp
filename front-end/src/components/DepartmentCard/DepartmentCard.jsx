import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

export const DepartmentCard = ({ department }) => {
    return (
        <div className="department-card">
            <p className="name">{department.name}</p>
            <div className="action-button">
                Bạn sẽ làm gì
                <FontAwesomeIcon icon={faArrowRight} />
            </div>
            <div className="action-button">
                Bạn sẽ được học gì
                <FontAwesomeIcon icon={faArrowRight} />
            </div>
        </div>
    )
}
