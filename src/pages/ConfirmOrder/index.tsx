import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { CoffesSelected } from '../../components/CoffesSelected';
import { Input } from '../../components/Input';
import { useCoffesContext } from '../../contexts/useCoffes';
import { sumCoffeValues } from '../../utils/formatValues';

import {
  CoffesSelectedSection,
  ConfirmItems,
  ConfirmOrderButton,
  ConfirmOrderContainer,
  DeliverySection,
  Field,
  FinisherOrderSection,
  FormWrapper,
  Payment,
  Title,
  Total,
} from './styles';
import zod from 'zod';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

enum FormPayments {
  MONEY = 'money',
  CREDIT_CARD = 'credit-card',
  DEBIT_CARD = 'debit-card',
}

const coffeDataSchema = zod.object({
  zipCode: zod.number().min(8, 'Ex.: 00000000'),
  number: zod.number().min(1),
  streetName: zod.string(),
  streetLine2: zod.string(),
  city: zod.string(),
  district: zod.string(),
  state: zod.string().max(2),
  payment: zod.string(),
});

type CoffeData = zod.infer<typeof coffeDataSchema>;

export function ConfirmOrder() {
  const [radioInputValue, setRadioInputValue] = useState<FormPayments>();
  const { coffes } = useCoffesContext();
  // const navigate = useNavigate();

  const coffeForm = useForm<CoffeData>({
    resolver: zodResolver(coffeDataSchema),
    defaultValues: {},
  });

  const { handleSubmit, register } = coffeForm;

  const handleCreateOrder = (data: CoffeData) => {
    console.log(data);
    // navigate('/confirmedOrder');
  };

  return (
    <ConfirmOrderContainer>
      <FormWrapper onSubmit={handleSubmit(handleCreateOrder)}>
        <FinisherOrderSection>
          <h3>Complete seu pedido</h3>
          <DeliverySection>
            <Title iconColor="yellowDark">
              <strong>
                <MapPinLine weight="regular" size={22} /> Endereço de Entrega
              </strong>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </Title>

            <Field>
              <Input placeholder="CEP" width={200} {...register('zipCode')} />
            </Field>

            <Field>
              <Input placeholder="Rua" {...register('streetName')} />
            </Field>

            <Field>
              <Input placeholder="Número" {...register('number')} />
              <Input placeholder="Complemento" {...register('streetLine2')} />
            </Field>

            <Field>
              <Input placeholder="Bairro" {...register('district')} />
              <Input placeholder="Cidade" {...register('city')} />
              <Input placeholder="UF" width={60} {...register('state')} />
            </Field>
          </DeliverySection>

          <Payment>
            <Title iconColor="purple">
              <strong>
                <CurrencyDollar weight="regular" size={22} /> Pagamento
              </strong>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </Title>

            <Field>
              <Input
                name="01"
                icon={<CreditCard />}
                value="credit-card"
                type="radio"
                checked={radioInputValue === FormPayments.CREDIT_CARD}
                label="Cartão de Credito"
                onChange={(e) =>
                  setRadioInputValue(e.target.value as FormPayments)
                }
              />
              <Input
                name="02"
                icon={<Bank />}
                value="money"
                type="radio"
                label="Dinheiro"
                checked={radioInputValue === FormPayments.MONEY}
                onChange={(e) =>
                  setRadioInputValue(e.target.value as FormPayments)
                }
              />
              <Input
                name="03"
                icon={<Money />}
                value="debit-card"
                type="radio"
                label="Cartão de Débito"
                checked={radioInputValue === FormPayments.DEBIT_CARD}
                onChange={(e) =>
                  setRadioInputValue(e.target.value as FormPayments)
                }
              />
            </Field>
          </Payment>
        </FinisherOrderSection>

        <CoffesSelectedSection>
          <h3>Cafés selecionados</h3>
          <ConfirmItems>
            <CoffesSelected />
            <Total>
              <span>Total de Itens</span>
              <span>{sumCoffeValues(coffes)}</span>
            </Total>
            <Total>
              <span>Entrega</span>
              <span>R$ 3,70</span>
            </Total>
            <Total>
              <strong>Total</strong>
              <strong>{sumCoffeValues(coffes)}</strong>
            </Total>
            <ConfirmOrderButton type="submit">
              Confirmar Pedido
            </ConfirmOrderButton>
          </ConfirmItems>
        </CoffesSelectedSection>
      </FormWrapper>
    </ConfirmOrderContainer>
  );
}
