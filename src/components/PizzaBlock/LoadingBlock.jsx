import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="135" cy="134" r="120" />
      <rect x="0" y="272" rx="3" ry="3" width="280" height="24" />
      <rect x="0" y="312" rx="6" ry="6" width="280" height="84" />
      <rect x="0" y="420" rx="3" ry="3" width="90" height="30" />
      <rect x="128" y="410" rx="24" ry="24" width="152" height="44" />
    </ContentLoader>
  );
}

export default LoadingBlock;
