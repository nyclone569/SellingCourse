import { useState } from "react";
import { validate } from "../utils/validate";

export const useForm = (rules) => {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({})

    const register = (name) => {
        return {
            error: errors[name],
            value: values[name] || '',
            onChange: ev => setValues({ ...values, [name]: ev.target.value })
        }
    }

    const _validate = () => {
        const errorObject = validate(rules, values)
        setErrors(errorObject)
        return Object.keys(errorObject).length === 0
    }

    return {
        values,
        errors,
        register,
        validate: _validate
    }
}