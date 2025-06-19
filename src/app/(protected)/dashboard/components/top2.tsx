import { Activity, ChartArea } from 'lucide-react';

import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface TopAtividadeProps {
  topAtividade: {
    produtividade: string;
    topAtividade: number;
  }[];
}

const getProdutividadeIcon = (produtividade: string) => {
  const produtividadeLower = produtividade.toLowerCase();

  if (produtividadeLower.includes('cardiolog')) return Activity;
  if (
    produtividadeLower.includes('ginecolog') ||
    produtividadeLower.includes('obstetri')
  )
    return Activity;
  if (produtividadeLower.includes('pediatr')) return Activity;
  if (produtividadeLower.includes('dermatolog')) return Activity;
  if (
    produtividadeLower.includes('ortoped') ||
    produtividadeLower.includes('traumatolog')
  )
    return Activity;
  if (produtividadeLower.includes('oftalmolog')) return Activity;
  if (produtividadeLower.includes('neurolog')) return Activity;

  return Activity;
};

export default function Top2({ topAtividade }: TopAtividadeProps) {
  const maxtopAtividade = Math.max(...topAtividade.map((i) => i.topAtividade));
  return (
    <Card className="mx-auto w-full">
      <CardContent>
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ChartArea className="text-muted-foreground" />
            <CardTitle className="text-base">Produtividade x Tempo</CardTitle>
          </div>
        </div>

        {/* Top List */}
        <div className="space-y-6">
          {topAtividade.map((produtividade) => {
            const Icon = getProdutividadeIcon(produtividade.produtividade);
            // Porcentagem
            const progressValue =
              (produtividade.topAtividade / maxtopAtividade) * 100;

            return (
              <div
                key={produtividade.produtividade}
                className="flex items-center gap-2"
              >
                <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
                  <Icon className="text-primary h-5 w-5" />
                </div>
                <div className="flex w-full flex-col justify-center">
                  <div className="flex w-full justify-between">
                    <h3 className="text-sm">{produtividade.produtividade}</h3>
                    <div className="text-right">
                      <span className="text-muted-foreground text-sm font-medium">
                        {produtividade.topAtividade} agend.
                      </span>
                    </div>
                  </div>
                  <Progress value={progressValue} className="w-full" />
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
