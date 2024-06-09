'use client';
import ThemeProvider from '@/components/theme/context/ThemeProvider';
import React from 'react';

const CSThemeProvider = ({ children }: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default CSThemeProvider;
