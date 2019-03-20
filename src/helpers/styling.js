const cssVar = name => `var(--${name})`;

const pxToRem = fontSize => `${fontSize / 16}rem`;

export { cssVar, pxToRem };
