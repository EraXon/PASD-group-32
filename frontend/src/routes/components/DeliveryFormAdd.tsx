import { FormEventHandler } from "react";
import { DeliveryModel } from "../../models"

interface UpdateDeliveryFormProps {
    delivery ? : DeliveryModel,
    onSubmit: FormEventHandler<HTMLFormElement>
}


function DeliveryFormAdd({delivery, onSubmit} : UpdateDeliveryFormProps){
    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="id">Id</label>
            <input defaultValue={delivery && delivery.id} type="number" name="id" id="id"  />
            <br/>
            <label htmlFor="cost">Cost (in cents)</label>
            <input defaultValue={delivery && delivery.cost_in_cents} type="number" name="cost" id="cost" step="any"/>
            <br/>
            <label htmlFor="status">Status</label>
            <input defaultValue={delivery && delivery.status} type="text" name="status" id="status"  />
            <br/>
            <label htmlFor="order_id">Order id</label>
            <input defaultValue={delivery && delivery.order_id} type="number" name="order_id" id="order_id"/>
            <br/>
            <label htmlFor="retailer_id">Retailer id</label>
            <input defaultValue={delivery && delivery.order_id} type="text" name="retailer_id" id="retailer_id"/>
            <br/>
            <label htmlFor="scheduler_id">Scheduler id</label>
            <input defaultValue={delivery && delivery.ddscheduler_id} type="text" name="scheduler_id" id="scheduler_id"  />
            <br/>
            <label htmlFor="deliverer_id">Deliverer id</label>
            <input defaultValue={delivery && delivery.dddeliverer_id} type="text" name="deliverer_id" id="deliverer_id"  />
            <br/>
            <label htmlFor="expected">Expected date (mm/dd/yyyy)</label>
            <input defaultValue={delivery && delivery.expected_deliver_datetime.toString()} type="text" name="expected" id="expected"  />
            <br/>
            <label htmlFor="actual">Actual date (mm/dd/yyyy)</label>
            <input defaultValue={delivery && delivery.actual_deliver_datetime.toString()} type="text" name="actual" id="actual"  />
            <br/>
            <button type="submit">Update Delivery</button>
        </form>
    );
}

export {
    DeliveryFormAdd
}