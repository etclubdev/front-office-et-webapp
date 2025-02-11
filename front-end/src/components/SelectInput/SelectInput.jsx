import React from 'react'

export const SelectInput = ({inputInfo, order, register, errors, className}) => {
    return (
        <div className={className.form}>
            <label>
                <b>{order}. {inputInfo.label}</b>
            </label>
            <select defaultValue="" id={inputInfo.id} {...register(inputInfo.id)}>
                <option value="" disabled hidden>Chọn khoa</option>
                {inputInfo.options.map((item) => (
                    <option key={item.id} value={item.label}>
                        {item.label}
                    </option>
                ))}
            </select>
            {errors[inputInfo.id] && <i className={className.errors}>{errors[inputInfo.id].message}</i>}
        </div>
    )
}
