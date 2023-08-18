"use client"

import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import Input from "@/components/Input"

const schema = z.object({
    username: z.string().min(4, "Username must contain at least 4 characters"),
    password: z.string().min(8, "Password must contain at least 4 characters")
})

type Schema = z.infer<typeof schema>

export default function WithCustomComponent() {
    const { handleSubmit, register, formState: { errors } } = useForm<Schema>({ resolver: zodResolver(schema) })
    const onSubmit: SubmitHandler<Schema> = (data) => {
        console.log(data)
    }

    return (
        <main className="min-h-screen flex justify-center items-center">
            <article className="prose">
                <form className="form-control" onSubmit={handleSubmit(onSubmit)} >
                    <Input<Schema> label="username" register={register} errorMessage={errors.username?.message} />
                    <Input<Schema> label="password" register={register} errorMessage={errors.password?.message} />
                    <button className="btn btn-primary mt-4">submit</button>
                </form>
            </article>
        </main>
    )
}