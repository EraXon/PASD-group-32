import {DeliveryModel} from "../models";

function toInt(str : string) : number {
    if (str === '') {
        return 0;
    }
    return parseInt(str);
}

function getDateTime( str : string): Date {
    const [dateComponents, timeComponents] = str.split(' ');
    const [month, day, year] = dateComponents.split('/');
    const [hours, minutes] = timeComponents.split(':');
    let date = new Date(+year, +month - 1, +day, +hours, +minutes);
    date.setTime( date.getTime() - date.getTimezoneOffset() * 60 * 1000 );
    return date;
}

function getFormValues(formData : FormData) : DeliveryModel {
    const id = toInt(formData.get('id') as string);
    const cost = toInt(formData.get('cost') as string);
    const orderId = toInt(formData.get('order_id') as string);
    const status = formData.get('status') as string;
    const retailerId = formData.get('retailer_id') as string;
    const schedulerId = formData.get('scheduler_id') as string;
    const delivererId = formData.get('deliverer_id') as string;
    const expected = formData.get('expected') as string;
    const actual = formData.get('actual') as string;

    return {
        id: id,
        cost_in_cents: cost,
        order_id: orderId,
        status: status,
        retailer_id: retailerId,
        ddscheduler_id: schedulerId,
        dddeliverer_id: delivererId,
        expected_deliver_datetime: expected ? getDateTime(expected) : new Date(expected),
        actual_deliver_datetime: actual ? getDateTime(actual) : new Date(actual)
    };
}


export {
    getFormValues
}