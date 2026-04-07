export type TabKey =
  | "resena"
  | "proposito"
  | "objetivos"
  | "politicasCalidad"
  | "valoresInstitucionales"
  | "serviciosIps"
  | "descripcionServicios"
  | "objetivosEspecificos";

export interface TabDefinition {
  key: TabKey;
  label: string;
}

export interface SectionMeta {
  title: string;
  description: string;
}

export interface LabelValueItem {
  label: string;
  value: string;
}

export interface ContactLine {
  city: string;
  phone: string;
}

export interface OfficeInfo {
  name: string;
  address: string;
  hours: string;
}

export interface TitleDescriptionItem {
  title: string;
  description: string;
}

export interface TitleItemsItem {
  title: string;
  items: string[];
}

export interface ServiceItem extends TitleDescriptionItem {
  imageSrc: string;
  imageAlt: string;
}
