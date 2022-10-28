import styled from "styled-components";
import tw from "twin.macro";


const Container = styled.div`
background-color: #292929;
${tw`
    rounded-2xl
    mb-[30px]
  `}
`;

const Title = styled.h2`
${tw`
    text-white
    font-medium
    pl-[1.5rem]
    pt-[1.5rem]
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

const WidgetContainer = styled.div`
${tw`
    flex
`}
`;

const Content = styled.div`
${tw`
    p-[1.5rem]
`}
`;

export const CashBox: React.FC<{
    price: number;
}> = ({price}) => {

  return (
    <Container>
        <Title>Касса</Title>
        <WidgetContainer>
            <Content>
                <Text>Доллары</Text>
                <Text>{price}</Text>
            </Content>
            <Content>
                <Text>Гривны</Text>
                <Text>{price}</Text>
            </Content>
        </WidgetContainer>
    </Container>
  );
}
