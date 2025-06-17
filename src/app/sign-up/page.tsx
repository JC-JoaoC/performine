import { Tabs, TabsContent } from '@/components/ui/tabs';

import SignUpForm from './components/sign-up-form';

const RegisterPage = async () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsContent value="login">
          <SignUpForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RegisterPage;
