import { Inject, Injectable } from '@nestjs/common';
import axios from 'axios';
import { Model } from 'mongoose';
import { Delivery } from 'src/delivery_logic/interfaces/delivery.interface';
import { Package } from 'src/delivery_logic/interfaces/package.interface';

@Injectable()
export class DddelivererService {
    constructor(@Inject('PACKAGE_MODEL') private readonly package_model: Model<Package>
    ,@Inject('DELIVERY_MODEL') private readonly delivery_model: Model<Delivery>){}
    
    
    
    async patchDelivery(toPatch,id) {
        let body:any
        body={}
        if(toPatch.status=="DEL"){
            body.status="DEL";
            body.actual_deliver_datetime=new Date()
            await this.delivery_model.updateOne({id:id},{actual_deliver_datetime:body.actual_deliver_datetime})
            await this.delivery_model.updateOne({id:id},{status:"DEL"})
        }
        else{
            body.status="TRN"
            await this.delivery_model.updateOne({id:id},{status:"TRN"})
        }
        
        let url="https://pasd-webshop-api.onrender.com/api/delivery/"+<String>id
        const config = {headers:{'x-api-key': '6FQeQLpd2LvnCRQpdxHf'}};
        console.log(body)
        console.log(url)
        let response=await axios.patch(url,body,config)
        return  response.status;
    }

}
