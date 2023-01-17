import {UpdateDeliveryFormProps} from "../../models/update-props.model";

function FindByIdForm({delivery, onSubmit} : UpdateDeliveryFormProps){
    return (
        <form onSubmit={onSubmit}>
            <h5><label htmlFor="id">Id to be searched</label>
                <input defaultValue={delivery && delivery.order_id} type="text" name="id" id="id"  /></h5>
            <br/>
            <button type="submit">Find</button>
        </form>
    );
}

export {
    FindByIdForm
}