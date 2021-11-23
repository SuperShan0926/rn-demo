import type {Item} from '../types';

export const genFakeData: (count: number) => Item[] = count =>
  Array.from(new Array(count), (_, index) => ({
    tplName: `awesome template ${index + 1}`,
    tplDesc: `this is template-${index + 1}`,
    id: index,
  }));
