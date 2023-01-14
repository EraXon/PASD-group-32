import { Get, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import axios from 'axios';
import { Model } from 'mongoose';
import { DeliverysController } from 'src/delivery/delivery.controller';
import { deliverysProviders } from 'src/delivery/delivery.providers';
import { CreateDeliveryDto } from 'src/delivery/dto/create-delivery.dto';
import { CreateRetailer_OrderDto } from './dto/create-retailer_order';
import { CreateRetailer_DeliveryDto } from './dto/create_retailer_delivery';
import { Retailer_Delivery } from './interfaces/retailer_delivery.interface';
import { Retailer_Order } from './interfaces/retailer_order.interface';



@Injectable()
export class Retailer_OrderService {
  constructor(@Inject('RETAILER_ORDER_MODEL') private readonly retailer_order_model: Model<Retailer_Order>
  ,@Inject('RETAILER_DELIVERY_MODEL') private readonly retailer_delivery_model: Model<Retailer_Delivery>) {}
  
  
  async findAll(){
    //various constants and variables needed
    let url = 'https://pasd-webshop-api.onrender.com/api/order/';
    const config = {headers:{'x-api-key': '6FQeQLpd2LvnCRQpdxHf'}};
    let body={
      "price_in_cents": 0,
      "expected_delivery_datetime": null,
      "order_id": null
    }
    body.expected_delivery_datetime=new Date(new Date().getTime())
    let order_retail:any
  
    //get all available orders
    try {
      order_retail =(await axios.get(url,config)).data
    } catch (error) {
      return "No available orders"
    }
    url='https://pasd-webshop-api.onrender.com/api/delivery/'
    console.log(order_retail.orders.length)
    

    //post on every available order
    for(const order of order_retail.orders){
      let post_response:any
      try {
        body.order_id=order.id
        post_response =(await axios.post(url,body,config)).data
        if(post_response.status=='EXP'){
          await this.startCreateProcess(order,post_response)
          
        }
      } catch (error) {
        console.log("Retailer did not accept any of our offers")
      }
  
      
    }  

    return null
  }
  async create(createRetailerDto: CreateRetailer_DeliveryDto){
    
    const createdDelivery = await this.retailer_delivery_model.create(createRetailerDto);
    console.log(createdDelivery)
    return createdDelivery;
  }

   async startCreateProcess(order:CreateRetailer_OrderDto,delivery:CreateRetailer_DeliveryDto) {
    console.log(delivery)
    const response1=await this.retailer_delivery_model.create(delivery)
    const response=await this.retailer_order_model.create(order)
    //console.log(response1)
    return null
    
  }

}


