import { Get, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import axios from 'axios';
import { Model } from 'mongoose';
import { DeliverysController } from 'src/delivery/delivery.controller';
import { deliverysProviders } from 'src/delivery/delivery.providers';
import { CreateDeliveryDto } from 'src/delivery/dto/create-delivery.dto';
import { CreateRetailer_OrderDto } from './dto/create-retailer_order';
import { Retailer_Order } from './interfaces/retailer_order.interface';



@Injectable()
export class Retailer_OrderService {
  constructor(@Inject('RETAILER_ORDER_MODEL') private readonly retailer_order_model: Model<Retailer_Order>) {}
  async findAll(){
    let url = 'https://pasd-webshop-api.onrender.com/api/order/';
    const config = {headers:{'x-api-key': '6FQeQLpd2LvnCRQpdxHf'}};
    const body={
      "price_in_cents": 1000,
      "expected_delivery_datetime": null,
      "order_id": null
    }
    body.expected_delivery_datetime=new Date(new Date().getTime() + 2880*60000)
    let order_retail:any

    try {
      order_retail =(await axios.get(url,config)).data
    } catch (error) {
      return "No available orders"
    }
    console.log(order_retail.orders.length)
    for(const order of order_retail.orders){
      
      this.bid(order, body);
      
    }  

    return null
  }
  async create(createRetailerDto: CreateRetailer_OrderDto){
    const createdDelivery = this.retailer_order_model.create(createRetailerDto);
    return createdDelivery;
  }

  private async bid(order : Retailer_Order, body) {
    let post_response:any
      try {
        body.order_id=order.id;
        const url='https://pasd-webshop-api.onrender.com/api/delivery/';
        const config = {headers:{'x-api-key': '6FQeQLpd2LvnCRQpdxHf'}};
        post_response =(await axios.post(url,body,config))
        console.log(post_response)
        if(post_response.status === 200 && post_response.status === "EXP"){
            let delivery = new CreateDeliveryDto;
            delivery.package_id = post_response.data.id;
            delivery.status = post_response.data.status;
            //TODO: how to add things to our database (package and delivery)
        } else if(post_response.status === 200) {
            
        }
      } catch (error) {
        console.log("na ca nu se paote")
      }
  }
}
