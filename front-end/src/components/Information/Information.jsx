import './Information.css';
import { users } from '../../mocks/data';

const user = users.users[0];

export const Information = () => {
    return (
    <div className='info-section'>
        <div className="info-form">
            <img src={require(`../../mocks${user.userImage}`)} alt={user.userName} className="info-avatar" />
            <div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="name">Họ và tên <span className='required-icon'>*</span></label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="department">Ban</label>
                        <input type="text" id="department" name="department"  />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="phone">SĐT <span className='required-icon'>*</span></label>
                        <input type="tel" id="phone" name="phone" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email <span className='required-icon'>*</span></label>
                        <input type="email" id="email" name="email" required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="dob">Ngày sinh <span className='required-icon'>*</span></label>
                        <input type="date" id="dob" name="dob" required />
                    </div>
                    <div id='gender-group' className="form-group">
                        <label htmlFor="gender">Giới tính <span className='required-icon'>*</span></label>
                        <select id="gender" name="gender" required>
                            <option value="" disabled selected>Chọn giới tính</option>
                            <option value="male">Nam</option>
                            <option value="female">Nữ</option>
                            <option value="other">Khác</option>
                        </select>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="address">Địa chỉ <span className='required-icon'>*</span></label>
                        <input type="text" id="address" name="address" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="info-id">MSSV <span className='required-icon'>*</span></label>
                        <input type="text" id="info-id" name="info-id" required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="major">Ngành <span className='required-icon'>*</span></label>
                        <input type="text" id="major" name="major" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="class">Lớp <span className='required-icon'>*</span></label>
                        <input type="text" id="class" name="class" required />
                    </div>
                </div>
            </div>
        </div>
        <div className="info-btns">
            <button className='info-btn save'>Lưu</button>
            <button className='info-btn cancel'>Hủy</button>
        </div>
    </div>
        
    )
}