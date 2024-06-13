import React from 'react';
import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { Box,Typography,} from '@mui/material';
import Card from '@mui/material/Card';
import axios from '../../interceptor/interceptor';
import { getToken } from '../../hooks/token';


const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("-----------DASHBOARD-----------")

    if ( !getToken() ) {
      sessionStorage.clear();
      // document.cookie = `vas_authorization=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=${process.env.COOKIE_DOMAIN};`;
      // document.cookie = `marketplaceId=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=${process.env.COOKIE_DOMAIN};`;
      // document.cookie = `vas_logout=true; Path=/; domain=${process.env.COOKIE_DOMAIN};`;
      location.href = '/login';
      return;
    }
  }, [ ]);

  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 1,
          width: { sm: `calc(100vw)`, background: 'white' },
          marginLeft: { xs: 0, md: '22rem' },
          marginTop:'2rem'
        }}
      >
        <Card variant="elevation">
          <Typography align="center" fontSize={20} sx={{ marginTop: '50x' }}>
            DASHBOARD
          </Typography>

        </Card>
      </Box>
    </>
  );
};

export default Dashboard;
