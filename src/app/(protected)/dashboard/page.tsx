import { Hourglass } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  PageActions,
  PageContainer,
  PageContent,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageTitle
} from '@/components/ui/page-container';

import { DatePicker } from './components/date-picker';
import StatsCards from './components/stats-cards';
import Top1 from './components/top1';
import Top2 from './components/top2';

// interface DashboardPageProps {
//   searchParams: Promise<{
//     from: string;
//     to: string;
//   }>;
// }

const DashboardPage = async () => {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Dashboard</PageTitle>
          <PageDescription>
            Tenha uma visão geral da sua empresa.
          </PageDescription>
        </PageHeaderContent>
        <PageActions>
          <DatePicker />
        </PageActions>
      </PageHeader>
      <PageContent>
        <StatsCards
          totalViagens={2412}
          CargaMedia={123}
          CargaTotal={123123}
          totalRevenue={1231}
        />
        <div className="grid grid-cols-[2.25fr_1fr] gap-4">
          <Top1 doctors={[]} />
        </div>
        <div className="grid grid-cols-[2.25fr_1fr] gap-4">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Hourglass className="text-muted-foreground" />
                <CardTitle className="text-base">Produção por hora</CardTitle>
              </div>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
          <Top2 topAtividade={[]} />
        </div>
      </PageContent>
    </PageContainer>
  );
};

export default DashboardPage;
