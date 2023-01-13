import { Get, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import axios from 'axios';
import { Model } from 'mongoose';
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
    url='https://pasd-webshop-api.onrender.com/api/delivery/'
    for(const order of order_retail.orders){
      
      let post_response:any
      try {
        body.order_id=order.id
        post_response =(await axios.post(url,body,config)).data
        console.log(post_response)
      } catch (error) {
        console.log("na ca nu se paote")
      }
      
    }
    
    

    return null
  }
  async create(createRetailerDto: CreateRetailer_OrderDto){
    const createdDelivery = this.retailer_order_model.create(createRetailerDto);
    return createdDelivery;
  }
}
