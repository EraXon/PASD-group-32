import { Inject, Injectable } from "@nestjs/common";
import axios from "axios";
import { Model } from "mongoose";
import { Create_DeliveryDto } from "src/delivery_logic/dto/create_delivery";
import { Delivery } from "src/delivery_logic/interfaces/delivery.interface";
import { Package } from "src/delivery_logic/interfaces/package.interface";

@Injectable()
export class schedulerService{

    constructor(@Inject('PACKAGE_MODEL') private readonly package_model: Model<Package>
    ,@Inject('DELIVERY_MODEL') private readonly delivery_model: Model<Delivery>){}

    async getAllPackages() {
        return await this.package_model.find()
    }
    
    async getAlldeliveries() {
        return await this.delivery_model.find()
    }

    
    async update(createDeliveryDto:Create_DeliveryDto)
    {
        
        
        let response=await this.delivery_model.updateOne(
            {order_id:createDeliveryDto.order_id},
            {expected_deliver_datetime:createDeliveryDto.expected_deliver_datetime,
            dddeliverer_id:createDeliveryDto.dddeliverer_id,
            status:createDeliveryDto.status
            })
        return response
    }
    
}