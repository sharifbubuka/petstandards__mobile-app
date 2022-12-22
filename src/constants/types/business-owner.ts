import { Gender } from "constants/enums";

/**
 * BUSINESS OWNER ENUMS
 */

type BusinessOwner = {
  business_owner_id: string
  business_owner_name: string
  business_owner_gender: Gender
  email: string
  email_verified: boolean | null
  qualifications: {
    name: string
    description: string
    verified: boolean
  }[]
  phone_number: string | null
  phone_number_verified: boolean
  password: string
  location: string | null
  avatar: string | null
  onboarded: boolean
  current_subscription: any // to-change
  business_id: string
}

export default BusinessOwner;