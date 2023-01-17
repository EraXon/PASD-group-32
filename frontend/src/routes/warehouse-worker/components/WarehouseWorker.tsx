import React, { useContext, useState } from "react";
import {BackendContext} from "../../../BackendContext";
import {DeliveryModel} from "../../../models";
import {getFormValues} from "../../../utils/form";
import {DDApi} from "../../../api";
import {DeliveryFormUpdateWarehouseWorker} from "../../components";


function WarehouseWorker() : JSX.Element {
    const backend = useContext(BackendContext);
    const [res, setRes] = useState<Number>(500);
    const [loading, setLoading] = useState(false);


    async function handleSubmit (event: React.FormEvent<HTMLFormElement>) : Promise<void> {
        event.preventDefault();
        setLoading(true);
        const formData = new FormData(event.currentTarget);
        const body : DeliveryModel = getFormValues(formData);
        try {
            const data = await DDApi.updateDeliveryByIdWW(backend, body.id);
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
            <h3>Update Delivery - For Warehouse Worker</h3>
            <DeliveryFormUpdateWarehouseWorker onSubmit={handleSubmit} />
            {loading && <p>Loading...</p> }
            {res !== 500 && <p>Delivery updated successfully!</p>}
        </div>
    );
}

export {
    WarehouseWorker
}