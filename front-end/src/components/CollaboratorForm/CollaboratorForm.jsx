import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import './CollaboratorForm.css';
import { TextInput } from '../TextInput';
import { RadioInput } from '../RadioInput';
import { SelectInput } from '../SelectInput';

import { collaboratorsForm } from '../../mocks/data';

const schema = yup.object().shape({
    name: yup
        .string()
        .required("Vui lòng nhập họ và tên"),
    email: yup
        .string()
        .email("Định dạng email không hợp lệ")
        .required("Vui lòng nhập email"),
    phoneNumber: yup
        .string()
        .matches(/^(0|\+84)\d{9}$/, "Số điện thoại không hợp lệ")
        .required("Vui lòng nhập số điện thoại"),
    school: yup
        .string()
        .required("Vui lòng chọn trường"),
    studentId: yup
        .string()
        .matches(/^\d+$/, "MSSV chỉ được chứa chữ số")
        .required("Vui lòng nhập MSSV"),
    academicYear: yup
        .string()
        .required("Vui lòng chọn trường"),
    faculty: yup
        .string()
        .required("Vui lòng chọn khoa"),
    majorClass: yup
        .string()
        .matches(/^[\p{L}\s]+\s*-\s*\w+$/u, "Ngành - Lớp không hợp lệ")
        .required("Vui lòng nhập ngành - lớp"),
    department: yup
        .string()
        .required("Vui lòng chọn ban bạn muốn ứng tuyển"),
    cvType: yup
        .string()
        .required("Vui lòng chọn loại CV"),
    cvFile: yup
        .mixed()
        .test("required", "Vui lòng tải lên file CV", (value) => {
            return value && value.length > 0;
        })
        .test("fileType", "Chỉ chấp nhận tệp PDF", (value) => {
            return value && value[0]?.type === "application/pdf";
        })
});


const className = [
    {
        form: 'collaborator-form-control',
        errors: 'collaborator-form-errors'
    },
    {
        form: 'collaborator-form-radio',
        errors: 'collaborator-form-errors'
    },
    {
        form: 'collaborator-form-select',
        errors: 'collaborator-form-errors'
    }
]

export const CollaboratorForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log("Full Form Data:", data);
    };

    const cvFile = watch("cvFile");

    return (
        <div className="collaborator-form">
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                {
                    collaboratorsForm.map((item, index) => {
                        switch (item.inputType) {
                            case 'text': {
                                return (
                                    <TextInput
                                        key={'collaborators-' + item.id}
                                        order={index + 1}
                                        inputInfo={collaboratorsForm[index]}
                                        register={register}
                                        errors={errors}
                                        className={className[0]}
                                    />
                                )
                            }

                            case 'radio': {
                                return (
                                    <RadioInput
                                        key={'collaborators-' + item.id}
                                        order={index + 1}
                                        inputInfo={collaboratorsForm[index]}
                                        register={register}
                                        errors={errors}
                                        className={className[1]}
                                    />
                                )
                            }

                            case 'select': {
                                return (
                                    <SelectInput
                                    key={'collaborators-' + item.id}
                                        order={index + 1}
                                        inputInfo={collaboratorsForm[index]}
                                        register={register}
                                        errors={errors}
                                        className={className[2]}
                                    />
                                )
                            }
                        }
                    })
                }

                <div className="collaborator-form-upload">
                    <p id="file-upload-title">Upload Files</p>
                    <label htmlFor="cvFile" className="upload-box">
                        <input
                            type="file"
                            id="cvFile"
                            accept="application/pdf"
                            {...register("cvFile")}
                        />
                        <label htmlFor="cvFile" className="custom-button">
                            Choose File
                        </label>
                        <span id="file-name">{cvFile?.[0]?.name || "No file chosen"}</span>
                        {errors.cvFile && <p className="collaborator-form-errors">{errors.cvFile.message}</p>}
                    </label>
                </div>
                <button className="collaborator-form-button" type='submit'>Nộp đơn</button>
            </form>
        </div>
    )
}
