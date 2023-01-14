import * as mongoose from 'mongoose';

export const Retailer_DeliverySchema = new mongoose.Schema({
    expected_deliver_datetime: Date,
    actual_deliver_datetime: Date,
    order_id: Number,
    cost_in_cents: Number,
    status: String,
    id: Number
});
