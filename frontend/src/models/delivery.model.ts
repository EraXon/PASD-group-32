interface DeliveryModel {
    expected_deliver_datetime: Date;
    actual_deliver_datetime: Date;
    order_id: number;
    cost_in_cents: number;
    status: string;
    retailer_id?: string;
    ddscheduler_id: string;
    dddeliverer_id: string;
    id:number
}

type Deliveries = DeliveryModel[];

interface SetDeliveries {
    setDeliveries: (deliveries: Deliveries) => void;
}

export type {
    DeliveryModel,
    Deliveries,
    SetDeliveries
}