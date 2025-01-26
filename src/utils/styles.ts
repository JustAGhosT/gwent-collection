import { Rarity } from "@/types/cards";

export const getRarityColor = (rarity: Rarity) => {
  switch (rarity) {
    case 'Common':
      return 'text-gray-400';
    case 'Rare':
      return 'text-blue-400';
    case 'Epic':
      return 'text-purple-400';
    case 'Legendary':
      return 'text-yellow-400';
    default:
      return '';
  }
};
