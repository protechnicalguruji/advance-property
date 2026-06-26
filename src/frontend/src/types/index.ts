export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  priceLabel: string;
  type: "residential" | "commercial" | "plot" | "villa";
  category: "buy" | "rent";
  bedrooms?: number;
  bathrooms?: number;
  area: number;
  areaUnit: string;
  image: string;
  images?: string[];
  isVerified: boolean;
  isFeatured: boolean;
  tags: string[];
  description: string;
  amenities: string[];
  floor?: number;
  totalFloors?: number;
  parking?: number;
  furnishing?: "unfurnished" | "semi-furnished" | "fully-furnished";
}

export interface CommercialProperty {
  id: string;
  title: string;
  location: string;
  price: number;
  priceLabel: string;
  type: "shop" | "office" | "warehouse" | "showroom";
  area: number;
  areaUnit: string;
  image: string;
  isVerified: boolean;
  tags: string[];
  description: string;
  floor?: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
  date: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface EMIInputs {
  propertyPrice: number;
  downPayment: number;
  interestRate: number;
  tenure: number;
}

export interface EMIResult {
  monthlyEMI: number;
  totalPayable: number;
  totalInterest: number;
  loanAmount: number;
}
