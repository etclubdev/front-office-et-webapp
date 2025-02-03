import './PersonalProfilePage.css';
import Sidebar from '../../components/Sidebar';
import UserInfo from '../../components/UserInfo';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


export const PersonalProfilePage = () => {
    return (
        <div className="personal-profile-container">
            <Sidebar />
            <Routes>
                <Route path='user/*' element={<UserInfo/>}/>
            </Routes>
           
        </div>
    )
}