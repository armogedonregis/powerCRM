import Link from "next/link";
import styled from "styled-components";
import tw from "twin.macro";
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import { Box, Button, ListItem, Typography } from '@mui/material';


const items = [
    {
        href: '/',
        icon: (<AnalyticsIcon fontSize="small" />),
        title: 'Дашборд'
    },
    {
        href: '/shop',
        icon: (<ShoppingCartIcon fontSize="small" />),
        title: 'Магазин'
    },
    {
        href: '/coming',
        icon: (<ImportExportIcon fontSize="small" />),
        title: 'Приход товара'
    },
    {
        href: '/products',
        icon: (<AccessibilityNewIcon fontSize="small" />),
        title: 'Остатки товара'
    },
    {
        href: '/stocks',
        icon: (<AccessibilityNewIcon fontSize="small" />),
        title: 'Склады'
    },
    {
        href: '/partners',
        icon: (<AccessibilityNewIcon fontSize="small" />),
        title: 'Контрагенты'
    },
    {
        href: '/clients',
        icon: (<AccessibilityNewIcon fontSize="small" />),
        title: 'Клиенты'
    },
    {
        href: '/finances',
        icon: (<AccessibilityNewIcon fontSize="small" />),
        title: 'Финансы'
    },
    {
        href: '/categories',
        icon: (<AccessibilityNewIcon fontSize="small" />),
        title: 'Справочник'
    },
    {
        href: '/users',
        icon: (<AccessibilityNewIcon fontSize="small" />),
        title: 'Пользователи'
    }
];


const Container = styled.nav`
${tw`
    flex flex-col flex-[1]
`}
`;

const Btn = styled.a`
${tw`
    text-xl
    text-white
    px-[10.5px]
    cursor-pointer
`}
`;

export const Sidebar: React.FC = () => {

  return (
    <Container>
        {items.map((item) => {
            return (

                <Link
                key={item.title}
                 href={item.href}><Button
                  component="a"
                  startIcon={item.icon}
                  disableRipple
                  sx={{
                    borderRadius: 1,
                    fontWeight:  'fontWeightBold',
                    justifyContent: 'flex-start',
                    px: 3,
                    textAlign: 'left',
                    textTransform: 'none',
                    width: '100%',
                    '& .MuiButton-startIcon': {
                      color:  'white'
                    },
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255, 0.08)'
                    }
                  }}
                ><Typography color={"white"}>{item.title}</Typography></Button></Link>
            )
        })}
    </Container>
  );
}
