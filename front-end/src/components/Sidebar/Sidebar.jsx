import './Sidebar.css';
import horizontalLogin from '../../assets/images/logos/horizontalLogo.png';
import {users} from '../../mocks/data';
import { shieldIcon, usersIcon, fileIcon, zapIcon, gridIcon, smileIcon, phoneIcon, sendIcon } from '../../assets/icons';
import { Link } from 'react-router-dom';
const user = users.users[0];

export const Sidebar = () => {
    const handleClick = (id) => {
        const sideBarEle = document.querySelector(".side-bar-container");
        
        const activeEle = sideBarEle.querySelector(`.active`);
        if (activeEle) activeEle.classList.remove('active');

        const clickedEle = sideBarEle.querySelector(`#${id}`);
        if (clickedEle) clickedEle.classList.add('active');
    }

    return (
        <div className="side-bar-container">
            <img className='side-bar-logo' src={horizontalLogin} alt="ET Club" />
            <div  className="side-bar-items">
                <Link onClick={(e) => handleClick(e.currentTarget.id)} to='user/info' className="side-bar-item" id='side-bar-user'>
                    <img className='user-avatar' src={require(`../../mocks${user.userImage}`)} alt="" />
                    <div className="user-info">
                        <p className="user-name">{user.userName}</p>
                        <p className="user-id">@{user.userId}</p>
                    </div>
                </Link>
                <Link onClick={(e) => handleClick(e.currentTarget.id)} to="account" className="side-bar-item" id='side-bar-account'>
                    <img className="side-bar-item-icon" src={shieldIcon} alt="Quản lý tài khoản" />
                    <p className="side-bar-item-label">Quản lý tài khoản</p>
                </Link>
                <Link onClick={(e) => handleClick(e.currentTarget.id)} to="hr" className="side-bar-item" id='side-bar-hr'>
                    <img className="side-bar-item-icon" src={usersIcon} alt="Quản lý nhân sự" />
                    <p className="side-bar-item-label">Quản lý nhân sự</p>
                </Link>
                <Link onClick={(e) => handleClick(e.currentTarget.id)} to="et-news" className="side-bar-item" id='side-bar-etnews'>
                    <img className="side-bar-item-icon" src={fileIcon} alt="Quản lý ET News" />
                    <p className="side-bar-item-label">Quản lý ET News</p>
                </Link>
                <Link onClick={(e) => handleClick(e.currentTarget.id)} to="activities" className="side-bar-item" id='side-bar-activities'>
                    <img className="side-bar-item-icon" src={zapIcon} alt="Quản lý hoạt động" />
                    <p className="side-bar-item-label">Quản lý hoạt động</p>
                </Link>
                <Link onClick={(e) => handleClick(e.currentTarget.id)} to="homepage" className="side-bar-item" id='side-bar-homepage'>
                    <img className="side-bar-item-icon" src={gridIcon} alt="Quản lý trang chủ" />
                    <p className="side-bar-item-label">Quản lý trang chủ</p>
                </Link>
                <Link onClick={(e) => handleClick(e.currentTarget.id)} to="collaborator" className="side-bar-item" id='side-bar-collaborator'>
                    <img className="side-bar-item-icon" src={smileIcon} alt="Quản lý Tìm kiếm CTV" />
                    <p className="side-bar-item-label">Quản lý Tìm kiếm CTV</p>
                </Link>
                <Link onClick={(e) => handleClick(e.currentTarget.id)} to="partner" className="side-bar-item" id='side-bar-partner'>
                    <img className="side-bar-item-icon" src={phoneIcon} alt="Quản lý đối tác" />
                    <p className="side-bar-item-label">Quản lý đối tác</p>
                </Link>
                <Link onClick={(e) => handleClick(e.currentTarget.id)} to="campaign" className="side-bar-item" id='side-bar-campaign'>
                    <img className="side-bar-item-icon" src={sendIcon} alt="Quản lý chiến dịch" />
                    <p className="side-bar-item-label">Quản lý chiến dịch</p>
                </Link>
            </div>
            
        </div>
    )
}