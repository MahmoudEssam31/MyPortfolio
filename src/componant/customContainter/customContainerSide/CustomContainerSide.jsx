import clsx from "clsx";
import React, { Children } from "react";

export default function CustomContainerSide({ children,customClass }) {
    return <div className={clsx("container-side lg:ps-18 lg:pe-8 ps-8 pe-8", customClass)}>{children}</div>;
}
