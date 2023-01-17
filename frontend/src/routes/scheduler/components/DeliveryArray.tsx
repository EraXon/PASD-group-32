import {Deliveries, DeliveryModel} from '../../../models';
import {DeliveryComponent} from "../../components";

interface Loading {
    loading : boolean
}

interface DeliveryResults {
    deliveries : Deliveries
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
                                <DeliveryComponent {...delivery}/>
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
