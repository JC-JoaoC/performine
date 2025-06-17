import { Funnel } from 'lucide-react';

import { Button } from '@/components/ui/button';
import PageContainer, {
  PageActions,
  PageContent,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageTitle
} from '@/components/ui/page-container';

import AddEquipamentoButton from './components/add-equipamentos';

const EquipamentosPage = () => {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Mapa</PageTitle>
          <PageDescription>Descrição</PageDescription>
        </PageHeaderContent>
        <PageActions>
          <AddEquipamentoButton />
          <Button variant="ghost">
            <Funnel />
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

export default EquipamentosPage;
