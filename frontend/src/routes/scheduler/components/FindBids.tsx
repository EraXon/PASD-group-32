import React, { useContext, useEffect, useState } from "react";
import {BackendContext} from "../../../BackendContext";
import {Deliveries} from "../../../models";
import {DDApi} from "../../../api";
import {DeliveryArray} from "./DeliveryArray";



function FindBids() : JSX.Element {
    const backend = useContext(BackendContext);
    const [results, setResults] = useState([] as Deliveries);
    const [loading, setLoading] = useState(false);

    async function retrieveBids () : Promise<void> {
        setLoading(true);
        try {
            let data = await DDApi.getBids(backend);
            setResults(data);
            setLoading(false);
        } catch (error : any) {
            let errorMessage = `Error while fetching the bids!\n`;
            let resMessage = error.data?.response['error-message'];
            if (resMessage) {
                errorMessage += error.data.response['error-message'];
            }
            alert(errorMessage);
            console.error(error);
            setLoading(false);
        }
    }


    useEffect(() => {
        retrieveBids();
    }, [backend])


    return (
        <div>
            <h3>Get Bids</h3>
            <DeliveryArray deliveries={results} loading={loading} />
        </div>
    );
}

export {
    FindBids
};