import { Mongoose } from 'mongoose';
import { Retailer_OrderSchema } from './schemas/retailer_order.schema';

export const retailer_orderProvider = [
  {
    provide: 'RETAILER_ORDER_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Retailer_Order', Retailer_OrderSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
