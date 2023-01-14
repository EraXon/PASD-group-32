import { Document } from 'mongoose';

export interface Package extends Document {
    send_date: Date
    x_in_mm: number
    y_in_mm: number
    z_in_mm: number
    is_breakable: boolean
    is_perishable: boolean
    sender_info: {
      name: string,
      street_and_number: string,
      zipcode: string,
      city: string,
      country: string
    }
    receiver_info: {
      name: string,
      street_and_number: string,
      zipcode: string,
      city: string,
      country: string
    }
    package_id: number;
    id: number;
    retailer_id: number;
    vehicle_id: number;
    warehouse_id: number;
}