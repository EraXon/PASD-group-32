import React, {ChangeEvent, FormEventHandler} from "react";
import {DeliveryModel} from "../../models";

interface UpdateDeliveryFormPropsDeliverer {
    delivery ? : DeliveryModel,
    onSubmit: FormEventHandler<HTMLFormElement>,
    setStatus: React.Dispatch<React.SetStateAction<string>>;
}

function DeliveryFormUpdateDeliverer({delivery, onSubmit, setStatus} : UpdateDeliveryFormPropsDeliverer){
    function handleResultsChange(event : ChangeEvent<HTMLSelectElement>) : void {
        const newValue: string = event.target.value;
        setStatus(newValue);
    }

    return (
        <form onSubmit={onSubmit}>
            <h5><label htmlFor="id">Id of the order to be updated</label>
                <input defaultValue={delivery && delivery.id} type="text" name="id" id="id"  /></h5>
            <br/>
            <label htmlFor="status">Status</label>
            <select id="results" name="results" onChange={handleResultsChange}>
                <option value="TRN">Transit</option>
                <option value="DEL">Delivered</option>
            </select>
            <br/>
            <button type="submit">Update Delivery</button>
        </form>
    );
}

export {
    DeliveryFormUpdateDeliverer
}