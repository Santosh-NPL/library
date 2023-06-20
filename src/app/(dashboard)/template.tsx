import {ReactNode} from "react";

type Props = {
    children:ReactNode;
}

const Template = ({children}: Props) => {
    return(
        <>
            <h1>heading</h1>
            <main>{children}</main>
        </>
    )
}

export default Template;
