import React from 'react';
import Page from '../components/page';

export default function NotFound() {
  return (
    <Page title="¯\_(ツ)_/¯">
      <h3 className="subheading">
        Page Not Found
      </h3>
      <p>
        There doesn&rsquo;t seem to be a page at this URL. If you got to this
        page by clicking a link from this site then shame on me. Otherwise,
        double check the URL for any typos or gremlins and try again, if you
        feel like it.
      </p>
    </Page>
  );
}
