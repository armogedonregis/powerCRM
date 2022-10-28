import type { NextPage } from 'next';
import styled from 'styled-components';
import tw from 'twin.macro';
import { CardPrice } from '../components/cardPrice';
import Layout from '../components/layout';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { CashBox } from '../components/widget/cashbox';
import { Profit } from '../components/widget/profit';
import { DiagramArea } from '../components/widget/diagramArea';
import Container from '@mui/material/Container';


const FlexContainer = styled.div`
${tw`
  flex 
  justify-between
  mb-[30px]
`}
`;

const Contentn = styled.div`
${tw`
  flex
  justify-between
`}
`;

const Home: NextPage = () => {

  return (
    <Layout>
        <Container fixed>

  <FlexContainer>

          <CardPrice title={''} price={0} />
          <CardPrice cardBlue title={''} price={0} />
          <CardPrice cardGreen title={''} price={0} />
  </FlexContainer>
    <CashBox price={0} />
  <Contentn>
    <Profit price={0} />
    <DiagramArea price={0} />
  </Contentn>
        </Container>
    </Layout>
  )
}

export default Home
