import React, { useContext, useState } from "react";
import {BackendContext} from "../../../BackendContext";
import {getFormValues} from "../../../utils/form";
import {DeliveryModel, UpdateResult} from "../../../models";
import {DDApi} from "../../../api";
import {FindByIdForm} from "../../components";

function FindDeliveryById() : JSX.Element {
    const backend = useContext(BackendContext);
    const [res, setRes] = useState({} as DeliveryModel);
    const [loading, setLoading] = useState(false);


    async function handleSubmit (event: React.FormEvent<HTMLFormElement>) : Promise<void> {
        event.preventDefault();
        setLoading(true);
        const formData = new FormData(event.currentTarget);
        const body : DeliveryModel = getFormValues(formData);
        try {
            const data = await DDApi.getDeliveryByID(backend, body.id);
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
            <h3>Find Delivery By ID</h3>
            <FindByIdForm onSubmit={handleSubmit} />
            {loading && <p>Loading...</p> }
            {
                res.order_id &&
                <>
                    <h3>Delivery details:</h3>
                    Id: {res.id}<br/>
                    Cost (in cents): {res.cost_in_cents}<br/>
                    Status: {res.status}<br/>
                    Order id: {res.order_id}<br/>
                    Retailer id: {res.retailer_id ? res.retailer_id : 'null'}<br/>
                    Scheduler id: {res.ddscheduler_id ? res.ddscheduler_id : 'null'}<br/>
                    Deliverer id: {res.dddeliverer_id ? res.dddeliverer_id : 'null'}<br/>
                    Expected time: {res.expected_deliver_datetime? res.expected_deliver_datetime.toString() : 'null'}<br/>
                    Actual time: {res.actual_deliver_datetime? res.actual_deliver_datetime.toString() : 'null'}<br/>
                    <hr/>
                </>
            }
        </div>
    );
}

export {
    FindDeliveryById
}