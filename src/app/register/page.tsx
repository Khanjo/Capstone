import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import styles from './page.module.css'
import Link from "next/link";

interface SignupType {
    email: string;
    password: string;
    password_confirm: string;
}
const SignupPage = () => {
    const methods = useForm<SignupType>({ mode: "onBlur" });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = methods;

    const onSubmit = async (data: SignupType) => {
        console.log(data);
    };

    return (
        <>
            <h1>Register</h1>
            <div className={styles.register}>
                <FormProvider {...methods}>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <input
                            type="email"
                            {...register("email", { required: "Email is required" })}
                            className={`border border-solid rounded-lg ring:0 focus:ring-0 focus:outline-none border-gray-400 text-gray-500 text-normal py-3 h-12 px-6 text-lg w-full flex items-center`}
                            placeholder="email"
                        />
                        <input
                            type="password"
                            {...register("password", { required: "Password is required" })}
                            className={`border border-solid rounded-lg ring:0 focus:ring-0 focus:outline-none border-gray-400 text-gray-500 text-normal py-3 h-12 px-6 text-lg w-full flex items-center`}
                            placeholder="password"
                        />
                        <input
                            type="password"
                            {...register("password_confirm", {
                                required: "Verify your password",
                            })}
                            className={`border border-solid rounded-lg ring:0 focus:ring-0 focus:outline-none border-gray-400 text-gray-500 text-normal py-3 h-12 px-6 text-lg w-full flex items-center`}
                            placeholder="confirm password"
                        />
                        <button
                            type="submit"
                            className={styles.button}
                        />
                    </form>
                </FormProvider >
            </div >
            <p className={styles.registerText}>If you are already registered, please follow <Link href='login'>this link</Link></p>
        </>
    )
}