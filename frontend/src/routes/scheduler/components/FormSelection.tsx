import React from 'react';
import {UpdateDeliveryForm} from "./UpdateDeliveryForm";
import {FindDeliveryForm} from "./FindDeliveryForm";

interface FormSelectionProps {
    setForm: (form: JSX.Element) => void;
}

function FormSelection({ setForm } : FormSelectionProps) : JSX.Element {
    const handleSelect = (event : React.MouseEvent<HTMLButtonElement, MouseEvent>) : void => {
        const value = event.currentTarget.value;
        let form = null;
        if (value === 'update') {
            form = <UpdateDeliveryForm />;
        }
        else if (value === 'find') {
            form = <FindDeliveryForm />;
        }
        else {
            return alert('Unknown form selected!');
        }
        setForm(form);
    }

    return (
        <div>
            <button onClick={(e) => handleSelect(e)} value="update">Update Delivery</button>
            <button onClick={(e) => handleSelect(e)} value="find">Get Deliveries</button>
        </div>
    );
}


export {
    FormSelection
}