'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { NumericFormat } from 'react-number-format';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

const formSchema = z.object({
  descricao: z
    .string()
    .trim()
    .trim()
    .min(1, { message: 'Descrição é obrigatória' }),
  tipoEquipamento: z
    .string()
    .trim()
    .min(1, { message: 'Tipo do equipamento é obrigatória' }),
  placa: z.string().trim().min(1, { message: 'Placa é obrigatória' }),
  tipoHorimetro: z
    .string()
    .trim()
    .min(1, { message: 'Tipo de Horimetro é obrigatória' }),
  tipoHodometro: z
    .string()
    .trim()
    .min(1, { message: 'Tipo de Hodómetro é obrigatória' }),
  capacidadeTanque: z
    .string()
    .trim()
    .min(1, { message: 'Capacidade do tanque é obrigatória' }),
  codigo: z.string().trim().min(1, { message: 'Código é obrigatória' }),
  marcaModelo: z
    .string()
    .trim()
    .min(1, { message: 'Marca do modelo é obrigatória' }),
  gnssAndress: z
    .string()
    .trim()
    .min(1, { message: 'Gnss andress é obrigatória' }),
  tagRFID: z.string().trim().min(1, { message: 'Tag RFID é obrigatória' }),
  modulo: z.string().trim().min(1, { message: 'Módulo é obrigatória' }),
  idSensorFadiga: z
    .string()
    .trim()
    .min(1, { message: 'ID do sensor da fadiga é obrigatória' }),
  modeloSensorFadiga: z
    .string()
    .trim()
    .min(1, { message: 'Modelo do sensor da fadiga  é obrigatória' }),
  ativo: z.string().trim().min(1, { message: 'Selecione uma opção' }),

  // ------------- segunda parte ------------- //

  tipoRastreador: z
    .string()
    .trim()
    .min(1, { message: 'Tipo do rastreador é obrigatória' }),
  parametroTanqueTelemetria: z
    .string()
    .min(1, { message: 'Parâmetro da telemetria do tanque  é obrigatória' }),
  identificacaoRastreador: z
    .string()
    .min(1, { message: 'Identificação do rastreador é obrigatória' }),
  unidadeConsumoRastreador: z
    .string()
    .min(1, { message: 'Unidade de consumo do rastreador é obrigatória' }),
  unidadeHorimetroRastreador: z
    .string()
    .min(1, { message: 'Unidade horimetro do rastreador é obrigatória' }),
  conexaoBluetooth: z
    .string()
    .trim()
    .min(1, { message: 'Conexão bluetooth é obrigatória' }),
  imei: z.string().trim().min(1, { message: 'IMEI é obrigatória' }),
  tipoBluethoothTelemetria: z
    .string()
    .min(1, { message: 'Tipo do Bluethooth Telemetria é obrigatória' }),
  telemetriaBluetoothAdress: z
    .string()
    .min(1, { message: 'Tipo Aress do Bluethooth Telemetria é obrigatória' }),
  rpmMarchaLenta: z
    .string()
    .trim()
    .min(1, { message: 'RPM Marcha lenta é obrigatória' }),
  rpmIdeal: z.string().trim().min(1, { message: 'RPM ideal é obrigatória' }),
  metaConsumoCombustivel: z
    .string()
    .trim()
    .min(1, { message: 'Meta de consumo do combustível é obrigatória' }),
  metaTempoFaixaAmarela: z
    .string()
    .trim()
    .min(1, { message: 'Meta de tempo na faixa amarela é obrigatória' }),
  metaTempoFaixaVermelha: z
    .string()
    .trim()
    .min(1, { message: 'Meta de tempo na faixa vermelha é obrigatória' }),
  metaQuantidadeFreadaBusca: z
    .string()
    .trim()
    .min(1, { message: 'Meta de quantidade de freada busca é obrigatória' }),
  metaQuantidadeFreada: z
    .string()
    .trim()
    .min(1, { message: 'Meta de quantidade freada é obrigatória' }),
  metaRPMmaximo: z
    .string()
    .trim()
    .min(1, { message: 'Meta RPM máxima é obrigatória' }),
  lerCosumo: z.string().trim().min(1, { message: 'Ler Consumo é obrigatória' })
});

const UpsertEquipamteForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      descricao: '',
      tipoEquipamento: '',
      placa: '',
      tipoHorimetro: '',
      tipoHodometro: '',
      capacidadeTanque: '',
      codigo: '',
      marcaModelo: '',
      gnssAndress: '',
      tagRFID: '',
      modulo: '',
      idSensorFadiga: '',
      modeloSensorFadiga: '',
      ativo: '',

      // ------------- segunda parte ------------- //

      tipoRastreador: '',
      parametroTanqueTelemetria: '',
      identificacaoRastreador: '',
      unidadeConsumoRastreador: '',
      unidadeHorimetroRastreador: '',
      conexaoBluetooth: '',
      imei: '',
      tipoBluethoothTelemetria: '',
      telemetriaBluetoothAdress: '',
      rpmMarchaLenta: '',
      rpmIdeal: '',
      metaConsumoCombustivel: '',
      metaTempoFaixaAmarela: '',
      metaTempoFaixaVermelha: '',
      metaQuantidadeFreadaBusca: '',
      metaQuantidadeFreada: '',
      metaRPMmaximo: '',
      lerCosumo: ''
    }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log('Form submitted:', values);
  };

  return (
    <DialogContent>
      <DialogTitle>Adicionar Equipamento</DialogTitle>
      <DialogDescription>
        Preencha os campos abaixo para adicionar um novo equipamento.
      </DialogDescription>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="descricao"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descrição</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="tipoEquipamento"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo de Equipamento</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione um tipo" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="option1">option1</SelectItem>
                    <SelectItem value="option2">option2</SelectItem>
                    <SelectItem value="option3">option3</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="placa"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Placa</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="tipoHorimetro"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo de Horimetro</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione um tipo" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="option1">option1</SelectItem>
                    <SelectItem value="option2">option2</SelectItem>
                    <SelectItem value="option3">option3</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="tipoHodometro"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo de Hodómetro</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione um tipo" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="option1">option1</SelectItem>
                    <SelectItem value="option2">option2</SelectItem>
                    <SelectItem value="option3">option3</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="capacidadeTanque"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Capacidade do tanque</FormLabel>
                <NumericFormat
                  value={field.value}
                  onValueChange={(values) => {
                    field.onChange(values.value);
                  }}
                  customInput={Input}
                  decimalScale={2}
                />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="codigo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Código</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="marcaModelo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Marca do modelo</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="gnssAndress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>GNSS Andress</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="tagRFID"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tag RFID</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="modulo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Módulo</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione um tipo" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="option1">option1</SelectItem>
                    <SelectItem value="option2">option2</SelectItem>
                    <SelectItem value="option3">option3</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="idSensorFadiga"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ID do sensor da fadiga</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="modeloSensorFadiga"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Modelo do sensor da fadiga</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione um tipo" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="option1">option1</SelectItem>
                    <SelectItem value="option2">option2</SelectItem>
                    <SelectItem value="option3">option3</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="ativo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ativo</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione um tipo" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="option1">option1</SelectItem>
                    <SelectItem value="option2">option2</SelectItem>
                    <SelectItem value="option3">option3</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <DialogTitle>Telemetria</DialogTitle>
          <FormField
            control={form.control}
            name="tipoRastreador"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo do rastreador</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione um tipo" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="option1">option1</SelectItem>
                    <SelectItem value="option2">option2</SelectItem>
                    <SelectItem value="option3">option3</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="parametroTanqueTelemetria"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Parâmetros do tanque telemetria</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="identificacaoRastreador"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Identificação do rastreador</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="unidadeConsumoRastreador"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Unidade de consumo do rastreador</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione um tipo" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="option1">option1</SelectItem>
                    <SelectItem value="option2">option2</SelectItem>
                    <SelectItem value="option3">option3</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="unidadeHorimetroRastreador"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Unidade horimetro do rastreador</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione um tipo" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="option1">option1</SelectItem>
                    <SelectItem value="option2">option2</SelectItem>
                    <SelectItem value="option3">option3</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="unidadeHorimetroRastreador"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Unidade horimetro do rastreador</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione um tipo" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="option1">option1</SelectItem>
                    <SelectItem value="option2">option2</SelectItem>
                    <SelectItem value="option3">option3</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="conexaoBluetooth"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Conexão Bluetooth</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione um tipo" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="option1">option1</SelectItem>
                    <SelectItem value="option2">option2</SelectItem>
                    <SelectItem value="option3">option3</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="imei"
            render={({ field }) => (
              <FormItem>
                <FormLabel>IMEI</FormLabel>
                <NumericFormat
                  value={field.value}
                  onValueChange={(values) => {
                    field.onChange(values.value);
                  }}
                  customInput={Input}
                  decimalScale={2}
                />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="tipoBluethoothTelemetria"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo de Bluethooth Telemetria</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione um tipo" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="option1">option1</SelectItem>
                    <SelectItem value="option2">option2</SelectItem>
                    <SelectItem value="option3">option3</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="telemetriaBluetoothAdress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telemetria Bluetooth Adress</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="rpmMarchaLenta"
            render={({ field }) => (
              <FormItem>
                <FormLabel>RPM Marcha lenta</FormLabel>
                <NumericFormat
                  value={field.value}
                  onValueChange={(values) => {
                    field.onChange(values.value);
                  }}
                  customInput={Input}
                  decimalScale={2}
                />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="rpmIdeal"
            render={({ field }) => (
              <FormItem>
                <FormLabel>RPM Ideal</FormLabel>
                <NumericFormat
                  value={field.value}
                  onValueChange={(values) => {
                    field.onChange(values.value);
                  }}
                  customInput={Input}
                  decimalScale={2}
                />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="metaConsumoCombustivel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Meta de consumo combustível</FormLabel>
                <NumericFormat
                  value={field.value}
                  onValueChange={(values) => {
                    field.onChange(values.value);
                  }}
                  customInput={Input}
                  decimalScale={2}
                />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="metaConsumoCombustivel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Meta de consumo combustível</FormLabel>
                <NumericFormat
                  value={field.value}
                  onValueChange={(values) => {
                    field.onChange(values.value);
                  }}
                  customInput={Input}
                  decimalScale={2}
                />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="metaTempoFaixaAmarela"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Meta de tempo faixa amarela</FormLabel>
                <NumericFormat
                  value={field.value}
                  onValueChange={(values) => {
                    field.onChange(values.value);
                  }}
                  customInput={Input}
                  decimalScale={2}
                />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="metaTempoFaixaVermelha"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Meta de tempo faixa vermelha</FormLabel>
                <NumericFormat
                  value={field.value}
                  onValueChange={(values) => {
                    field.onChange(values.value);
                  }}
                  customInput={Input}
                  decimalScale={2}
                />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="metaQuantidadeFreadaBusca"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Meta de quantidade de freada busca</FormLabel>
                <NumericFormat
                  value={field.value}
                  onValueChange={(values) => {
                    field.onChange(values.value);
                  }}
                  customInput={Input}
                  decimalScale={2}
                />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="metaQuantidadeFreada"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Meta de quantidade de freada</FormLabel>
                <NumericFormat
                  value={field.value}
                  onValueChange={(values) => {
                    field.onChange(values.value);
                  }}
                  customInput={Input}
                  decimalScale={2}
                />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="metaRPMmaximo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Meta de RPM máximo</FormLabel>
                <NumericFormat
                  value={field.value}
                  onValueChange={(values) => {
                    field.onChange(values.value);
                  }}
                  customInput={Input}
                  decimalScale={2}
                />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lerCosumo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ler consumo</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione um tipo" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="option1">option1</SelectItem>
                    <SelectItem value="option2">option2</SelectItem>
                    <SelectItem value="option3">option3</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <DialogFooter>
            <Button type="submit">Adicionar</Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  );
};

export default UpsertEquipamteForm;
