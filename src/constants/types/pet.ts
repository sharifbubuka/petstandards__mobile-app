/**
 * PET ENUMS
 */
enum PetType {
  DOG = 'Dog'
}

enum PetGender {
  MALE   = 'Male',
  FEMALE = 'Female'
}

enum DogSize {
  SMALL = 'Small',
  MEDIUM ='Medium',
  LARGE = 'Large'
}

enum DogColor {
  BLACK = 'Black',
  BROWN = 'Brown',
  WHITE = 'White',
  RED = 'Red',
  GOLD = 'Gold',
  YELLOW = 'Yellow',
  CREAM = 'Cream',
  BLUE = 'Blue',
  GRAY = 'Gray'
}

enum DogCoatPattern {
  BLACK_AND_TAN = 'Black and tan',
  BROWN_AND_TAN = 'Brown and tan',
  BLUE_AND_TAN = 'Blue and tan',
  BICOLOR = 'Bicolor',
  TRICOLOR = 'Tricolor',
  MERLE = 'Merle',
  TUXEDO = 'TUXEDO',
  HARLEQUIN = 'Harlequin',
  SPOTTED = 'Spotted',
  FLECKED_OR_SPECKLED = 'Flecked, ticked or speckled',
  BRINDLE = 'Brindle',
  SADDLE = 'Saddle or blanket',
  SABLE = 'Sable'
}

enum DogCoatLength {
  LONG = 'Long',
  SHORT = 'Short',
  HAIRLESS = 'Hairless'
}

enum WeightMetric {
  KILOGRAM = 'Kilograms'
}

enum HeightMetric {
  CENTIMETER = 'Centimeters',
  METERS = 'Meters'
}

enum LengthMetric {
  CENTIMETER = 'Centimeters',
  METERS = 'Meters'
}

enum Currency {
  SHILLINGS = 'Shillings'
}

/**
 * PET TYPES
 */
type Dog = {
  pet_id: string
  alive: boolean
  missing: boolean
  name: string
  type: PetType
  gender: PetGender
  breed: string
  mother: string | null
  father: string | null
  avatar: string
  images: string[] | []
  size: DogSize
  location: string
  sheds: boolean
  main_coat_color: DogColor
  other_coat_colors: DogColor[] | []
  coat_length: DogCoatLength | null
  coat_pattern: DogCoatPattern | null
  owner_id: string
  date_created: string
  date_last_updated_by_vet: string
  date_last_updated_by_owner: string
  date_of_birth: string
  date_of_death: string | null
  health_records: {
    dog_weight: {
      weight_value: number
      metric: WeightMetric
      date_recorded: string
    }[] | []
    dog_height: {
      height_value: number
      metric: HeightMetric
      date_recorded: string
    }[] | []
    dog_length: {
      length_value: number
      metric: LengthMetric
      date_recorded: string
    }[] | []
    vet_visit: {
      visit_id: string
      purpose: string
      vet_id: string
      visit_date: string
      note: string | null
      prescription: string[] | null
    }[] | [],
    allergies: {
      cause: string
      date_detected: string
    }[] | []
    diet: {
      digital_orders: {
        date_purchased: string
        product_id: string
      }[]
    }
    occurences: {
      label: string
      count: number
      active: boolean
    }[]
    vaccinations: {
      name: string
      purpose: string
      date_recorded: string
      self_vaccination: boolean
      vet_visit_id: string
      vet_note: string
      next_vaccination: string
    }[]
    files: {
      filename: string
      content_description: string
      file_storage_path: string
    }[],
    pregnancy_details: {
      mating_date: string
      mating_partner_id: string | null
      expected_conception_date: string
      actual_conception_date: string | null
      vet_visit_id: string | null
    }[]
  }
  finance_details: {
    products_purchased: {
      product_id: string
      date_purchased: string
      purchase_currency: Currency
      purchase_price: string
      average_market_price: string
      discount_received: number | null
    }[]
    services_recieved: {
      service_id: string
      date_received: string
      transaction_currency: Currency
      service_price: string
      average_market_price: string
      discount_received: number | null
    }[]
  }
}

export default Dog;