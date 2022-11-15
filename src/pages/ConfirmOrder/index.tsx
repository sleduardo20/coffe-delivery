import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CoffesSelected } from '../../components/CoffesSelected';
import { Input } from '../../components/Input';
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

enum FormPayments {
  MONEY = 'money',
  CREDIT_CARD = 'credit-card',
  DEBIT_CARD = 'debit-card',
}

export function ConfirmOrder() {
  const [radioInputValue, setRadioInputValue] = useState<FormPayments>();
  const navigate = useNavigate();

  const createOrder = () => {
    navigate('/confirmedOrder');
  };

  return (
    <ConfirmOrderContainer>
      <FormWrapper onSubmit={createOrder}>
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
              <Input placeholder="CEP" width={200} />
            </Field>

            <Field>
              <Input placeholder="Rua" />
            </Field>

            <Field>
              <Input placeholder="Número" type="number" />
              <Input placeholder="Complemento" />
            </Field>

            <Field>
              <Input placeholder="Bairro" />
              <Input placeholder="Cidade" />
              <Input placeholder="UF" width={60} />
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
                name="typePayment"
                value="credit-card"
                type="radio"
                checked={radioInputValue === FormPayments.CREDIT_CARD}
                label="Cartão de Credito"
                onChange={(e) =>
                  setRadioInputValue(e.target.value as FormPayments)
                }
              />
              <Input
                icon={<Bank />}
                name="typePayment"
                value="money"
                type="radio"
                label="Dinheiro"
                checked={radioInputValue === FormPayments.MONEY}
                onChange={(e) =>
                  setRadioInputValue(e.target.value as FormPayments)
                }
              />
              <Input
                icon={<Money />}
                name="typePayment"
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
              <span>R$ 29,70</span>
            </Total>
            <Total>
              <span>Entrega</span>
              <span>R$ 3,70</span>
            </Total>
            <Total>
              <strong>Total</strong>
              <strong>R$ 3,70</strong>
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
