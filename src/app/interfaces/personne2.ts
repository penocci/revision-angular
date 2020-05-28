import { Adresse } from './adresse';

export interface Personne2 {
  id?: number;
  nom?: string;
  prenom?: string;
  adresses?: Array<Adresse>;
}
