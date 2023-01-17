import {UpdateDeliveryFormProps} from "../../models/update-props.model";

function DeliveryFormUpdateDeliverer({delivery, onSubmit} : UpdateDeliveryFormProps){
    return (
        <form onSubmit={onSubmit}>
            <h5><label htmlFor="id">Id of the order to be updated</label>
                <input defaultValue={delivery && delivery.id} type="text" name="id" id="id"  /></h5>
            <br/>
            <label htmlFor="status">Status</label>
            <input defaultValue={delivery && delivery.status} type="text" name="status" id="status"  />
            <br/>
            <label htmlFor="expected">Actual date (mm/dd/yyyy hh:mm)</label>
            <input defaultValue={delivery && delivery.actual_deliver_datetime.toString()} type="text" name="actual" id="actual"  />
            <br/>
            <button type="submit">Update Delivery</button>
        </form>
    );
}

export {
    DeliveryFormUpdateDeliverer
}