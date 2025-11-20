import * as Yup from "yup";

export const validationSchema = Yup.object({
    name: Yup.string()
        .matches(/^[a-zA-Z\s]+$/, "Invalid name")
        .required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    project: Yup.string().required("Project name is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().min(10, "Message must be at least 10 characters").required("Message is required"),
});
