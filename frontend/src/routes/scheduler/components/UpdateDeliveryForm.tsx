import React, { useContext, useState } from "react";
import {BackendContext} from "../../../BackendContext";
import {getFormValues} from "../../../utils/form";
import {DeliveryModel, UpdateResult} from "../../../models";
import {DDApi} from "../../../api";
import {DeliveryFormUpdateScheduler} from "../../components/DeliveryFormUpdateScheduler";

function UpdateDeliveryForm() : JSX.Element {
    const backend = useContext(BackendContext);
    const [res, setRes] = useState({} as UpdateResult);
    const [loading, setLoading] = useState(false);


    async function handleSubmit (event: React.FormEvent<HTMLFormElement>) : Promise<void> {
        event.preventDefault();
        setLoading(true);
        const formData = new FormData(event.currentTarget);
        const body : DeliveryModel = getFormValues(formData);
        try {
            const data = await DDApi.updateDeliveryByIdScheduler(backend, body.order_id, body);
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
            <h3>Update Delivery - Scheduler</h3>
            <DeliveryFormUpdateScheduler onSubmit={handleSubmit} />
            {loading && <p>Loading...</p> }
            {
                res.matchedCount &&
                <>
                    <h3>Delivery updated successfully!</h3>
                </>
            }
        </div>
    );
}

export {
    UpdateDeliveryForm
}