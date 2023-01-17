import React, { useState } from 'react';
import {FindDeliveryById} from "../scheduler/components";
import {FormSelectionDeliverer} from "./components";



function DelivererPage() : JSX.Element {
    const [form, setForm] = useState(<FindDeliveryById />);
    return (
        <div>
            <FormSelectionDeliverer setForm={setForm} />
            {form}
        </div>
    );
}

export {
    DelivererPage
}