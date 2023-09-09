import {useRouteError} from "react-router";

const Error = () => {
    const err = useRouteError();
    console.log(err)
    return(
        <div>
            <h1>Error Code: {err.status}</h1>
            <h1>Error Text: {err.statusText}</h1>
        </div>
    )
}

export default Error;