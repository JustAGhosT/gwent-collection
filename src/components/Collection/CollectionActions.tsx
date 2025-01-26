import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useCardStore } from '@/store/cardStore';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';

export function CollectionActions() {
  const { ownedCards, toggleCard } = useCardStore();
  const [importDialogOpen, setImportDialogOpen] = useState(false);
  const [importData, setImportData] = useState('');

  const handleExport = () => {
    const exportData = Array.from(ownedCards);
    const jsonStr = JSON.stringify(exportData);
    
    // Copy to clipboard
    navigator.clipboard.writeText(jsonStr).then(() => {
      toast({
        title: 'Collection Exported',
        description: 'Collection data has been copied to your clipboard.',
      });
    });

    // Create download file
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `gwent-collection-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleImport = () => {
    try {
      const importedCards = JSON.parse(importData);
      if (!Array.isArray(importedCards)) {
        throw new Error('Invalid import data format');
      }

      // Clear current collection and import new one
      ownedCards.forEach(id => toggleCard(id));
      importedCards.forEach(id => toggleCard(id));

      setImportDialogOpen(false);
      toast({
        title: 'Collection Imported',
        description: 'Your collection has been successfully updated.',
      });
    } catch (error) {
      toast({
        title: 'Import Failed',
        description: 'Failed to import collection. Please check the format of your import data.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="flex gap-4 mb-6">
      <Button onClick={handleExport}>
        Export Collection
      </Button>

      <Dialog open={importDialogOpen} onOpenChange={setImportDialogOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">
            Import Collection
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Import Collection</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Textarea
              placeholder="Paste your collection data here..."
              value={importData}
              onChange={(e) => setImportData(e.target.value)}
              className="h-[200px]"
            />
            <Button onClick={handleImport}>
              Import
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
