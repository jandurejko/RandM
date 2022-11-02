export interface IObject {
  name: string;
  url: string
}

export interface ICharacter {
  id: number;
  image: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: IObject;
  location: IObject;
}

export enum speciesEnum{
  ALL = '',
  HUMAN = 'Human',
  ALIEN = 'Alien',
}
