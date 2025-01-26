import { Layout } from "./components/Layout";
import { CollectionFilters } from "./components/Filters/CollectionFilters";
import { CollectionStats } from "./components/Stats/CollectionStats";
import { CardTable } from "./components/CardTable/CardTable";
import { useCardStore } from "./store/cardStore";
import { filterCards } from "./utils/filters";
import cardsData from "./data/cards.json";

function App() {
  const { filters } = useCardStore();

  const filteredCards = filterCards(
    cardsData,
    filters.search,
    filters.type,
    filters.rarity,
    filters.role,
    filters.faction
  );

  return (
    <Layout>
      <CollectionFilters />
      <CollectionStats cards={cardsData} />
      <CardTable cards={filteredCards} />
    </Layout>
  );
}

export default App;
