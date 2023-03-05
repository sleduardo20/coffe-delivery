import { useState } from 'react';
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react';
import { useForm } from 'react-hook-form';
import zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';

import { useCoffesContext } from '../../contexts/useCoffes';
import { sumCoffeValues } from '../../utils/formatValues';

import { CoffesSelected } from '../../components/CoffesSelected';
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

import Input from '../../components/Input';

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
  const navigate = useNavigate();

  const { handleSubmit, register } = useForm<CoffeData>({
    resolver: zodResolver(coffeDataSchema),
  });

  const onSubmit = async (data: CoffeData) => {
    console.log('data', data);

    navigate('/confirmedOrder');
  };

  return (
    <ConfirmOrderContainer>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
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
                icon={<CreditCard />}
                type="radio"
                checked={radioInputValue === FormPayments.CREDIT_CARD}
                label="Cartão de Credito"
                {...register('payment')}
                onChange={(e) =>
                  setRadioInputValue(e.target.value as FormPayments)
                }
              />
              <Input
                icon={<Bank />}
                type="radio"
                label="Dinheiro"
                checked={radioInputValue === FormPayments.MONEY}
                onChange={(e) =>
                  setRadioInputValue(e.target.value as FormPayments)
                }
              />
              <Input
                icon={<Money />}
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
