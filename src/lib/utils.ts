const IMG_REPO = 'https://raw.githubusercontent.com/Mar-7th/StarRailRes/master';
export const img = (suffix: string) =>
  suffix.startsWith('/') ? IMG_REPO + suffix : IMG_REPO + '/' + suffix;
