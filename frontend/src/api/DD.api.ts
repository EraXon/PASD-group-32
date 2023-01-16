import axios from 'axios';
import {PaginationQuery, DeliveryModel, UpdateResult} from "../models";
import {constructUrl} from "../utils/url";

export class DDApi {
    public static async updateDeliveryByIdScheduler(backend: string, id: number, delivery: DeliveryModel): Promise<UpdateResult> {
        const response = await axios.post(`${backend}/ddscheduler`, delivery);
        return response.data;
    }

    public static async updateDeliveryByIdDeliverer(backend: string, id: number, delivery: DeliveryModel): Promise<DeliveryModel> {
        const response = await axios.patch(`${backend}/dddscheduler/${id}`, delivery);
        return response.data;
    }

    public static async updateDeliveryByIdWW(backend: string, id: number) {
        const response = await axios.get(`${backend}/warehouse-worker/upload/${id}`);
        return response.data;
    }

    public static async addDelivery(backend: string, delivery: DeliveryModel) : Promise<number> {
        const response = await axios.post(`${backend}/ddscheduler`, delivery);
        return response.data;
    }

   public static async getDeliveries(backend: string, props: PaginationQuery) : Promise<DeliveryModel[]> {
        /*backend += `/ddscheduler`;
        const url = constructUrl(backend, props);*/
        const response = await axios.get(`${backend}/ddscheduler/deliveries`);
        return response.data;
    }

}