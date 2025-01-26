import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useCardStore } from "@/store/cardStore";
import { CardType, Rarity, Role, Faction } from "@/types/cards";

export function CollectionFilters() {
  const { filters, setFilter } = useCardStore();

  const cardTypes: CardType[] = ['Unit', 'Special', 'Artifact'];
  const rarities: Rarity[] = ['Common', 'Rare', 'Epic', 'Legendary'];
  const roles: Role[] = ['Control', 'Engine', 'Pointslam'];
  const factions: Faction[] = ['Neutral', 'Monsters', 'Nilfgaard', 'Northern Realms', 'Scoia\'tael', 'Skellige', 'Syndicate'];

  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <Input
        placeholder="Search cards..."
        value={filters.search}
        onChange={(e) => setFilter('search', e.target.value)}
        className="w-[250px]"
      />
      
      <Select
        value={filters.type}
        onValueChange={(value) => setFilter('type', value)}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Card Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="All">All Types</SelectItem>
          {cardTypes.map((type) => (
            <SelectItem key={type} value={type}>
              {type}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={filters.rarity}
        onValueChange={(value) => setFilter('rarity', value)}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Rarity" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="All">All Rarities</SelectItem>
          {rarities.map((rarity) => (
            <SelectItem key={rarity} value={rarity}>
              {rarity}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={filters.role}
        onValueChange={(value) => setFilter('role', value)}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Role" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="All">All Roles</SelectItem>
          {roles.map((role) => (
            <SelectItem key={role} value={role}>
              {role}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={filters.faction}
        onValueChange={(value) => setFilter('faction', value)}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Faction" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="All">All Factions</SelectItem>
          {factions.map((faction) => (
            <SelectItem key={faction} value={faction}>
              {faction}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
