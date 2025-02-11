import React from 'react'

export const RadioInput = ({inputInfo, order, register, errors, className}) => {

    return (
        <div className={className.form}>
            <label>
                <b>{order}. {inputInfo.label}</b>
            </label>
            <div className={className.form + "-container"}>
                {
                    inputInfo.options.map(item => (
                        <label key={"radio-" + item.id} htmlFor={item.id}>
                            <input type="radio" value={item.label} id={"radio-" + item.id} {...register(inputInfo.id)} />
                            <p>{item.label}</p>
                        </label>
                    ))
                }
                
            </div>
            {errors[inputInfo.id] && <i className={className.errors}>{errors[inputInfo.id].message}</i>}

        </div>
    )
}
