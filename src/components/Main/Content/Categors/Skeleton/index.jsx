import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={36}
    height={17}
    viewBox="0 0 36 17"
    backgroundColor="#1F1D2B"
    foregroundColor="#21202a"
    {...props}>
    <rect x="0" y="-1" rx="8" ry="8" width="32" height="17" />
  </ContentLoader>
);

export default MyLoader;
