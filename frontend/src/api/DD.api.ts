import axios from 'axios';
import {DeliveryModel, UpdateResult, Deliveries, Packages, PackageModel} from "../models";

export class DDApi {
    public static async updateDeliveryByIdScheduler(backend: string, id: number, delivery: DeliveryModel): Promise<UpdateResult> {
        const response = await axios.post(`${backend}/ddscheduler`, delivery);
        return response.data;
    }

    public static async updateDeliveryByIdDeliverer(backend: string, id: number, delivery: DeliveryModel): Promise<DeliveryModel> {
        const response = await axios.patch(`${backend}/dddeliverer/${id}`, delivery);
        return response.data;
    }

    public static async updateDeliveryByIdWW(backend: string, id: number) {
        const response = await axios.post(`${backend}/warehouse-worker/upload/${id}`, null);
        return response.status;
    }

    public static async addDelivery(backend: string, delivery: DeliveryModel) : Promise<number> {
        const response = await axios.post(`${backend}/ddscheduler`, delivery);
        return response.data;
    }

   public static async getDeliveries(backend: string) : Promise<Deliveries> {
        const response = await axios.get(`${backend}/ddscheduler/deliveries`);
        return response.data;
    }

    public static async getPackages(backend: string): Promise<Packages> {
        const response = await axios.get(`${backend}/ddscheduler/packages`);
        return response.data;
    }

    public static async getDeliveryByID(backend: string, id: number): Promise<DeliveryModel> {
        const response = await axios.get(`${backend}/orders/delivery/${id}`);
        return response.data;
    }

    public static async getPackageByID(backend: string, id: number): Promise<PackageModel> {
        const response = await axios.get(`${backend}/orders/package/${id}`);
        return response.data;
    }

    public static async getBids(backend: string): Promise<Deliveries> {
        const response = await axios.get(`${backend}/orders/successful-bids`);
        return response.data;
    }
}