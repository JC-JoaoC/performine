'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from '@/components/ui/card';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';

import UpsertEquipamteForm from './upsert-equipamento-form';

const CardEquipamento = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2"></div>
      </CardHeader>
      <Separator />
      <CardContent className="flex flex-col gap-2">
        <Badge variant="outline">teste</Badge>
      </CardContent>
      <Separator />
      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full">Ver mais</Button>
          </DialogTrigger>
          <UpsertEquipamteForm />
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default CardEquipamento;
