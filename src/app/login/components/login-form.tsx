'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { FormControl, FormMessage } from '@/components/ui/form';
import { FormItem, FormLabel } from '@/components/ui/form';
import { Form, FormField } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(4, { message: 'Matrícula é obrigatório' })
    .email({ message: 'Matrícula inválido' }),
  password: z
    .string()
    .trim()
    .min(8, { message: 'A senha deve ter pelo menos 8 caracteres' })
});

const LoginForm = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  function onSubmit(data: z.infer<typeof loginSchema>) {
    console.log('Dados do registro:', data);
  }

  return (
    <Card>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <CardHeader>
            <CardTitle className="text-center">Funcionário</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Matrícula</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite sua Matrícula" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Digite sua senha"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <div className="w-full space-y-2">
              <Button
                variant="outlineYellow"
                type="submit"
                className="w-full"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  'Entrar'
                )}
              </Button>
            </div>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default LoginForm;
