"use client"

import Input from "@/components/Input"
import { Metadata } from "next"
import { SubmitHandler, useForm } from "react-hook-form"

enum Gender {
    male = "male",
    female = "female",
    other = "other"
}

interface IFormInputs {
    name: string
    gender: Gender
}

export default function Select() {
    const {handleSubmit, register} = useForm<IFormInputs>()
    const onSubmit: SubmitHandler<IFormInputs> = (data) => {
        console.log('Name :', data.name);
        console.log('Gender:', data.gender);
        
    }

    return (
        <main className="min-h-screen flex justify-center items-center">
            <article className="prose">
                <form className="form-control gap-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" className="input input-bordered" {...register('name')} />
                    </div>
                    <div className="form-control">
                        <label className="label" >Gender</label>
                        <select className="select select-bordered w-full" {...register('gender')}>
                            <option value={Gender.male}>Male</option>
                            <option value={Gender.female}>Female</option>
                            <option value={Gender.other}>Other</option>
                        </select>
                    </div>
                    <button className="btn btn-primary">Submit</button>
                </form>
            </article>
        </main>
    )
}