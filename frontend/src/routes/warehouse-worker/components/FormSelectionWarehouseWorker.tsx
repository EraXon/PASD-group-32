import React from 'react';
import {FindDeliveryById, FindPackageById} from "../../scheduler/components";
import {WarehouseWorker} from "./WarehouseWorker";

interface FormSelectionProps {
    setForm: (form: JSX.Element) => void;
}

function FormSelectionWarehouseWorker({setForm}: FormSelectionProps): JSX.Element {
    const handleSelect = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        const value = event.currentTarget.value;
        let form = null;
        if (value === 'updateWW') {
            form = <WarehouseWorker/>;
        } else if (value === 'findDId') {
            form = <FindDeliveryById/>
        } else if (value === 'findPId') {
            form = <FindPackageById/>
        } else {
            return alert('Unknown form selected!');
        }
        setForm(form);
    }

    return (
        <div>
            <button onClick={(e) => handleSelect(e)} value="updateWW">Update Delivery</button>
            <button onClick={(e) => handleSelect(e)} value="findDId">Get Delivery By Id</button>
            <button onClick={(e) => handleSelect(e)} value="findPId">Get Package By Id</button>
        </div>
    );
}


export {
    FormSelectionWarehouseWorker
}