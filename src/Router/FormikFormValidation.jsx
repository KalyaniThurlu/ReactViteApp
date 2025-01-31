
import { useFormik } from "formik";

const FormValidationFormik = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            number: "",
        },
        validate: (values) => {
            const errors = {};

            if (values.name.length < 6) {
                errors.name = "Name should be at least 6 characters long";
            }
            if (!values.email.includes("@")) {
                errors.email = "Invalid email";
            }

        
            if (isNaN(values.number) || values.number.trim() === "") {
                errors.number = "Please enter a valid number";
            }

            return errors;
        },
        onSubmit: (values) => {
            alert("Form submitted successfully with values: " + JSON.stringify(values));
        },
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label>Name: </label>
                    <input
                        type="text"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.name && <p style={{ color: "red" }}>{formik.errors.name}</p>}
                </div>

                <div>
                    <label>Email: </label>
                    <input
                        type="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.email && <p style={{ color: "red" }}>{formik.errors.email}</p>}
                </div>

                <div>
                    <label>Number: </label>
                    <input
                        type="text"
                        name="number"
                        value={formik.values.number}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.number && <p style={{ color: "red" }}>{formik.errors.number}</p>}
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FormValidationFormik;
