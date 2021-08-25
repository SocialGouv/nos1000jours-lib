/* eslint-disable @typescript-eslint/naming-convention */
export enum PoiTypeEnum {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  planning_familial = "planning_familial",
  // eslint-disable-next-line @typescript-eslint/naming-convention
  maison_de_naissance = "maison_de_naissance",
  maternite = "maternite",
  pmi = "pmi", // pas d'icône
  saad = "saad",
  cpam = "cpam", // pas d'icône
  caf = "caf", // pas d'icône
  mairie = "mairie", // pas d'icône
}

export enum PoiCategorieEnum {
  structure = "structure",
  professionnel = "professionnel",
}

export interface Poi {
  id: number;
  categorie: PoiCategorieEnum;
  type: PoiTypeEnum;
  nom: string;
  telephone?: string;
  courriel?: string;
  site_internet?: string;
  adresse: string;
  code_postal: number;
  commune: string;
  position_latitude: number;
  position_longitude: number;
}

export interface PoiType {
  nom: string;
  categorie: string;
}
export interface Step {
  nom: string;
}
