import React from 'react';
import './JoinUsSection.css';
import { DepartmentCard } from '../DepartmentCard';


export const JoinUsSection = ({ joinUsInfo }) => {
  return (
    <div className="join-us-section">
        <p className="title">{joinUsInfo.title}</p>
        <div className="departments">
          { joinUsInfo.departments.map(department => (
            <DepartmentCard key={department.id} department={department}/>
          ))}
        </div>
        
    </div>
  )
}


