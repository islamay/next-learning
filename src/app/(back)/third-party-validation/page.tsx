"use client"

import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const schema = z.object({
    username: z.string().min(4, "Username must be atleast 4 characters"),
    password: z.string().min(8, "Password must be atleast 8 characters"),
})

type Schema = z.infer<typeof schema>;

export default function ThirdPartyValidation() {
    const { handleSubmit, register, formState: { errors } } = useForm<Schema>({ resolver: zodResolver(schema) })
    const onSubmit: SubmitHandler<Schema> = (data) => {
        console.log(data);
    }

    return (
        <main className="min-h-screen flex justify-center items-center">
            <div className="prose">
                <form className="form-control gap-2" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                            <span className={`label-text ${errors.username && 'text-error'}`}>Username</span>
                        </label>
                        <input type="text" className={`input input-bordered ${errors.username && 'input-error'}`} {...register('username')} />
                        {
                            errors.username &&
                            <label className="label">
                                <span className="label-text-alt text-error">{errors.username.message}</span>
                            </label>
                        }
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className={`label-text ${errors.password && 'text-error'}`}>Password</span>
                        </label>
                        <input type="password" className={`input input-bordered ${errors.password && 'input-error'}`} {...register('password')} />
                        {
                            errors.password &&
                            <label className="label">
                                <span className="label-text-alt text-error">{errors.password.message}</span>
                            </label>
                        }
                    </div>
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
        </main>
    )
}