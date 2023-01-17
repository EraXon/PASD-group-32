import { useContext } from "react";
import {BackendContext} from "../../../BackendContext";
import {DDApi} from "../../../api";

interface DeleteSongProps {
    id? : string
}


function DeleteDelivery({id} : DeleteSongProps) : JSX.Element {
    const backend = useContext(BackendContext);
    async function handleDelete() : Promise<void> {
        if (!id) {
            alert("No movie id provided");
            return;
        }

        try {
            //const data = await DDApi.deleteDeliveryById(backend, id);
            //alert(data);
        } catch (error) {
            alert("Error when deleting the movie");
            console.error(error);
        }

    }
    return (
        <button onClick={handleDelete}>Delete Movie</button>
    )
}

export {
    DeleteDelivery
}