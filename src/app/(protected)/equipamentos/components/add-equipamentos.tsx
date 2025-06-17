'use client';

import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';

import UpsertEquipamteForm from './upsert-equipamento-form';

const AddEquipamentoButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus />
          Adicionar equipamento
        </Button>
      </DialogTrigger>
      <UpsertEquipamteForm />
    </Dialog>
  );
};

export default AddEquipamentoButton;
