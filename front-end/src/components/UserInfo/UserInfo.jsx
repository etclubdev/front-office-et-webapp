import './UserInfo.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Information from '../Information';
import Password from '../Password';

export const UserInfo = () => {

    const handleClick = (id) => {
        const userInfoEle = document.querySelector(".user-info-container");
        
        const activeEle = userInfoEle.querySelector(`.active`);
        if (activeEle) activeEle.classList.remove('active');
        
        const clickedEle = userInfoEle.querySelector(`#${id}`);
        if (clickedEle) clickedEle.classList.add('active');
    }

    return (
        <div className="user-info-container">
            <div className="user-info-header">
                <p className="header-title">Thông tin tài khoản</p>
                <div className="header-items">
                    <Link onClick={(e) => handleClick(e.currentTarget.id)} to="info" id='header-info' className="header-item active">Thông tin</Link>
                    <Link onClick={(e) => handleClick(e.currentTarget.id)} to="password" id='header-password' className="header-item">Đổi mật khẩu</Link>
                </div>
            </div>
            <div className="user-info-content">
                <Routes>
                    <Route path='info' element={<Information />} />
                    <Route path='password' element={<Password />} />
                </Routes>
            </div>
        </div>
    )
}