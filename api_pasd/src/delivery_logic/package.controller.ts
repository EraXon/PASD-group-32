import { Controller, Get, Post, Body, Delete, Param, Query } from '@nestjs/common';
import { Create_PackageDto } from './dto/create_package';
import { Create_DeliveryDto } from './dto/create_delivery';
import { PackageService } from './package.service';

@Controller('orders')
export class PackageController {
    constructor(private readonly PackageService: PackageService){}
    
    @Get('successful-bids')
    async getAllSuccessfulBids()
    {
        return this.PackageService.getAllSuccefulBids();
    }

    @Post()
    async create(@Body() createDeliveryDto: Create_DeliveryDto) {
      return await this.PackageService.create(createDeliveryDto)
    }

    @Get('delivery/:id')
    async getDelivery(
     @Param('id')id,)
    {
      return await this.PackageService.getDelivery(id);
    }

    @Get('package/:id')
    async getPackage(
     @Param('id')id,)
    {
      return await this.PackageService.getPackage(id);
    }

}
