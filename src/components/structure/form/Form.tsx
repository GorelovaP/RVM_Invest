import React from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import s from "./Form.module.css"
import axios from "axios";


export type UserSubmitForm = {
    name: string;
    tel: string;
    email: string;
    text: string;
}
export type FormPropsTYpe = {
    callback: () => void;
}

export const Form = (props: FormPropsTYpe) => {
    let phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Введите имя')
            .min(2, 'Имя должно содержать хотя бы 2 символа')
            .max(20, 'Имя не должно привышать 20 символов'),
        tel: Yup.string()
            .required('Введите телефон')
            .matches(phoneRegExp, 'Проверьте введенный номер'),
        email: Yup.string()
            .required('Введите email')
            .email('Неверный формат email-адреса'),
    });
    const {register, handleSubmit, reset, formState: {errors}} = useForm<UserSubmitForm>({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = (data: UserSubmitForm) => {
        // console.log(JSON.stringify(data, null, 2));
        console.log(data);
        axios.post('https://sheet.best/api/sheets/4e0586fe-0957-4a0a-aaeb-f88bb79069fc', data)
            .then(response => {
                console.log(response);
                reset();
                props.callback();
            })
    };

    return (
        <div className={s.form}>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    {...register('name')}
                    className={errors.name ? s.red : s.input}
                    placeholder={"Ваше имя *"}
                />
                <div className={s.feedback}>{errors.name?.message}</div>

                <input
                    type="text"
                    {...register('tel')}
                    className={errors.tel ? s.red : s.input}
                    placeholder={"Введите номер телефона *"}
                />
                <div className={s.feedback}>{errors.tel?.message}</div>

                <input
                    type="text"
                    {...register('email')}
                    className={errors.email ? s.red : s.input}
                    placeholder={"Ваш email *"}
                />
                <div className={s.feedback}>{errors.email?.message}</div>
                <textarea
                    {...register('text')}
                    className={s.area}
                    placeholder={"Ваш комментарий"}
                />
                <button type={"submit"} className={s.button}>
                    Отправить
                </button>
            </form>
        </div>
    )
}