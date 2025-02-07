import './LogInPage.css';
import { noTextLogo } from '../../assets/images/logos';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';

const schema = yup.object().shape({
    username: yup
        .string()
        .matches(/^[a-zA-Z0-9_]+$/, "Tên đăng nhập chỉ chứa chữ, số và dấu gạch dưới")
        .min(4, "Tên đăng nhập phải có ít nhất 4 ký tự")
        .max(20, "Tên đăng nhập không được vượt quá 20 ký tự")
        .required("Vui lòng nhập tên đăng nhập"),

    password: yup
        .string()
        .min(8, "Mật khẩu phải có ít nhất 8 ký tự")
        .max(32, "Mật khẩu không được vượt quá 32 ký tự")
        .matches(/[a-z]/, "Mật khẩu phải chứa ít nhất một chữ thường")
        .matches(/[A-Z]/, "Mật khẩu phải chứa ít nhất một chữ hoa")
        .matches(/[0-9]/, "Mật khẩu phải chứa ít nhất một số")
        .matches(/[@$!%*?&]/, "Mật khẩu phải chứa ít nhất một ký tự đặc biệt (@$!%*?&)")
        .required("Vui lòng nhập mật khẩu"),
});

export const LogInPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [eyeSlashIcon, setEyeSlashIcon] = useState(faEye);
    const [passwordType, setPasswordType] = useState("text");

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
        
        if(showPassword) {
            setEyeSlashIcon(faEye);
            setPasswordType("text");
        } else {
            setEyeSlashIcon(faEyeSlash);
            setPasswordType("password");
        }
      };

    const form = useForm({
        defaultValues: {
            username: "",
            password: "",
        },
        resolver: yupResolver(schema)
    })

    const { register, handleSubmit, formState: { errors, is } } = form

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="log-in">
            <div className="log-in-form">
                <div className="log-in-form-item">
                    <img className='log-in-logo' src={noTextLogo} alt="ET Club" />
                    <p className="log-in-welcome">Chào mừng trở lại!</p>
                    <div className="log-in-division">
                        <div className="log-in-division-bar"></div>
                        <div className="log-in-desc">Đăng nhập vào hệ thống quản lý website ET</div>
                        <div className="log-in-division-bar"></div>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div className="log-in-form-control">
                        <label htmlFor="username">Tên đăng nhập</label>
                        <input type="text" id="username" {...register("username")}/>
                        {errors.username?.message && <p className="log-in-error">{errors.username.message}</p>}
                    </div>
                    <div className="log-in-form-control">
                        <label htmlFor="password">Mật khẩu</label>
                        <div className="password-input">
                            <input type={passwordType} id="password" {...register("password")}/>
                            <FontAwesomeIcon onClick={togglePasswordVisibility} className='password-eye' icon={eyeSlashIcon}/>
                        </div>
                        {errors.password?.message && <p className='log-in-error'>{errors.password?.message}</p>}
                    </div>
                    <button type="submit">Đăng nhập</button>
                </form>
            </div>
        </div>
    )
}