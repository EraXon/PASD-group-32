import { Document } from 'mongoose';

export interface Delivery extends Document {
  retailer_id: string;
  ddscheduler_id: string;
  dddeliverer_id: string;
  package_id: string;
  status:string;
}
