import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import './CustomBreadcrumbs.css'

export const CustomBreadcrumbs = ({ data, style }) => {
    return (
        <div className="breadcrumb-container" style={style}>
            <Breadcrumbs aria-label="breadcrumb">
                {data.map((item, index) => (
                    <Link key={index} to={item.href} className="nav-item">
                        <p className="nav-item-content breadcrumb-item">{item.title}</p>
                    </Link>
                ))}
            </Breadcrumbs>
        </div>
    );
}