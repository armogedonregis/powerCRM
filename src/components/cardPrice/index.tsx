import styled from "styled-components";
import tw from "twin.macro";


const Container = styled.div<{
  cardBlue?: boolean;
  cardGreen?: boolean;
}>`
border: 9px solid ${({cardBlue, cardGreen}) => cardBlue ? '#259be8' :  cardGreen ? '#4eeb36' : '#EE0F43'};
background-color: ${({cardBlue, cardGreen}) => cardBlue ? 'rgba(42,154,238,.24)' : cardGreen ? 'rgba(54,235,78,.2)' : 'rgba(231,22,53,.2)'};
${tw`
    rounded-2xl
    flex-1
    mr-[20px]
    last:mr-[initial]
  `}
`;

const Text = styled.p`
${tw`
    select-none
    text-[27px]
    font-extrabold
    text-white
    last:after:content-[' $']
`}
`;

const Content = styled.div`
${tw`
    p-[1.5rem]
`}
`;

export const CardPrice: React.FC<{
    title: string;
    price: number;
    cardBlue?: boolean;
    cardGreen?: boolean;
}> = ({title, price, cardBlue, cardGreen}) => {

  return (
    <Container cardBlue={cardBlue} cardGreen={cardGreen}>
        <Content>
            <Text>{title}</Text>
            <Text>{price}</Text>
        </Content>
    </Container>
  );
}
