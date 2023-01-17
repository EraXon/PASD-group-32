import {DeliveryModel} from "../../../models";

interface DeliveryComponentProps {
    data?: DeliveryModel;
    loading: boolean
}

const DeliveryComponent = ({data,loading}: DeliveryComponentProps) => {
    function formDelivery(): JSX.Element {
        if (!data) {
            return <h1>No delivery found!</h1>;
        }
        return <div>
            Id: {data.id}<br/>
            Cost (in cents): {data.cost_in_cents}<br/>
            Status: {data.status}<br/>
            Order id: {data.order_id}<br/>
            Retailer id: {data.retailer_id ? data.retailer_id : 'null'}<br/>
            Scheduler id: {data.ddscheduler_id ? data.ddscheduler_id : 'null'}<br/>
            Deliverer id: {data.dddeliverer_id ? data.dddeliverer_id : 'null'}<br/>
            Expected time: {data.expected_deliver_datetime? data.expected_deliver_datetime.toString() : 'null'}<br/>
            Actual time: {data.actual_deliver_datetime? data.actual_deliver_datetime.toString() : 'null'}<br/>
        </div>
    }

    return (
        <div>
            {loading ? <p>Loading...</p> : formDelivery()}
        </div>
    )
}

export default DeliveryComponent