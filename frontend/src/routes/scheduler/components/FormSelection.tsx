import React from 'react';
import {UpdateDeliveryForm} from "./UpdateDeliveryForm";
import {FindDeliveryForm} from "./FindDeliveryForm";
import {FindPackageForm} from "./FindPackageForm";
import {FindDeliveryById} from "./FindDeliveryById";
import {FindPackageById} from "./FindPackageById";
import {FindBids} from "./FindBids";

interface FormSelectionProps {
    setForm: (form: JSX.Element) => void;
}

function FormSelection({setForm}: FormSelectionProps): JSX.Element {
    const handleSelect = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        const value = event.currentTarget.value;
        let form = null;
        if (value === 'updateD') {
            form = <UpdateDeliveryForm/>;
        } else if (value === 'findD') {
            form = <FindDeliveryForm/>;
        } else if (value === 'findP') {
            form = <FindPackageForm/>
        } else if (value === 'findDId') {
            form = <FindDeliveryById/>
        } else if (value === 'findPId') {
            form = <FindPackageById/>
        } else if (value === 'findBids') {
            form =<FindBids/>
        } else {
            return alert('Unknown form selected!');
        }
        setForm(form);
    }

    return (
        <div>
            <button onClick={(e) => handleSelect(e)} value="updateD">Update Delivery</button>
            <button onClick={(e) => handleSelect(e)} value="findD">Get Deliveries</button>
            <button onClick={(e) => handleSelect(e)} value="findP">Get Packages</button>
            <button onClick={(e) => handleSelect(e)} value="findDId">Get Delivery By Id</button>
            <button onClick={(e) => handleSelect(e)} value="findPId">Get Package By Id</button>
            <button onClick={(e) => handleSelect(e)} value="findBids">Get Bids</button>
        </div>
    );
}


export {
    FormSelection
}