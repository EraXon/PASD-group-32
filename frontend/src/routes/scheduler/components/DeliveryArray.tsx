import {DeliveryModel} from '../../../models';

interface Loading {
    loading : boolean
}

interface DeliveryResults {
    deliveries : DeliveryModel[]
}

type DeliveryResultsProps = DeliveryResults  & Loading;


function DeliveryArray({deliveries, loading}: DeliveryResultsProps) : JSX.Element {
    return (
        <div>
            {loading ? <p>Loading...</p> : (
                deliveries.length === 0 ? <p>No results</p> :
                    <ul>
                        {deliveries.map((delivery : DeliveryModel) => (
                            <li key={delivery.id}>
                                <p>Cost (in cents): {delivery.cost_in_cents}</p>
                                <p>Status: {delivery.status}</p>
                                <p>Order id: {delivery.order_id}</p>
                                <p>Retailer id: {delivery.retailer_id ? delivery.retailer_id : 'null'}</p>
                                <p>Scheduler id: {delivery.ddscheduler_id ? delivery.ddscheduler_id : 'null'}</p>
                                <p>Deliverer id: {delivery.dddeliverer_id ? delivery.dddeliverer_id : 'null'}</p>
                                <p>Expected time: {delivery.expected_deliver_datetime ? delivery.expected_deliver_datetime.toString() : 'null'}</p>
                                <p>Actual time: {delivery.actual_deliver_datetime ? delivery.actual_deliver_datetime.toString() : 'null'}</p>
                                <hr />
                            </li>
                        ))}
                    </ul>
            )}
        </div>
    );
}

export {
    DeliveryArray
};
