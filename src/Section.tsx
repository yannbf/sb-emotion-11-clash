import React from 'react';
import styled from '@emotion/styled';

import { defaultColors, defaultSizes } from './theme';

type SectionProps = {
  height?: string;
  backgroundColor?: string;
};

export const Section = styled.section`
  height: ${(props: SectionProps) => props.height || defaultSizes.height};
  background-color: ${(props: SectionProps) => props.backgroundColor || defaultColors.primary};
`;

export const Polygon: React.FC = ({ children }) => {
  return <Section>{children}</Section>;
};
