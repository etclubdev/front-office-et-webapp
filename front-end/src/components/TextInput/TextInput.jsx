import React from 'react'

export const TextInput = ({inputInfo, order, register, errors, className}) => {
  return (
    <div className={className.form}>
        <label htmlFor={inputInfo.id}>
            <b>{order}. {inputInfo.label}</b>
        </label>
        <input type="text" id={inputInfo.id} {...register(inputInfo.id)}/>
        {errors[inputInfo.id] && <i className={className.errors}>{errors[inputInfo.id].message}</i>}
    </div>
  )
}
