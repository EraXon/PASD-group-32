import { Module } from '@nestjs/common';
import { DeliveryLogicModule } from './delivery_logic/package.module';

@Module({
  imports: [DeliveryLogicModule],
})
export class AppModule {}
