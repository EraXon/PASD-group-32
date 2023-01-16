import {UpdateDeliveryFormProps} from "../../models/update-props.model";

function DeliveryFormUpdateScheduler({delivery, onSubmit} : UpdateDeliveryFormProps){
    return (
        <form onSubmit={onSubmit}>
            <h5><label htmlFor="id">Id of the order to be updated</label>
            <input defaultValue={delivery && delivery.order_id} type="text" name="order_id" id="order_id"  /></h5>
            <br/>
            <label htmlFor="status">Status</label>
            <input defaultValue={delivery && delivery.status} type="text" name="status" id="status"  />
            <br/>
            <label htmlFor="deliverer_id">Deliverer id</label>
            <input defaultValue={delivery && delivery.dddeliverer_id} type="text" name="deliverer_id" id="deliverer_id"  />
            <br/>
            <label htmlFor="expected">Expected date (mm/dd/yyyy hh:mm)</label>
            <input defaultValue={delivery && delivery.expected_deliver_datetime.toString()} type="text" name="expected" id="expected"  />
            <br/>
            <button type="submit">Update Delivery</button>
        </form>
    );
}

export {
    DeliveryFormUpdateScheduler
}