import React from 'react';
import {Deliverer} from "./Deliverer";
import {FindDeliveryById, FindPackageById} from "../../scheduler/components";

interface FormSelectionProps {
    setForm: (form: JSX.Element) => void;
}

function FormSelectionDeliverer({setForm}: FormSelectionProps): JSX.Element {
    const handleSelect = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        const value = event.currentTarget.value;
        let form = null;
        if (value === 'updateD') {
            form = <Deliverer/>;
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
            <button onClick={(e) => handleSelect(e)} value="updateD">Update Delivery</button>
            <button onClick={(e) => handleSelect(e)} value="findDId">Get Delivery By Id</button>
            <button onClick={(e) => handleSelect(e)} value="findPId">Get Package By Id</button>
        </div>
    );
}


export {
    FormSelectionDeliverer
}