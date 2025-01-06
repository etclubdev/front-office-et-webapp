import './HRStructurePage.css';

import { Navbar } from '../../components/Navbar';
import { HRStructure } from '../../mocks/data';
import HRStructureTree from '../../mocks/images/hr-structure/hr-structure-tree.png'

const hrData = HRStructure.hrStructure;

export const HRStructurePage = () => {
    return (
        <div className="hr-structure-page">
            <Navbar/>
            <div className="hr-structure-tree">
                {
                    hrData.map((department, index) => {
                        if (index % 2 === 0)
                            return (
                                <div className="hr-structure-branch">
                                    <img src={require(`../../mocks${department.image}`)} alt="" className="hr-structure-img" />
                                    <div className="hr-structure-content">
                                        <p className="hr-structure-name">{department.name}</p>
                                        <p className="hr-structure-desc">{department.desc}</p>
                                    </div>
                                </div>
                            )
                        else {
                            return (
                                <div className="hr-structure-branch">
                                    <div className="hr-structure-content">
                                        <p className="hr-structure-name">{department.name}</p>
                                        <p className="hr-structure-desc">{department.desc}</p>
                                    </div>
                                    <img src={require(`../../mocks${department.image}`)} alt="" className="hr-structure-img" />
                                </div>
                            )
                        }
                    })
                }
                <img className='hr-tree' src={HRStructureTree} alt="" />
            </div>
        </div>
    )
}