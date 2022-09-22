import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={481}
    height={20}
    viewBox="0 0 481 20"
    backgroundColor="#1F1D2B"
    foregroundColor="#21202a"
    {...props}>
    <rect x="0" y="0" rx="8" ry="8" width="66" height="20" />
    <rect x="90" y="-1" rx="8" ry="8" width="74" height="20" />
    <rect x="188" y="0" rx="8" ry="8" width="62" height="20" />
    <rect x="270" y="0" rx="8" ry="8" width="56" height="20" />
    <rect x="348" y="0" rx="8" ry="8" width="70" height="20" />
  </ContentLoader>
);

export default MyLoader;
