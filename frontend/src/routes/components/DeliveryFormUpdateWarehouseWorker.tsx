import {UpdateDeliveryFormProps} from "../../models";

function DeliveryFormUpdateWarehouseWorker({delivery, onSubmit} : UpdateDeliveryFormProps){
    return (
        <form onSubmit={onSubmit}>
            <h5><label htmlFor="id">Id of the delivery to be updated</label>
                <input defaultValue={delivery && delivery.id} type="text" name="id" id="id"  /></h5>
            <br/>
            <button type="submit">Update Delivery</button>
        </form>
    );
}

export {
    DeliveryFormUpdateWarehouseWorker
}