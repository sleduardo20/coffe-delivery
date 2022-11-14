import {
  CicleIcon,
  ConfirmedOrderContainer,
  InfoOrder,
  InfoItem,
  SectionLeft,
  SectionRight,
} from './styles';
import imgDelivery from '../../assets/delivery.svg';
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';

export function ConfirmedOrder() {
  return (
    <ConfirmedOrderContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <h5>Agora é só aguardar que logo o café chegará até você</h5>
      <article>
        <SectionLeft>
          <InfoOrder>
            <InfoItem>
              <CicleIcon $color="purple">
                <MapPin weight="fill" />
              </CicleIcon>

              <p>
                Entregar em Rua Joao Daniel Matilele, 102 Farrapos - Porto
                Alegre, RS
              </p>
            </InfoItem>
            <InfoItem>
              <CicleIcon $color="yellow">
                <Timer weight="fill" />
              </CicleIcon>

              <p>
                Previsão de entrega <br /> <span>20 min - 30 min</span>
              </p>
            </InfoItem>

            <InfoItem>
              <CicleIcon $color="yellowDark">
                <CurrencyDollar />
              </CicleIcon>

              <p>
                Pagamento na entrega <br /> <span>Cartão de Crédito</span>
              </p>
            </InfoItem>
          </InfoOrder>
        </SectionLeft>
        <SectionRight>
          <img src={imgDelivery} alt="Imagem do entregador" />
        </SectionRight>
      </article>
    </ConfirmedOrderContainer>
  );
}
