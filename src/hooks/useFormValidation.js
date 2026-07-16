import { useState } from "react";

const useFormValidation = (initialValues, validate, onSubmit) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

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



    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validate(values);

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setLoading(true);

            try {
                await onSubmit(values, resetForm);
            } finally {
                setLoading(false);
            }
        }
    };

    return {
        values,
        errors,
        loading,
        handleChange,
        handleSubmit,
        resetForm,
    };
};

export default useFormValidation;