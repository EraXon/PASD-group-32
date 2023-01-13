import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { Delivery } from './interfaces/delivery.interface';
import axios from 'axios';
@Injectable()
export class DeliveryService {
  constructor(@Inject('DELIVERY_MODEL') private readonly deliveryModel: Model<Delivery>) {}

  async create(createDeliveryDto: CreateDeliveryDto): Promise<Delivery> {
    const createdDelivery = this.deliveryModel.create(createDeliveryDto);
    return createdDelivery;
  }

  async findAll() {
    const url = 'https://pasd-webshop-api.onrender.com/api/order/';
    const config = {headers:{'x-api-key': '6FQeQLpd2LvnCRQpdxHf'}};
    let data =(await axios.get(url,config)).data
    return data.orders[0].id;
  }
}
