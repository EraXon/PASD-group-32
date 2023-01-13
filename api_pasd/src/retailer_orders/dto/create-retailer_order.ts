export class CreateRetailer_OrderDto {
      send_date: Date
      x_in_mm: number
      y_in_mm: number
      z_in_mm: number
      is_breakable: boolean
      is_perishable: boolean
      sender_info: {
        name: string,
        street_and_number: string,
        zipcode: string,
        city: string,
        country: string
      }
      receiver_info: {
        name: string,
        street_and_number: string,
        zipcode: string,
        city: string,
        country: string
      }
      id: number
  }
  