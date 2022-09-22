import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={192}
    height={260}
    viewBox="0 0 192 260"
    backgroundColor="#1F1D2B"
    foregroundColor="#21202a"
    {...props}>
    <rect x="0" y="33" rx="16" ry="16" width="192" height="227" />
    <circle cx="96" cy="61" r="61" />
  </ContentLoader>
);

export default Skeleton;
