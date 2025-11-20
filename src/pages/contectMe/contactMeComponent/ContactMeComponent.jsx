import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import CustomContainerMain from "../../../componant/customContainter/customContainerMain/CustomContainerMain";
import { Form, Formik } from "formik";
import FieldWrapper from "../../../componant/common/fieldWrapper/FieldWrapper";
import { MdOutlineCommentBank, MdOutlineInsertComment } from "react-icons/md";
import { validationSchema } from "../../../componant/validition/Validation";

export default function ContactMeComponent() {
    return (
        <div className="bg-gray-300 lg:w-[72%] w-full dark:bg-amber-100  ">
            <CustomContainerMain>
                <div className="bg-white w-full xl:px-6 lg:px-4 px-6 flex lg:flex-row flex-col justify-center  xl:gap-12 lg:gap-4 lg:mt-[4em] my-[2em]">
                    <div className="contect-detials flex flex-col w-full gap-4 mt-[.5em]">
                        <div className="sd text-black">
                            <MdOutlineCommentBank size={70} />
                        </div>
                        <h3 className="text-[1.8em] font-serif font-extrabold">Contact Me</h3>
                        <div className="contact-detials-container  flex flex-col gap-8">
                            {/* <div className="home-contact "> */}
                            <div className="home-contact-details flex lg:flex-col md:flex-row flex-col gap-4 text-[1.2rem]">
                                <div className="email flex md:gap-4 gap-2 ">
                                    <div className="icon min-w-[3em] h-[3em] bg-black flex justify-center items-center">
                                        <AiOutlineMail size={24} className="text-white" />
                                    </div>
                                    <a href="mailto:mabounar@gmail.com" className="email-container font-mono cursor-pointer flex flex-col gap-0 text-[1rem] items-start">
                                        <span className="font-semibold">Email:</span>
                                        <span className="font-mono">mabounar77@gmail.com</span>
                                    </a>
                                </div>
                                <div className="phone flex md:gap-4 gap-2">
                                    <div className="icon min-w-[3em] h-[3em] bg-black flex justify-center items-center">
                                        <FaPhoneAlt size={24} className="text-white" />
                                    </div>
                                    <a href="tel:00201220204045" className="phone-container font-mono cursor-pointer flex flex-col gap-0 items-start  text-[1rem]  justify-center">
                                        <span className="font-semibold">Phone:</span>
                                        <span>002-01220204045</span>
                                    </a>
                                </div>
                            </div>
                            {/* </div> */}
                        </div>
                    </div>
                    <div className="contect-form w-full h-full">
                        <Formik
                            initialValues={{ name: "", email: "", phone: "", project: "", subject: "", massage: "" }}
                            onSubmit={(values) => console.log(values)}
                            validationSchema={validationSchema}>
                            <Form className="form-cntainer grid grid-cols-1 gap-3 py-[1em] w-full">
                                {/* <div className=""> */}
                                <FieldWrapper name={"name"} type={"text"} placeholder={"Your Name"} label={"Your Name:"} as={"input"} classNameInput={"cursor-text"} wrapperClass={"col-span-2"} />
                                <FieldWrapper name={"email"} type={"text"} placeholder={"Name"} label={"Your Email:"} as={"input"} classNameInput={"cursor-text"} wrapperClass={"col-span-2"} />
                                {/* <FieldWrapper name={"phone"} type={"text"} placeholder={"Name"} label={"Your Phone:"} as={"input"} classNameInput={"w-full"} /> */}
                                {/* <FieldWrapper name={"project"} type={"text"} placeholder={"Name"} label={"Your Project:"} as={"input"} classNameInput={"col-span-2 w-full"} /> */}
                                {/* <FieldWrapper name={"subject"} type={"text"} placeholder={"Name"} label={"Subject:"} as={"input"} wrapperClass={"col-span-2"} classNameInput={"w-full"} /> */}
                                <FieldWrapper
                                    name={"massage"}
                                    type={"text"}
                                    placeholder={"Message"}
                                    label={"Message:"}
                                    as={"textarea"}
                                    wrapperClass={"col-span-2 h-[8em]"}
                                    classNameInput={"w-full cursor-text"}
                                />
                                <button
                                    type="submit"
                                    className="bg-black col-span-2 text-white py-4 w-full hover:bg-white hover:text-black border border-black hover:border hover:border-black duration-300 cursor-pointer mb-[1em]">
                                    Send
                                </button>
                                {/* </div> */}
                            </Form>
                        </Formik>
                    </div>
                </div>
            </CustomContainerMain>
        </div>
    );
}
