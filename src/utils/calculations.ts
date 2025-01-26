import { Card } from "@/types/cards";

export function calculateCompletion(totalCards: number, ownedCards: number): number {
  if (totalCards === 0) return 0;
  return (ownedCards / totalCards) * 100;
}

export function calculateScrapsNeeded(cards: Card[], ownedCards: Set<string>): number {
  return cards.reduce((total, card) => {
    if (!ownedCards.has(card.id)) {
      return total + card.craftingCost;
    }
    return total;
  }, 0);
}
