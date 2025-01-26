import { Card } from "@/types/cards";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useCardStore } from "@/store/cardStore";
import { Checkbox } from "@/components/ui/checkbox";

interface CardDetailProps {
  card: Card;
}

export function CardDetail({ card }: CardDetailProps) {
  const { ownedCards, toggleCard } = useCardStore();

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Card Image Section */}
      <div className="w-full md:w-1/3">
        <div className="relative aspect-[2/3] rounded-lg overflow-hidden">
          <img
            src={card.imageUrl}
            alt={card.name}
            className="object-cover w-full h-full"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/placeholder-card.png';
            }}
          />
        </div>
      </div>

      {/* Card Info Section */}
      <div className="w-full md:w-2/3">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">{card.name}</h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Own this card</span>
            <Checkbox
              checked={ownedCards.has(card.id)}
              onCheckedChange={() => toggleCard(card.id)}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <span className="text-sm text-muted-foreground">Type</span>
            <p className="font-medium">{card.type}</p>
          </div>
          <div>
            <span className="text-sm text-muted-foreground">Rarity</span>
            <p className="font-medium">{card.rarity}</p>
          </div>
          <div>
            <span className="text-sm text-muted-foreground">Power</span>
            <p className="font-medium">{card.power || '-'}</p>
          </div>
          <div>
            <span className="text-sm text-muted-foreground">Provision</span>
            <p className="font-medium">{card.provision}</p>
          </div>
          <div>
            <span className="text-sm text-muted-foreground">Faction</span>
            <p className="font-medium">{card.faction}</p>
          </div>
        </div>

        <div className="mb-4">
          <span className="text-sm text-muted-foreground">Keywords</span>
          <div className="flex flex-wrap gap-2 mt-1">
            {card.keywords.map((keyword) => (
              <Badge key={keyword} variant="secondary">
                {keyword}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <span className="text-sm text-muted-foreground">Roles</span>
          <div className="flex flex-wrap gap-2 mt-1">
            {card.roles.map((role) => (
              <Badge key={role} variant="outline">
                {role}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <span className="text-sm text-muted-foreground">Ability</span>
          <ScrollArea className="h-[100px] mt-1 rounded-md border p-4">
            <p className="text-sm">{card.ability}</p>
          </ScrollArea>
        </div>

        <div className="mt-4">
          <span className="text-sm text-muted-foreground">Crafting Cost</span>
          <p className="font-medium">{card.craftingCost} scraps</p>
        </div>
      </div>
    </div>
  );
}
