import {DeliveryModel} from "../../models";

function DeliveryComponent(delivery: DeliveryModel): JSX.Element {
    return (
        <div>
            <p><b>Id:</b> {delivery.id}</p>
            <p><b>Cost (in cents):</b> {delivery.cost_in_cents}</p>
            <p><b>Status:</b> {delivery.status ? delivery.status : 'null'}</p>
            <p><b>Order id:</b> {delivery.order_id}</p>
            <p><b>Deliverer id:</b> {delivery.dddeliverer_id ? delivery.dddeliverer_id : 'null'}</p>
            <p><b>Expected time:</b> {delivery.expected_deliver_datetime ? delivery.expected_deliver_datetime.toString() : 'null'}</p>
            <p><b>Actual time:</b> {delivery.actual_deliver_datetime ? delivery.actual_deliver_datetime.toString() : 'null'}</p>
            <hr/>
        </div>
    );
}

export {
    DeliveryComponent
}