export type Rarity = 'Common' | 'Rare' | 'Epic' | 'Legendary';
export type CardType = 'Unit' | 'Special' | 'Artifact';
export type Role = 'Control' | 'Engine' | 'Pointslam';
export type Faction = 'Neutral' | 'Monsters' | 'Nilfgaard' | 'Northern Realms' | 'Scoia\'tael' | 'Skellige' | 'Syndicate';

export interface Card {
  id: string;
  name: string;
  rarity: Rarity;
  provision: number;
  power?: number;
  type: CardType;
  keywords: string[];
  roles: Role[];
  craftingCost: number;
  ability: string;
  imageUrl: string;
  faction: Faction;
}

export interface CollectionState {
  ownedCards: Set<string>;
  filters: {
    search: string;
    type: CardType | 'All';
    rarity: Rarity | 'All';
    role: Role | 'All';
  };
}
