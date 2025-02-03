import './Password.css';

export const Password = () => {
    return (
        <div className="password-section">
            <div>
                <div className="form-group">
                    <label htmlFor="curr-password">Mật khẩu hiện tại<span className='required-icon'>*</span></label>
                    <input type="text" id="curr-password" name="curr-password" required />
                </div>
                <div className="form-group">
                    <label htmlFor="new-password">Mật khẩu mới</label>
                    <input type="text" id="new-password" name="new-password" />
                </div>
                <div className="form-group">
                    <label htmlFor="verify-password">Xác nhận mật khẩu</label>
                    <input type="text" id="verify-password" name="verify-password" />
                </div>
            </div>
            <div className="password-btns">
                <button className='password-btn save'>Lưu</button>
                <button className='password-btn cancel'>Hủy</button>
            </div>
        </div>
    )

}

