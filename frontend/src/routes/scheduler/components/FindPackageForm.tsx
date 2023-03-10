import React, { useContext, useEffect, useState } from "react";
import {BackendContext} from "../../../BackendContext";
import {Packages} from "../../../models";
import {DDApi} from "../../../api";
import {PackageArray} from "./PackageArray";



function FindPackageForm() : JSX.Element {
    const backend = useContext(BackendContext);
    const [results, setResults] = useState([] as Packages);
    const [loading, setLoading] = useState(false);

    async function retrievePackages () : Promise<void> {
        setLoading(true);
        try {
            let data = await DDApi.getPackages(backend);
            setResults(data);
            setLoading(false);
        } catch (error : any) {
            let errorMessage = `Error while fetching Packages!\n`;
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
        retrievePackages();
    }, [backend])

    return (
        <div>
            <h3>Get Packages</h3>
            <PackageArray packages={results} loading={loading} />
        </div>
    );
}

export {
    FindPackageForm
};