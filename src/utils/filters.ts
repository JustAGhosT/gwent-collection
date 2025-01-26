import { Card, CardType, Rarity, Role, Faction } from '../types/cards';

export function filterCards(
  cards: Card[],
  search: string,
  type: CardType | 'All',
  rarity: Rarity | 'All',
  role: Role | 'All',
  faction: Faction | 'All'
): Card[] {
  return cards.filter((card) => {
    if (search && !card.name.toLowerCase().includes(search.toLowerCase())) {
      return false;
    }
    if (type !== 'All' && card.type !== type) {
      return false;
    }
    if (rarity !== 'All' && card.rarity !== rarity) {
      return false;
    }
    if (role !== 'All' && !card.roles.includes(role)) {
      return false;
    }
    if (faction !== 'All' && card.faction !== faction) {
      return false;
    }
    return true;
  });
}
