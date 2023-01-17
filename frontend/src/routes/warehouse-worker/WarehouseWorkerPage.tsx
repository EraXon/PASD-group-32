import React, { useState } from 'react';
import {FindDeliveryById} from "../scheduler/components";
import {FormSelectionWarehouseWorker} from "./components";



function WarehouseWorkerPage() : JSX.Element {
    const [form, setForm] = useState(<FindDeliveryById />);
    return (
        <div>
            <FormSelectionWarehouseWorker setForm={setForm} />
            {form}
        </div>
    );
}

export {
    WarehouseWorkerPage
}