import { lazy } from 'react';

export const createAsyncComponent = componentName => {
  return lazy(() => {
    return import(`./${componentName}`).then(module => {
      return {
        ...module,
        default: module[componentName],
      };
    });
  });
};

export const createAsyncDefaultComponent = componentName => {
  return lazy(() => {
    return import(`./${componentName}`)
  });
};

