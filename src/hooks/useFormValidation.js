import { useState } from "react";

const useFormValidation = (initialValues, validate, onSubmit) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const resetForm = () => {
        setValues(initialValues);
        setErrors({});
    };



    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate(values);

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            onSubmit(values, resetForm);
        }
    };

    return {
        values,
        errors,
        handleChange,
        handleSubmit,
        resetForm,
    };
};

export default useFormValidation;