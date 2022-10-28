import styled from "styled-components";
import tw from "twin.macro";


const Container = styled.div`
background-color: #292929;
${tw`
    rounded-2xl
    flex-1
    mr-[20px]
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

export const CardBuy: React.FC<{
    title: string;
    num: number;
}> = ({title, num}) => {

  return (
    <Container>
        <Content>
            <Text>{num}</Text>
            <Text>{title}</Text>
        </Content>
    </Container>
  );
}
