"use client"

import {SubmitHandler, useForm} from "react-hook-form"

type Inputs = {
  email: string
}

export default function Basic() {
  const {handleSubmit, register, formState} = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data.email);
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <article className="prose">
        <form className="form-control gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label>
              <span className="label-text">
                Email
              </span>
            </label>
            <input 
              type="email"
              className="input input-bordered"
              {...register('email')}
            />
          </div>
            <button className="btn btn-primary">
              Submit
            </button>
        </form>
      </article>
    </div>
  )
}
