import { Faction } from '@/types/cards';

interface FactionIconProps {
  faction: Faction;
  className?: string;
}

export function FactionIcon({ faction, className = '' }: FactionIconProps) {
  return (
    <img
      src={`/images/factions/${faction.toLowerCase()}.png`}
      alt={faction}
      className={`w-6 h-6 ${className}`}
    />
  );
}
