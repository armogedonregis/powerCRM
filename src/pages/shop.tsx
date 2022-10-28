import type { NextPage } from 'next';
import styled from 'styled-components';
import tw from 'twin.macro';
import Layout from '../components/layout';
import { CardBuy } from '../components/widget/cardBuy';
import { TableShop } from '../components/widget/tableShop';


const FlexContainer = styled.div`
${tw`
  flex 
  justify-between
  mb-[30px]
`}
`;



const Shop: NextPage = () => {

  return (
    <Layout>
  <FlexContainer>

          <CardBuy title={''} num={0} />
          <CardBuy title={''} num={0} />
          <CardBuy title={''} num={0} />
          <CardBuy title={''} num={0} />
  </FlexContainer>
  <TableShop />
    </Layout>
  )
}

export default Shop
