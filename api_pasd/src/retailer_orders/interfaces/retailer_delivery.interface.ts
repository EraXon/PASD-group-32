import { Document } from 'mongoose';

export interface Retailer_Delivery extends Document {
    expected_deliver_datetime: Date;
    actual_deliver_datetime: Date;
    order_id: number;
    cost_in_cents: number;
    status: string;
    id: number;
}