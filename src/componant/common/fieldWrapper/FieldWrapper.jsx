import clsx from 'clsx';
import { ErrorMessage, Field } from 'formik';
import React from 'react'

export default function FieldWrapper({ name, type, placeholder, customName, wrapperClass, label, as, classNameInput }) {
    return (
        <div className={clsx("field-wrapper  w-full  relative flex flex-col py-[.em] bg-gray-300 font-serif focus:border-2 ", wrapperClass)} name={"field-wrapper"}>
            <Field
                id={name}
                as={as}
                name={name}
                type={type}
                placeholder={" "}
                className={clsx("peer w-full bg-transparent text-gray-900 placeholder-transparent focus:outline-none pb-1 pt-8 ps-4", customName)}
            />
            <label
                htmlFor={name}
                className={clsx(
                    "absolute left-0 top-3 ps-3 text-white text-[1.1rem] transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-black peer-placeholder-shown:text-[1.1rem]   peer-focus:top-[.2rem] peer-focus:text-sm peer-focus:text-gray-500 peer-not-placeholder-shown:top-[.2rem] peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-gray-500 ",
                    classNameInput,
                )}>
                {label}
            </label>
            <ErrorMessage name={name} component="span" className="text-red-600 ms-3 text-[.8rem]" />
        </div>
    );
}
