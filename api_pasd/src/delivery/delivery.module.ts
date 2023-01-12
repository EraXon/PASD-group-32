import { Module } from '@nestjs/common';
import { DeliverysController } from './delivery.controller';
import { DeliveryService } from './delivery.service';
import { deliverysProviders } from './delivery.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [DeliverysController],
  providers: [DeliveryService, ...deliverysProviders],
})
export class DeliveryModule {}
