import {Info} from "./r-info.model";

interface PackageModel {
    sender_info: Info;
    receiver_info: Info;
    send_date: Date;
    x_in_mm: number;
    y_in_mm: number;
    z_in_mm: number;
    is_breakable: boolean;
    is_perishable: boolean;
    id: number;
}

type Packages = PackageModel[];

export type {
    PackageModel,
    Packages
}