import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles'

import theme from '../theme'
import Layout from '../components/Layout';
import Directory from '../components/directory/Directory';
import DirectoryHero from '../components/directory/DirectoryHero';

export default function DirectoryPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <DirectoryHero/>
        <Directory />
      </Layout>
    </ThemeProvider>
  );
}
