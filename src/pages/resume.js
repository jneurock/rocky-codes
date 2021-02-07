import Layout from '../components/layout';
import React from 'react';
import { Helmet } from 'react-helmet';

export default function Resume() {
  return (
    <Layout>
      <Helmet title="rocky.codes - Resume" />
      <p>
        Note: This page will be something much different.
      </p>
    </Layout>
  );
}
