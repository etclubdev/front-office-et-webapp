import './Information.css';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { users } from '../../mocks/data';

const user = users.users[0];

const schema = yup.object().shape({
    name: yup
        .string()
        .required('Vui lòng nhập Họ và tên'),
    phone: yup
        .string()
        .matches(/^\+?[0-9]{10,15}$/, 'Số điện thoại không hợp lệ')
        .transform((value, originalValue) => 
            originalValue === "" ? null : value
        )
        .required('Vui lòng nhập Số điện thoại'),
    dob: yup
        .date()
        .nullable()
        .transform((value, originalValue) => 
          originalValue === "" ? null : value
        )
        .required('Vui lòng chọn ngày sinh')
        .max(new Date(), 'Ngày sinh không hợp lệ')
        .typeError('Ngày sinh không hợp lệ'),
    address: yup
        .string()
        .required('Vui lòng nhập Địa chỉ'),
    major: yup
        .string()
        .required('Vui lòng nhập Ngành học'),
    department: yup
        .string()
        .transform((value, originalValue) => 
            originalValue === "" ? null : value
        )
        .required('Vui lòng nhập Ban'),
    email: yup
        .string()
        .email('Email không hợp lệ') 
        .required('Vui lòng nhập email'),
    gender: yup
        .string()
        .oneOf(['Nam', 'Nữ', 'Khác'], 'Giới tính không hợp lệ')
        .required('Vui lòng chọn Giới tính'),
    infoId: yup
        .string()
        .required('Vui lòng nhập MSSV'),
    class: yup
        .string()
        .required('Vui lòng nhập Lớp')
});

export const Information = () => {
    const form = useForm({
        defaultValues: {
            name: user.name,
            phone: user.phone,
            dob: user.dob,
            address: user.address,
            major: user.major,
            department: user.department,
            email: user.email,
            gender: user.gender,
            infoId: user.infoId,
            class: user.class
        },
        resolver: yupResolver(schema)
    });
    const { register, handleSubmit, formState } = form;

    const onSubmit = (data) => {
        console.log('Information saved', data);
    };

    return (
        <div className='info-section'>
            <div className="info-form">
                <img src={require(`../../mocks${user.image}`)} alt={user.userName} className="info-avatar" />
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">Họ và tên <span className='required-icon'>*</span></label>
                            <input type="text" id="name" {...register('name')} />
                            {formState.errors.name && <p className="error">{formState.errors.name.message}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="department">Ban</label>
                            <input type="text" id="department" {...register('department')} />
                            {formState.errors.department && <p className="error">{formState.errors.department.message}</p>}
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="phone">SĐT <span className='required-icon'>*</span></label>
                            <input type="tel" id="phone" {...register('phone')} />
                            {formState.errors.phone && <p className="error">{formState.errors.phone.message}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email <span className='required-icon'>*</span></label>
                            <input type="email" id="email" {...register('email')} />
                            {formState.errors.email && <p className="error">{formState.errors.email.message}</p>}
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="dob">Ngày sinh <span className='required-icon'>*</span></label>
                            <input type="date" id="dob" {...register('dob')} />
                            {formState.errors.dob && <p className="error">{formState.errors.dob.message}</p>}
                        </div>
                        <div id='gender-group' className="form-group">
                            <label htmlFor="gender">Giới tính <span className='required-icon'>*</span></label>
                            <select id="gender" {...register('gender')} defaultValue="">
                                <option value="" disabled>Chọn giới tính</option>
                                <option value="Nam">Nam</option>
                                <option value="Nữ">Nữ</option>
                                <option value="Khác">Khác</option>
                            </select>
                            {formState.errors.gender && <p className="error">{formState.errors.gender.message}</p>}
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="address">Địa chỉ <span className='required-icon'>*</span></label>
                            <input type="text" id="address" {...register('address')} />
                            {formState.errors.address && <p className="error">{formState.errors.address.message}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="infoId">MSSV <span className='required-icon'>*</span></label>
                            <input type="text" id="infoId" {...register('infoId')} />
                            {formState.errors.infoId && <p className="error">{formState.errors.infoId.message}</p>}
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="major">Ngành <span className='required-icon'>*</span></label>
                            <input type="text" id="major" {...register('major')} />
                            {formState.errors.major && <p className="error">{formState.errors.major.message}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="class">Lớp <span className='required-icon'>*</span></label>
                            <input type="text" id="class" {...register('class')} />
                            {formState.errors.class && <p className="error">{formState.errors.class.message}</p>}
                        </div>
                    </div>
                    <div className="info-btns">
                        <button type='submit' className='info-btn save'>Lưu</button>
                        <button type='button' className='info-btn cancel'>Hủy</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
