import React, {useContext, useState} from "react";
import {BackendContext} from "../../../BackendContext";
import {getFormValues} from "../../../utils/form";
import {DeliveryModel, PackageModel} from "../../../models";
import {DDApi} from "../../../api";
import {FindByIdForm} from "../../components";

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
                    <p>Id: {res.id}</p>
                    <p><b>Sender info:</b></p>
                    <ol>
                        <p>Name: {res.sender_info.name}</p>
                        <p>Street and number: {res.sender_info.street_and_number}</p>
                        <p>Zipcode: {res.sender_info.zipcode}</p>
                        <p>City: {res.sender_info.city}</p>
                        <p>Country: {res.sender_info.country}</p>
                    </ol>

                    <p><b>Receiver info:</b></p>
                    <ol>
                        <p>Name: {res.receiver_info.name}</p>
                        <p>Street and number: {res.receiver_info.street_and_number}</p>
                        <p>Zipcode: {res.receiver_info.zipcode}</p>
                        <p>City: {res.receiver_info.city}</p>
                        <p>Country: {res.receiver_info.country}</p>
                    </ol>

                    <p><b>Length (in mm):</b> {res.x_in_mm}</p>
                    <p><b>Height (in mm):</b> {res.y_in_mm}</p>
                    <p><b>Width (in mm):</b> {res.z_in_mm}</p>
                    <p><b>Breakable:</b> {res.is_breakable.toString()}</p>
                    <p><b>Perishable:</b> {res.is_perishable.toString()}</p>
                    <p><b>Send date:</b> {res.send_date ? res.send_date.toString() : 'null'}</p>
                    <hr/>
                </>
            }
        </div>
    );
}

export {
    FindPackageById
}