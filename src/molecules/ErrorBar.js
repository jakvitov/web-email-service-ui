import {UseError} from "../atoms/ErrorContext"

const ErrorBar = () => {
    const {error}  = UseError();

    if (!error){
        return null;
    }
    return <div class="errorBar">Error: {error}</div>
}