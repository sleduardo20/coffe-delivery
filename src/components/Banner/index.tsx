import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import {
  BannerImage,
  ContentBanner,
  BannerContainer,
  Info,
  SkillItem,
  Skills,
} from './styles';

import bannerImage from '../../assets/homePageImagem.png';

export function Banner() {
  return (
    <BannerContainer>
      <ContentBanner>
        <Info>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h4>
            Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h4>

          <Skills>
            <SkillItem backgroundColor="yellowDark">
              <div>
                <ShoppingCart weight="fill" size={16} />
              </div>
              <span>Compra simples e segura</span>
            </SkillItem>
            <SkillItem backgroundColor="text">
              <div>
                <Package weight="fill" />
              </div>
              <span>Compra simples e segura</span>
            </SkillItem>
            <SkillItem backgroundColor="yellow">
              <div>
                <Timer weight="fill" />
              </div>
              <span>Compra simples e segura</span>
            </SkillItem>
            <SkillItem backgroundColor="purple">
              <div>
                <Coffee weight="fill" />
              </div>
              <span>Compra simples e segura</span>
            </SkillItem>
          </Skills>
        </Info>
        <BannerImage src={bannerImage} />
      </ContentBanner>
    </BannerContainer>
  );
}
