import { Controller, Get, Post, Body, Delete, Param, Query } from '@nestjs/common';
import { CreateRetailer_OrderDto } from './dto/create-retailer_order';
import { CreateRetailer_DeliveryDto } from './dto/create_retailer_delivery';
import { Retailer_OrderService } from './retailer_order.service';

@Controller('orders')
export class Retailer_OrderController {
    constructor(private readonly Retailer_OrderService: Retailer_OrderService){}
    
    @Get()
    async findAll()
    {
        
        return this.Retailer_OrderService.findAll();
    }

    @Post()
    async create(@Body() createRetailerDto: CreateRetailer_DeliveryDto) {
      return await this.Retailer_OrderService.create(createRetailerDto)
    }

}
