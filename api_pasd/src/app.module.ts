import { Module } from '@nestjs/common';
import { DeliveryModule } from './delivery/delivery.module';
import { Retailer_OrderModule } from './retailer_orders/retailer_order.module';

@Module({
  imports: [DeliveryModule,Retailer_OrderModule],
})
export class AppModule {}
