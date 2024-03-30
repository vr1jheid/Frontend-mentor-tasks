export interface StyledProps {
  $theme: string;
}

export interface Country {
  name: Name;
  tld?: string[];
  cca2: string;
  ccn3?: string;
  cca3: string;
  cioc?: string;
  independent?: boolean;
  status: Status;
  unMember: boolean;
  currencies?: Currencies;
  idd: Idd;
  capital?: string[];
  altSpellings: string[];
  region: Region;
  subregion?: string;
  languages?: { [key: string]: string };
  translations: { [key: string]: Translation };
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms?: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini?: { [key: string]: number };
  fifa?: string;
  car: Car;
  timezones: string[];
  continents: Continent[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: StartOfWeek;
  capitalInfo: CapitalInfo;
  postalCode?: PostalCode;
  borders?: string[];
}

export interface CapitalInfo {
  latlng?: number[];
}

export interface Car {
  signs?: string[];
  side: Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export enum Continent {
  Africa = "Africa",
  Antarctica = "Antarctica",
  Asia = "Asia",
  Europe = "Europe",
  NorthAmerica = "North America",
  Oceania = "Oceania",
  SouthAmerica = "South America",
}

export interface Currencies {
  EUR?: Aed;
  ERN?: Aed;
  LRD?: Aed;
  BMD?: Aed;
  CKD?: Aed;
  NZD?: Aed;
  SOS?: Aed;
  ZMW?: Aed;
  VES?: Aed;
  TMT?: Aed;
  ALL?: Aed;
  GBP?: Aed;
  SDG?: BAM;
  USD?: Aed;
  XAF?: Aed;
  AZN?: Aed;
  KES?: Aed;
  XOF?: Aed;
  VND?: Aed;
  AFN?: Aed;
  GTQ?: Aed;
  KWD?: Aed;
  STN?: Aed;
  KGS?: Aed;
  PLN?: Aed;
  GHS?: Aed;
  AMD?: Aed;
  JEP?: Aed;
  XCD?: Aed;
  TJS?: Aed;
  ETB?: Aed;
  DZD?: Aed;
  MAD?: Aed;
  MRU?: Aed;
  AUD?: Aed;
  BND?: Aed;
  SGD?: Aed;
  RON?: Aed;
  NOK?: Aed;
  BYN?: Aed;
  PAB?: Aed;
  CZK?: Aed;
  PKR?: Aed;
  PEN?: Aed;
  BBD?: Aed;
  DKK?: Aed;
  HUF?: Aed;
  KMF?: Aed;
  BDT?: Aed;
  FJD?: Aed;
  CNY?: Aed;
  COP?: Aed;
  MVR?: Aed;
  MYR?: Aed;
  KYD?: Aed;
  PYG?: Aed;
  UYU?: Aed;
  ZAR?: Aed;
  VUV?: Aed;
  SEK?: Aed;
  LBP?: Aed;
  CLP?: Aed;
  BZD?: Aed;
  GYD?: Aed;
  MNT?: Aed;
  TVD?: Aed;
  DOP?: Aed;
  BOB?: Aed;
  NPR?: Aed;
  TWD?: Aed;
  BGN?: Aed;
  MDL?: Aed;
  IMP?: Aed;
  BTN?: Aed;
  INR?: Aed;
  KHR?: Aed;
  HTG?: Aed;
  CVE?: Aed;
  GEL?: Aed;
  BIF?: Aed;
  BSD?: Aed;
  MUR?: Aed;
  LYD?: Aed;
  MWK?: Aed;
  MXN?: Aed;
  SZL?: Aed;
  PGK?: Aed;
  CHF?: Aed;
  RUB?: Aed;
  ILS?: Aed;
  UGX?: Aed;
  TOP?: Aed;
  AED?: Aed;
  SRD?: Aed;
  UZS?: Aed;
  SAR?: Aed;
  EGP?: Aed;
  MGA?: Aed;
  XPF?: Aed;
  CAD?: Aed;
  GMD?: Aed;
  TTD?: Aed;
  SCR?: Aed;
  JPY?: Aed;
  BRL?: Aed;
  SYP?: Aed;
  SHP?: Aed;
  TZS?: Aed;
  IRR?: Aed;
  KRW?: Aed;
  WST?: Aed;
  JMD?: Aed;
  NIO?: Aed;
  GNF?: Aed;
  PHP?: Aed;
  NAD?: Aed;
  CRC?: Aed;
  BAM?: BAM;
  MOP?: Aed;
  MZN?: Aed;
  KPW?: Aed;
  UAH?: Aed;
  IQD?: Aed;
  AOA?: Aed;
  SLL?: Aed;
  CUC?: Aed;
  CUP?: Aed;
  RSD?: Aed;
  FOK?: Aed;
  JOD?: Aed;
  TRY?: Aed;
  KID?: Aed;
  KZT?: Aed;
  GIP?: Aed;
  ISK?: Aed;
  QAR?: Aed;
  MMK?: Aed;
  THB?: Aed;
  AWG?: Aed;
  NGN?: Aed;
  BHD?: Aed;
  LAK?: Aed;
  DJF?: Aed;
  SBD?: Aed;
  ANG?: Aed;
  FKP?: Aed;
  BWP?: Aed;
  GGP?: Aed;
  ZWL?: Aed;
  LSL?: Aed;
  ARS?: Aed;
  YER?: Aed;
  CDF?: Aed;
  OMR?: Aed;
  IDR?: Aed;
  RWF?: Aed;
  MKD?: Aed;
  TND?: Aed;
  SSP?: Aed;
  HNL?: Aed;
  LKR?: Aed;
  HKD?: Aed;
}

export interface Aed {
  name: string;
  symbol: string;
}

export interface BAM {
  name: string;
}

export interface Demonyms {
  eng: Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt?: string;
}

export interface Idd {
  root?: string;
  suffixes?: string[];
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName?: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common: string;
}

export interface PostalCode {
  format: string;
  regex?: string;
}

export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Antarctic = "Antarctic",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
}

export enum StartOfWeek {
  Monday = "monday",
  Saturday = "saturday",
  Sunday = "sunday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
  UserAssigned = "user-assigned",
}
