import {PackageModel, Packages} from '../../../models';

interface Loading {
    loading: boolean
}

interface PackageResults {
    packages: Packages
}

type PackageResultsProps = PackageResults & Loading;


function PackageArray({packages, loading}: PackageResultsProps): JSX.Element {
    return (
        <div>
            {loading ? <p>Loading...</p> : (
                packages.length === 0 ? <p>No results</p> :
                    <ul>
                        {packages.map((packageModel: PackageModel) => (
                            <li key={packageModel.id}>
                                <p><b>Sender info:</b></p>
                                <ol>
                                <p>Name: {packageModel.sender_info.name}</p>
                                <p>Street and number: {packageModel.sender_info.street_and_number}</p>
                                <p>Zipcode: {packageModel.sender_info.zipcode}</p>
                                <p>City: {packageModel.sender_info.city}</p>
                                <p>Country: {packageModel.sender_info.country}</p>
                                </ol>

                                <p><b>Receiver info:</b></p>
                                <ol>
                                <p>Name: {packageModel.receiver_info.name}</p>
                                <p>Street and number: {packageModel.receiver_info.street_and_number}</p>
                                <p>Zipcode: {packageModel.receiver_info.zipcode}</p>
                                <p>City: {packageModel.receiver_info.city}</p>
                                <p>Country: {packageModel.receiver_info.country}</p>
                                </ol>

                                <p><b>Length (in mm):</b> {packageModel.x_in_mm}</p>
                                <p><b>Height (in mm):</b> {packageModel.y_in_mm}</p>
                                <p><b>Width (in mm):</b> {packageModel.z_in_mm}</p>
                                <p><b>Breakable:</b> {packageModel.is_breakable}</p>
                                <p><b>Perishable:</b> {packageModel.is_perishable}</p>
                                <p><b>Send date:</b> {packageModel.send_date ? packageModel.send_date.toString() : 'null'}</p>
                                <hr/>
                            </li>
                        ))}
                    </ul>
            )}
        </div>
    );
}

export {
    PackageArray
};
