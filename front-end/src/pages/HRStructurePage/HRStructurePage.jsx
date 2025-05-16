import './HRStructurePage.css';
import { useRef } from 'react';
import { useIntersectionObserver } from '../../utils/useIntersectionObserver';
import { Navbar } from '../../components/Navbar';
import { HRStructure } from '../../mocks/data';
import { CustomBreadcrumbs } from '../../components/CustomBreadcrumbs'

const hrData = HRStructure.hrStructure;

export const HRStructurePage = () => {

    const ref = useRef(null);
    useIntersectionObserver(ref, "hr-structure-branch", "visible", { threshold: 0.15 });

    const breadcrumbsData = [
        {
            href: "/",
            title: "Trang chủ"
        },
        {
            href: "#",
            title: "Cơ cấu tổ chức"
        }
    ]

    return (
        <div className="hr-structure-page">
            <Navbar />
            <CustomBreadcrumbs data={breadcrumbsData} style={{ width: "70%" }}></CustomBreadcrumbs>
            <p className="hr-structure-name title">CƠ CẤU TỔ CHỨC</p>
            <div className="hr-structure-tree" ref={ref}>
                {
                    hrData.map((department, index) => {
                        if (index % 2 === 0)
                            return (
                                <div className="hr-structure-branch even">
                                    <img src={require(`../../mocks${department.image}`)} alt="" className="hr-structure-img" />
                                    <div className="hr-structure-content">
                                        <p className="hr-structure-name">{department.name}</p>
                                        <p className="hr-structure-desc">{department.desc}</p>
                                    </div>
                                </div>
                            )
                        else {
                            return (
                                <div className="hr-structure-branch odd">
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
                {/* <img className='hr-tree' src={HRStructureTree} alt="" /> */}
            </div>
        </div>
    )
}