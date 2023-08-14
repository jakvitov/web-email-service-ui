import {UseAlert} from "../atoms/AlertContext"

const AlertBar = () => {

    const {alert} = UseAlert();

    if (!alert){
        return null;
    }
    else {
        return <div class="errorBar">Error: {alert}</div>
    }
}

export default AlertBar