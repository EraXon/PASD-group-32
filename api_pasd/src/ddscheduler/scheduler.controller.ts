import { Body, Controller, Get, Post } from "@nestjs/common";
import { Create_DeliveryDto } from "src/delivery_logic/dto/create_delivery";
import { schedulerService } from "./scheduler.service";

@Controller('ddscheduler')
export class schedulerController{
    constructor(private readonly schedulerService:schedulerService){}
   
    @Get('deliveries')
    deliveresToBeHandled(){
        return this.schedulerService.getAlldeliveries();
    }
    @Get('packages')
    retrievePackages(){
        return this.schedulerService.getAllPackages();
    }
    @Post()
    updatedelievries(@Body() createTrackDto: Create_DeliveryDto){
       return this.schedulerService.update(createTrackDto) 
    }
}