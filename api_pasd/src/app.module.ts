import { Module } from '@nestjs/common';
import { DeliveryModule } from './delivery/delivery.module';
import { PackageModule } from './retailer_orders/package.module';

@Module({
  imports: [DeliveryModule,PackageModule],
})
export class AppModule {}
