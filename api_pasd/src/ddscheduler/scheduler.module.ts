import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { deliveryProvider } from "src/delivery_logic/delivery.provider";
import { DeliveryLogicModule } from "src/delivery_logic/package.module";
import { packageProvider } from "src/delivery_logic/package.provider";
import { PackageService } from "src/delivery_logic/package.service";
import { schedulerController } from "./scheduler.controller";
import { schedulerService } from "./scheduler.service";

@Module({
    imports: [DeliveryLogicModule,DatabaseModule],
    controllers: [schedulerController],
    providers: [schedulerService,PackageService,... packageProvider,... deliveryProvider],
  })
  export class SchedulerModule {}