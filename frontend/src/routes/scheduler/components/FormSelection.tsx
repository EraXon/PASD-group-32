import React from 'react';
import {UpdateDeliveryForm} from "./UpdateDeliveryForm";
import {FindDeliveryForm} from "./FindDeliveryForm";
import {FindPackageForm} from "./FindPackageForm";

interface FormSelectionProps {
    setForm: (form: JSX.Element) => void;
}

function FormSelection({ setForm } : FormSelectionProps) : JSX.Element {
    const handleSelect = (event : React.MouseEvent<HTMLButtonElement, MouseEvent>) : void => {
        const value = event.currentTarget.value;
        let form = null;
        if (value === 'updateD') {
            form = <UpdateDeliveryForm />;
        }
        else if (value === 'findD') {
            form = <FindDeliveryForm />;
        }
        else if (value === 'findP') {
            form = <FindPackageForm />
        }
        else {
            return alert('Unknown form selected!');
        }
        setForm(form);
    }

    return (
        <div>
            <button onClick={(e) => handleSelect(e)} value="updateD">Update Delivery</button>
            <button onClick={(e) => handleSelect(e)} value="findD">Get Deliveries</button>
            <button onClick={(e) => handleSelect(e)} value="findP">Get Packages</button>
        </div>
    );
}


export {
    FormSelection
}