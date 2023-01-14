import { Mongoose } from 'mongoose';
import { Retailer_DeliverySchema } from './schemas/retailer_delivery.schema';

export const retailer_deliveryProvider = [
  {
    provide: 'RETAILER_DELIVERY_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Retailer_Delivery', Retailer_DeliverySchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
