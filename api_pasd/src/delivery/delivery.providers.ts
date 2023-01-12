import { Mongoose } from 'mongoose';
import { DeliverySchema } from './schemas/delivery.schema';

export const deliverysProviders = [
  {
    provide: 'DELIVERY_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Delivery', DeliverySchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
