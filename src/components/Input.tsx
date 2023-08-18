import { ComponentPropsWithRef, ComponentPropsWithoutRef} from "react"
import { UseFormRegister } from "react-hook-form"


interface Props extends ComponentPropsWithRef<'input'> {
    label?: string
}

export default function Input({ label, ...others }: Props) {

    return (
        <div className="form-control">
            <label className="label">
                {label && <span className="label-text">{label}</span>}
            </label>
            <input
                className="input input-bordered"
                {...others}
            />
        </div>
    )
}