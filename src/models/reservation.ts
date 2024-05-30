export interface Reservation {
  userId: string
  hotelId: string
  roomId: string
  startDate: string
  endDate: string
  price: string
  formValues: {
    [key: string]: string
  }
}
