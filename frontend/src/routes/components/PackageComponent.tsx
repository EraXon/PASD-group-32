import {PackageModel} from "../../models";

function PackageComponent(packageModel: PackageModel): JSX.Element {
    return (
        <div>
            <p><b>Id:</b> {packageModel.id}</p>
            <p><b>Sender info:</b></p>
            <ul>
                <p><b>Name:</b> {packageModel.sender_info.name}</p>
                <p><b>Street and number:</b> {packageModel.sender_info.street_and_number}</p>
                <p><b>Zipcode:</b> {packageModel.sender_info.zipcode}</p>
                <p><b>City:</b> {packageModel.sender_info.city}</p>
                <p><b>Country:</b> {packageModel.sender_info.country}</p>
            </ul>

            <p><b>Receiver info:</b></p>
            <ul>
                <p><b>Name:</b> {packageModel.receiver_info.name}</p>
                <p><b>Street and number:</b> {packageModel.receiver_info.street_and_number}</p>
                <p><b>Zipcode:</b> {packageModel.receiver_info.zipcode}</p>
                <p><b>City:</b> {packageModel.receiver_info.city}</p>
                <p><b>Country:</b> {packageModel.receiver_info.country}</p>
            </ul>

            <p><b>Length (in mm):</b> {packageModel.x_in_mm}</p>
            <p><b>Height (in mm):</b> {packageModel.y_in_mm}</p>
            <p><b>Width (in mm):</b> {packageModel.z_in_mm}</p>
            <p><b>Breakable:</b> {packageModel.is_breakable.toString()}</p>
            <p><b>Perishable:</b> {packageModel.is_perishable.toString()}</p>
            <p><b>Send date:</b> {packageModel.send_date ? packageModel.send_date.toString() : 'null'}</p>
            <hr/>
        </div>
    );
}

export {
    PackageComponent
}