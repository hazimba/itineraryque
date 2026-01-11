export type PackageFeature =
  | "SHOPPING"
  | "HISTORICAL"
  | "NATURE"
  | "ENTERTAINMENT"
  | "FAMILY"
  | "HONEYMOON"
  | "CULTURE";

export type PackageMode = "FIT" | "SIC";

export type PackageSeason = "ALL YEAR" | "NON-APPLICABLE";

export type PackageMeal = "NO MEAL" | "BREAKFAST" | "HALF BOARD";

export type PackageType = "GROUND ONLY" | "AIR + GROUND";

export type PackageAppearance =
  | "Normal"
  | "Shopping"
  | "Premium"
  | "Leisure"
  | "Cultural";

export type Package = {
  id: string;

  places_image: string;
  name: string;
  mode: PackageMode;
  season: PackageSeason;
  country: string;
  appearance: PackageAppearance;
  type: PackageType;
  meal: PackageMeal;
  loc: string;

  features: PackageFeature[];

  title: string;
  subtitle: string;
  route: string;
  highlights: string;

  itinerary: string;
  other_itinerary: string;

  inclusions: string;
  exclusions: string;
  terms: string;

  created_at: string;
  updated_at: string;
};
