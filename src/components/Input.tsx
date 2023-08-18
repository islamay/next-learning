import { ComponentPropsWithRef, ComponentPropsWithoutRef} from "react"
import { UseFormRegister, Path } from "react-hook-form"


interface Props<T extends {}> extends ComponentPropsWithRef<'input'> {
    label: Path<T>
    register: UseFormRegister<T>
    errorMessage?: string
}

export default function Input<T extends {}>({ label, register, errorMessage, ...others }: Props<T>) {

    return (
        <div className="form-control">
            <label className="label">
                {label && <span className="label-text capitalize">{label}</span>}
            </label>
            <input
                {...others}
                className="input input-bordered"
                {...register(label)}
            />
            { errorMessage && 
                <label className="label">
                    <span className="label-text-alt text-error">{errorMessage}</span>
                </label>
            }
        </div>
    )
}