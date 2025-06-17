import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import PageContainer, {
  PageActions,
  PageContent,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageTitle
} from '@/components/ui/page-container';

const DashboardPage = () => {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Dashboard</PageTitle>
          <PageDescription>Descrição</PageDescription>
        </PageHeaderContent>
        <PageActions>
          <Button>
            <Plus />
            Filtrar
          </Button>
        </PageActions>
      </PageHeader>
      <PageContent>
        <h1>teste</h1>
      </PageContent>
    </PageContainer>
  );
};

export default DashboardPage;
