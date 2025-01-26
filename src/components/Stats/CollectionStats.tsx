import { Card } from "@/types/cards";
import { useCardStore } from "@/store/cardStore";
import { calculateCompletion, calculateScrapsNeeded } from "@/utils/calculations";

interface StatsProps {
  cards: Card[];
}

export function CollectionStats({ cards }: StatsProps) {
  const { ownedCards } = useCardStore();

  const totalCards = cards.length;
  const ownedCount = ownedCards.size;
  const completion = calculateCompletion(totalCards, ownedCount);

  const typeDistribution = cards.reduce((acc, card) => {
    acc[card.type] = (acc[card.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const scrapsNeeded = calculateScrapsNeeded(cards, ownedCards);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
      <div className="rounded-lg border bg-card p-4">
        <h3 className="font-semibold mb-2">Collection Progress</h3>
        <div className="space-y-1 text-sm">
          <p>Owned: {ownedCount}/{totalCards}</p>
          <p>Completion: {completion.toFixed(1)}%</p>
          <p>Scraps Needed: {scrapsNeeded}</p>
        </div>
      </div>

      <div className="rounded-lg border bg-card p-4">
        <h3 className="font-semibold mb-2">Type Distribution</h3>
        <div className="space-y-1 text-sm">
          {Object.entries(typeDistribution).map(([type, count]) => (
            <p key={type}>{type}: {count}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
