export class CreateRetailer_OrderDto{
    expected_deliver_datetime: Date;
    actual_deliver_datetime: Date;
    order_id: number;
    cost_in_cents: number;
    status: string;
    id: number;
  }