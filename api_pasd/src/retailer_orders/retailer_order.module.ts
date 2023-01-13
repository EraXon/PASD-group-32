import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { Retailer_OrderController } from './retailer_order.controller';
import { retailer_orderProvider } from './retailer_order.providers';
import { Retailer_OrderService } from './retailer_order.service';

@Module({
  imports: [DatabaseModule],
  controllers: [Retailer_OrderController],
  providers: [Retailer_OrderService, ...retailer_orderProvider],
})
export class Retailer_OrderModule {}