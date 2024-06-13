
import { Box, Typography, Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { getFromLocalStorage } from '@vas-mkt-scope/liverpool-vas-npm-images-base/LocalStorageEncrypt';
import Card from '@mui/material/Card';

export default function Manual() {

  useEffect( async () => {
    console.log("-------------MANUAL------------")

  }, []);

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
            MANUAL
          </Typography>

        </Card>
      </Box>
    </>
  );
}
