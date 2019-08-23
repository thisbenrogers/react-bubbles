import { useState } from 'react'

export const useForm = cb => {
    const [fields, setFields] = useState({})

    const submit = e => {
        e && e.preventDefault()
        cb(fields)
        e.target.reset();
        console.log("fields in submit(): ", fields);
    }

    const handleChanges = e => {
        e.preventDefault()
        setFields({ ...fields, [e.target.name]: e.target.value })
    }

    return {
        handleChanges,
        submit,
        fields
    }
}