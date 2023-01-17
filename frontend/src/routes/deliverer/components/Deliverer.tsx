import React, { useContext, useState } from "react";
import {BackendContext} from "../../../BackendContext";
import {DeliveryModel} from "../../../models";
import {getFormValues} from "../../../utils/form";
import {DDApi} from "../../../api";
import {DeliveryFormUpdateDeliverer} from "../../components";


function Deliverer() : JSX.Element {
    const backend = useContext(BackendContext);
    const [res, setRes] = useState({} as DeliveryModel);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState('');

    async function handleSubmit (event: React.FormEvent<HTMLFormElement>) : Promise<void> {
        event.preventDefault();
        setLoading(true);
        const formData = new FormData(event.currentTarget);
        const body : DeliveryModel = getFormValues(formData);
        body.status = status;
        try {
            const data = await DDApi.updateDeliveryByIdDeliverer(backend, body.id, body);
            setRes(data);
        } catch (error : any) {
            let errorMessage = `Error while processing!\n`;
            let resMessage = error.response['error-message'];
            if (resMessage) {
                errorMessage += error.response['error-message'];
            }
            alert(errorMessage);
            console.error(error);
        }
        setLoading(false);
    }

    return (
        <div>
            <h3>Update Delivery - For Deliverer</h3>
            <DeliveryFormUpdateDeliverer setStatus={setStatus} onSubmit={handleSubmit} />
            {loading && <p>Loading...</p> }
        </div>
    );
}

export {
    Deliverer
}