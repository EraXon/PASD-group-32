import React, { useContext, useEffect, useState } from "react";
import {BackendContext} from "../../../BackendContext";
import {DeliveryModel, PaginationQuery} from "../../../models";
import {DDApi} from "../../../api";
import {Pagination} from "../../components";
import {DeliveryArray} from "./DeliveryArray";



function FindDeliveryForm() : JSX.Element {
    const backend = useContext(BackendContext);
    const [results, setResults] = useState([] as DeliveryModel[]);
    const [loading, setLoading] = useState(false);
    const [limit, setLimit] = useState(10);
    const [offset, setOffset] = useState(0);

    async function handleSubmit (event : React.FormEvent<HTMLFormElement>) : Promise<void> {
        event.preventDefault();
        await retrieveDeliveries();
    }

    async function retrieveDeliveries () : Promise<void> {
        setLoading(true);
        try {
            let data = await DDApi.getDeliveries(backend,{offset, limit} as PaginationQuery);
            setResults(data);
            setLoading(false);
        } catch (error : any) {
            let errorMessage = `Error while fetching deliveries!\n`;
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
        retrieveDeliveries();
    }, [backend, limit, offset])


    const paginationProps = {
        setOffset,
        setLimit,
        limit,
        offset
    }

    return (
        <div>
            <h3>Get Deliveries</h3>
            <form onSubmit={handleSubmit}>

                <Pagination {...paginationProps} />

                <button type="submit">Search</button>
            </form>

            <DeliveryArray deliveries={results} loading={loading} />
        </div>
    );
}

export {
    FindDeliveryForm
};