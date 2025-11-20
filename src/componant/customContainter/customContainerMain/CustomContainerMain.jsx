import clsx from "clsx";
import React from "react";

export default function CustomContainerMain({children,customClassMain}) {
    return <div className={clsx("container-main lg:px-18 px-10  ", customClassMain)}>{children}</div>;
}
