import {useError} from "../atoms/ErrorContext"

const ErrorBar = () => {

    const {error} = useError();

    if (!error){
        return null;
    }
    else {
        return <div class="errorBar">Error: {error}</div>
    }
}

export default ErrorBar