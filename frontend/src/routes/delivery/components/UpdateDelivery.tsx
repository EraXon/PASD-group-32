import React, { useContext, useState } from "react";
import {DeliveryModel} from "../../../models";
import {DDApi} from "../../../api";
import {BackendContext} from "../../../BackendContext";
import {getFormValues} from "../../../utils/form";
import {DeliveryFormAdd} from "../../components";
import DeliveryComponent from "./DeliveryComponent";

interface UpdateDeliveryProps {
    delivery?: DeliveryModel,
    id?: string,
    loading: boolean,
}

function UpdateDelivery({delivery, id, loading} : UpdateDeliveryProps) {
    const backend = useContext(BackendContext);
    const [formDisabled, setFormDisabled] = useState(true);

    async function handleSubmit (event : React.FormEvent<HTMLFormElement>) : Promise<void>{
        event.preventDefault();
        if (!id || !delivery) {
            return;
        }

        const form = event.currentTarget;
        const formData = new FormData(form);
        const body : DeliveryModel = getFormValues(formData);

        try {
            //const response = await DDApi.updateDeliveryById(backend, id, body);
        } catch (error) {
            alert('Error while updating');
            console.error(error);
        }
    }

    return (
        <div>
            {formDisabled ?
                <>
                    <DeliveryComponent data={delivery} loading={loading} />
                    <button onClick={() => setFormDisabled(false)}>Edit delivery</button>
                </>
                :
                <>
                    <DeliveryFormAdd delivery={delivery} onSubmit={handleSubmit} />
                    <button onClick={() => setFormDisabled(true)}>Cancel</button>
                </>
            }
        </div>
    );
}

export {
    UpdateDelivery
}