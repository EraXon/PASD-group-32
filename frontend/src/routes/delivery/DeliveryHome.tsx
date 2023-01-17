import React, {useContext, useEffect, useState} from 'react';
import {DeliveryModel} from "../../models";
import {useParams} from "react-router-dom";
import {BackendContext} from "../../BackendContext";
import {DeleteDelivery, UpdateDelivery} from "./components";

type PathVariables = {
    id: string;
}

function DeliveryHome() {
    const backend = useContext(BackendContext);
    const { id } = useParams<PathVariables>();
    const idValue = parseInt(id!);
    const [delivery, setDelivery] = useState<DeliveryModel>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getDelivery();
    }, [backend]);

    async function getDelivery() {
        if (idValue < 0) {
            alert('No id was provided')
            return;
        }
        setLoading(true);
        try {
            //const data = await DDApi.getDeliveryByIdWW(backend,id!);
            //setDelivery(data);
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    }

    return (
        <div>
            {
                delivery ?
                    <>
                        <UpdateDelivery delivery={delivery} id={id} loading={loading}/>
                        <DeleteDelivery id={id} />
                    </>
                    :
                    loading ? <p>Loading...</p> : <p>Delivery not found</p>
            }
        </div>
    )
}

export default DeliveryHome;
