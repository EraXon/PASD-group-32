import {DeliveryModel} from "./delivery.model";
import {FormEventHandler} from "react";

interface UpdateDeliveryFormProps {
    delivery ? : DeliveryModel,
    onSubmit: FormEventHandler<HTMLFormElement>
}

export type {
    UpdateDeliveryFormProps
}