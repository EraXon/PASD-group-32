import { Module } from '@nestjs/common';
import { SchedulerModule } from './ddscheduler/scheduler.module';
import { DeliveryLogicModule } from './delivery_logic/package.module';

@Module({
  imports: [DeliveryLogicModule,SchedulerModule],
})
export class AppModule {}
