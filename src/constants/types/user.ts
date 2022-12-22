import { 
  ActivityType,
  PaymentType,
  PetType, 
  ProductType, 
  ReminderType, 
  ServiceType, 
  SubscriptionType 
} from ".";

type User = {
  user_id: string
  names: string
  email: string
  email_verified: boolean | null
  phone_number: string | null 
  phone_number_verified: boolean
  password: string
  avatar: string | null
  location: string
  current_subscription: SubscriptionType
  onboarded: boolean
  pets: PetType[] | []
  pending_services: ServiceType[] | []
  completed_services: {
    service_id: string
    rating: {
      date_of_rating: string
      rating_value: number
    }
    review: {
      date_of_review: string
      review_value: string
    }
  }[] | []
  pending_products: ProductType[] | []
  received_prodcts: ProductType[] | []
  activities: ActivityType[] |[]
  reminders: ReminderType[] | []
  payment_details: PaymentType 
  date_created: string
  date_last_updated: string
}

export default User;