import React from 'react';
import './CollaboratorPage.css';
import { SeekingBanner } from '../../components/SeekingBanner';
import { CollaboratorForm } from '../../components/CollaboratorForm';
import { CoreValues } from '../../components/CoreValues/CoreValues';
import { JoinUsSection } from '../../components/JoinUsSection';
import { Numbers } from '../../components/Numbers/Numbers';
import { SeekingProcess } from '../../components/SeekingProcess';

import { collaborators } from '../../mocks/data';
const { form, seekingInfo, coreValues, joinUsInfo, numbersInfo, seekingProcessInfo } = collaborators


export const CollaboratorPage = () => {
  return (
    <div className="collaborator-page">
        <SeekingBanner />
        <div className="about-et">
          <Numbers numbersInfo={numbersInfo}/>
          <CoreValues coreValues={coreValues} />
          <JoinUsSection joinUsInfo={joinUsInfo}/>
        </div>
        <SeekingProcess seekingProcessInfo={seekingProcessInfo}/>
        <CollaboratorForm form={form} seekingInfo={seekingInfo} />
    </div>
  )
}
