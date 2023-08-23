import { JSXElement, For } from 'solid-js';
import { styled } from 'solid-styled-components';

import { colors } from 'src/styles';

const Cards = styled.div`
  display: flex;
  gap: 10px;
  max-width: 600px;
  flex-wrap: wrap;
`;

const Card = styled.div<{ background: string }>`
  width: 150px;
  height: 150px;
  border-radius: 5px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  background-color: ${({ background }) => background || 'transparent'};
  padding: 10px;
`;

const CardText = styled.span`
  font: ${({ theme }) => theme?.typography.extraSmall.font};
  color: ${({ theme }) => theme?.colors.common.black};
  background-color: ${({ theme }) => theme?.colors.common.white};
  width: 85%;
  height: 40px;
  border-radius: 5px;
  padding: 5px;
`;

const Title = styled.h1`
  font: ${({ theme }) => theme?.typography.large.font};
  color: ${({ theme }) => theme?.colors.common.black};
`;

const Description = styled.p`
  font: ${({ theme }) => theme?.typography.small.font};
  color: ${({ theme }) => theme?.colors.common.black};
`;

interface CardComponentProps {
  background: string;
  children: JSXElement;
}

const CardComponent = (props: CardComponentProps) => <Card background={props.background}>{props.children}</Card>;

export const ColorPalette = () => (
  <>
    <Title>Color Palette</Title>
    <Description>Below is a list of all the available colors: </Description>
    <Cards>
      <For each={Object.entries(colors)}>
        {(color) => (
          <CardComponent background={color[1]}>
            <CardText>
              {color[0]}: {color[1]}
            </CardText>
          </CardComponent>
        )}
      </For>
    </Cards>
  </>
);
