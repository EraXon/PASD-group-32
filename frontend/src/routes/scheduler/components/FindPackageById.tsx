import React, {useContext, useState} from "react";
import {BackendContext} from "../../../BackendContext";
import {getFormValues} from "../../../utils/form";
import {DeliveryModel, PackageModel} from "../../../models";
import {DDApi} from "../../../api";
import {FindByIdForm, PackageComponent} from "../../components";

function FindPackageById(): JSX.Element {
    const backend = useContext(BackendContext);
    const [res, setRes] = useState({} as PackageModel);
    const [loading, setLoading] = useState(false);


    async function handleSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();
        setLoading(true);
        const formData = new FormData(event.currentTarget);
        const body: DeliveryModel = getFormValues(formData);
        try {
            const data = await DDApi.getPackageByID(backend, body.id);
            setRes(data);
        } catch (error: any) {
            let errorMessage = `Error while processing!\n`;
            let resMessage = error.response['error-message'];
            if (resMessage) {
                errorMessage += error.response['error-message'];
            }
            alert(errorMessage);
            console.error(error);
        }
        setLoading(false);
    }

    return (
        <div>
            <h3>Find Package By ID</h3>
            <FindByIdForm onSubmit={handleSubmit}/>
            {loading && <p>Loading...</p>}
            {
                res.x_in_mm &&
                <>
                    <h3>Package details:</h3>
                    <PackageComponent {...res} />
                </>
            }
        </div>
    );
}

export {
    FindPackageById
}