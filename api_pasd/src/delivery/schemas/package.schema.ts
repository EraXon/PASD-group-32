import * as mongoose from 'mongoose';

export const DeliverySchema = new mongoose.Schema({
    send_date: Date,
    x_in_mm: Number,
    y_in_mm: Number,
    z_in_mm: Number,
    is_breakable: Boolean,
    is_perishable: Boolean,
    sender_info: {
      name: String,
      street_and_number: String,
      zipcode: String,
      city: String,
      country: String
    },
    receiver_info: {
      name: String,
      street_and_number: String,
      zipcode: String,
      city: String,
      country: String
    },
    package_id: Number,
    id: Number,
    retailer_id: Number,
    vehicle_id: Number,
    warehouse_id: Number
});