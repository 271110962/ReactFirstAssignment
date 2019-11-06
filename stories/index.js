import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from '../src/components/header/';
import FilterControls from '../src/components/filterControls/';

storiesOf("Book Room/Header", module).add("default", () => (
    <Header noBooks={10} />
  ));    
storiesOf("Book Room/Filter Controls", module).add("default", () => (
    <FilterControls />
  )); 


