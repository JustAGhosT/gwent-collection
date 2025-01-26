import { useState } from "react";
import { Card } from "@/types/cards";
import { useCardStore } from "@/store/cardStore";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CardDetailDialog } from "../CardDetails/CardDetailDialog";

interface CardTableProps {
  cards: Card[];
}

export function CardTable({ cards }: CardTableProps) {
  const { ownedCards, toggleCard } = useCardStore();
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleRowClick = (card: Card) => {
    setSelectedCard(card);
    setDialogOpen(true);
  };

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">Own</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Rarity</TableHead>
              <TableHead>Faction</TableHead>
              <TableHead className="w-[100px]">Power</TableHead>
              <TableHead className="w-[100px]">Provision</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cards.map((card) => (
              <TableRow
                key={card.id}
                className="cursor-pointer hover:bg-muted/50"
                onClick={() => handleRowClick(card)}
              >
                <TableCell onClick={(e) => e.stopPropagation()}>
                  <Checkbox
                    checked={ownedCards.has(card.id)}
                    onCheckedChange={() => toggleCard(card.id)}
                  />
                </TableCell>
                <TableCell className="font-medium">{card.name}</TableCell>
                <TableCell>{card.type}</TableCell>
                <TableCell>{card.rarity}</TableCell>
                <TableCell>{card.faction}</TableCell>
                <TableCell>{card.power || '-'}</TableCell>
                <TableCell>{card.provision}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <CardDetailDialog
        card={selectedCard}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </>
  );
}
