import * as mongoose from 'mongoose';

export const DeliverySchema = new mongoose.Schema({
  retailer_id: String,
  ddscheduler_id: String,
  dddeliverer_id: String,
  package_id: String,
  status:String
});
