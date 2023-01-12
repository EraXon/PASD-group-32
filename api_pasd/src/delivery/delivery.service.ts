import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { Delivery } from './interfaces/delivery.interface';

@Injectable()
export class DeliveryService {
  constructor(@Inject('DELIVERY_MODEL') private readonly deliveryModel: Model<Delivery>) {}

  async create(createDeliveryDto: CreateDeliveryDto): Promise<Delivery> {
    const createdDelivery = this.deliveryModel.create(createDeliveryDto);
    return createdDelivery;
  }

  async findAll(): Promise<Delivery[]> {
    return this.deliveryModel.find();
  }
}
