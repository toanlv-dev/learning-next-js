import {useEffect} from "react";

const Button = () => {
    useEffect(() => {
        console.log('After render')

        return () => {
            console.log('Will UnMount')
        }
    })

    return (
        <h1>Button</h1>
    )
}

export default Button