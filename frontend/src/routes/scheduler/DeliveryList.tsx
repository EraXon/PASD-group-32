import React, { useState } from 'react';
import {FindDeliveryForm, FormSelection} from './components';


function DeliveryList() : JSX.Element {
    const [form, setForm] = useState(<FindDeliveryForm />);

    return (
        <div>
            <FormSelection setForm={setForm} />
            {form}
        </div>
    );
}

export {
    DeliveryList
}