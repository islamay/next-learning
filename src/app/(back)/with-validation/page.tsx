"use client"
import { SubmitHandler, useForm } from "react-hook-form"

interface IFormInputs {
    username: string,
    password: string,
}

export default function WithValidation() {
    const { handleSubmit, register, formState: {errors} } = useForm<IFormInputs>({ criteriaMode: 'all', mode: 'onBlur' })
    const onSubmit: SubmitHandler<IFormInputs> = (data) => {
        console.log(data)
    }

    return (
        <main className="min-h-screen flex justify-center items-center">
            <article className="prose">
                <form className="form-control gap-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Create Username</span>
                        </label>
                        <input
                            type="text"
                            className="input input-bordered"
                            {...register('username')}
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className={`label-text ${errors.password && 'text-error'}`}>Create Password</span>
                        </label>
                        <input
                            type="password"
                            className={`input input-bordered ${errors.password && 'input-error'}`}
                            {...register('password', {
                                minLength: {value: 8, message: 'Password character must be 8 character'}
                            })}
                        />
                    </div>
                    <button className="btn btn-primary">Submit</button>
                </form>
            </article>
        </main>
    )
}