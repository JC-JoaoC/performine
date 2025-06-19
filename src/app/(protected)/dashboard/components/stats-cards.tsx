import { Compass, Dumbbell, MapPin, Weight } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface StatsCardsProps {
  totalRevenue: number | null;
  totalViagens: number;
  CargaMedia: number;
  CargaTotal: number;
}

const StatsCards = ({
  totalViagens,
  CargaMedia,
  CargaTotal
}: StatsCardsProps) => {
  const stats = [
    {
      title: 'Média de viagens',
      value: '200',
      icon: MapPin
    },
    {
      title: 'Total de viagens',
      value: totalViagens.toString(),
      icon: Compass
    },
    {
      title: 'Carga média',
      value: CargaMedia.toString(),
      icon: Dumbbell
    },
    {
      title: 'Carga Total',
      value: CargaTotal.toString(),
      icon: Weight
    }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.title} className="gap-2">
            <CardHeader className="flex flex-row items-center gap-2 space-y-0 pb-2">
              <div className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-full">
                <Icon className="text-primary h-4 w-4" />
              </div>
              <CardTitle className="text-muted-foreground text-sm font-medium">
                {stat.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default StatsCards;
