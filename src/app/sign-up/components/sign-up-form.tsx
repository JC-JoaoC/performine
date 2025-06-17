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

const registerSchema = z
  .object({
    name: z.string().trim().min(1, { message: 'Nome é obrigatório' }),
    matricula: z.string().trim().min(1, { message: 'Matrícula é inválida' }),
    password: z
      .string()
      .trim()
      .min(8, { message: 'A senha deve ter pelo menos 8 caracteres' }),
    confirmPassword: z
      .string()
      .trim()
      .min(8, { message: 'A senha deve ter pelo menos 8 caracteres' })
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não correspondem',
    path: ['confirmPassword']
  });

const SignUpForm = () => {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      matricula: '',
      password: '',
      confirmPassword: ''
    }
  });

  function onSubmit(data: z.infer<typeof registerSchema>) {
    console.log('Dados do registro:', data);
  }

  return (
    <Card>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <CardHeader>
            <CardTitle className="text-center">Adminitrador</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite seu nome" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="matricula"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Matrícula</FormLabel>
                  <FormControl>
                    <Input placeholder="Insira sua matrícula" {...field} />
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
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirme a Senha</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Confirme sua senha"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="w-full"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                'Criar conta'
              )}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default SignUpForm;
