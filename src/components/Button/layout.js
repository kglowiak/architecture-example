import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { cssVar, pxToRem } from 'helpers/styling';

const colors = {
  primary: 'primary',
  secondary: 'secondary',
};

const colorMap = {
  [colors.primary]: css`
    background-color: ${cssVar('purple')};
    color: ${cssVar('white')};
    border: none;

    :hover {
      background-color: ${cssVar('purpleLight')};
    }

    :active {
      background-color: ${cssVar('purpleDark')};
    }
  `,
  [colors.secondary]: css`
    border: 2px solid ${cssVar('mercury')};
    background-color: ${cssVar('white')};
    color: ${cssVar('purpleDark')};
    
    :hover {
    background-color: ${cssVar('alabaster')};
    }
    
    :active {
    background-color: ${cssVar('wildSand')};
  `,
};

const ButtonBase = ({ className, label, onClick, ...props }) => (
  <button onClick={onClick} className={className} {...props}>
    {label}
  </button>
);

const ButtonLayout = styled(ButtonBase)`
  font-size: ${pxToRem(14)};
  padding: 10px 15px;
  min-width: 180px;
  min-height: 33px;
  cursor: pointer;
  font-weight: 700;
  outline: none;

  :disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }

  ${({ color }) => colorMap[color]};
`;

ButtonLayout.propTypes = {
  color: PropTypes.oneOf([colors.primary, colors.secondary]),
  label: PropTypes.string.isRequired,
};

ButtonLayout.defaultProps = {
  color: colors.primary,
};

export { ButtonLayout };
