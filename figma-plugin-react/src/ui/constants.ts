import type { Scale } from '@main/api/get-colors'

/**
 * The allowed deviation from the target contrast ratio.
 */
export const DELTA = 0.5;

/**
 * Target contrast ratios for each swatch level (100 to 1300).
 * These are sample values representing a typical design system progression.
 */
export const TARGET_CONTRASTS: Record<Scale, number> = {
  100: 1.05,
  200: 1.1,
  300: 1.3,
  400: 1.4,
  500: 1.7,
  600: 2,
  700: 3.25,
  800: 4.5,
  900: 7.57,
  1000: 10.7,
  1100: 14,
  1200: 15,
  1300: 16.29,
};

const kirylLight = {
  'neutral': ['#F8F8F8', '#F4F4F4', '#E1E1E1', '#D1D1D1', '#BEBEBE', '#ABABAB', '#767676', '#5E5E5E', '#464646', '#303030', '#1B1B1B', '#101010', '#080808'],
  'neutral-alt': ['#F8F9FD', '#F3F4F9', '#E0E1EB', '#CFD0DD', '#BDBCCF', '#AAA8C1', '#74739A', '#5A5986', '#43426E', '#2E2D4A', '#1A192A', '#0F0F1A', '#080710'],

  'accent': [ '#FAF7FE', '#F6F2FD', '#E9DCFA', '#DEC7FC', '#D3AFFB', '#C497F7', '#9A45FE', '#7B13F3', '#5C02C3', '#400289', '#270450', '#18072A', '#0E0419'],
  'accent-alt': ['#FFF5FD', '#FFF0FC', '#FED6F4', '#F9C0EA', '#FBA1E0', '#F783D1', '#D7259E', '#AC1C7E', '#841164', '#5C0252', '#34082E', '#22041F', '#150213'],

  'information': ['#FAFAFD', '#ECF6FB', '#CAE5FD', '#A7D6FE', '#7CC5FF', '#55B1FC', '#0378D7', '#0C5CB7', '#0B4393', '#0D2D67', '#071A3B', '#051023', '#030815'],
  'positive': ['#F1FCF3', '#E3F9E7', '#C3ECCA', '#92E39B', '#65D476', '#47C160', '#1D8832', '#156C27', '#175122', '#17361D', '#0B1F12', '#07120B', '#040905'],
  'caution': ['#FEF9E4', '#FDF4CD', '#FBE183', '#FACA47', '#FCAE16', '#F59400', '#C05902', '#9A4506', '#753405', '#4C2601', '#2B1602', '#190E01', '#0E0701'],
  'critical': ['#FFF6F8', '#FFF1F5', '#FED8D8', '#FFC2C2', '#FFA6A6', '#FD8989', '#E82121', '#BE0808', '#930101', '#680001', '#400004', '#2B0005', '#180003'],
}

const kirylDarkUpdated = {
  'neutral': ['#191919', '#1E1E1E', '#2B2B2B', '#363636', '#424242', '#505050', '#7D7D7D', '#989898', '#B7B7B7', '#D6D6D6', '#E8E8E8', '#F4F4F4', '#FFFFFF'],
  'neutral-alt': ['#181726', '#1C1B2B', '#292840', '#343352', '#3F3F64', '#4B4C77', '#7A799C', '#9896B2', '#B6B6C9', '#D2D2E0', '#E5E5EF', '#F4F4FA', '#FFFFFF'],

  'accent': ['#210640', '#2E154B', '#3C2457', '#553472', '#6E448D', '#8855A9', '#A367C5', '#B382EC', '#D98EFF', '#E4A9FF', '#EEC5FF', '#F6E0FF', '#FBF9FE'],
  'accent-alt': ['#2F0A29', '#350B2F', '#4F0B46', '#640D57', '#791660', '#90206A', '#D63FA3', '#E56FBF', '#F898D9', '#FECCEE', '#FCE6F5', '#FEF2FA', '#FFFFFF'],

  'information': ['#081835', '#091C3D', '#0F2959', '#13346E', '#134086', '#134E9E', '#207FD7', '#409EEE', '#75BEFB', '#BBDDFB', '#D9EDFD', '#EAF6FF', '#FFFFFF'],
  'positive': ['#0A1C11', '#0C2114', '#163010', '#1B3D21', '#1C4C25', '#1C5C28', '#2D8E3D', '#42AD56', '#64CC75', '#B0E6B6', '#D4F2D8', '#EAF9EC', '#FFFFFF'],
  'caution': ['#261404', '#2E1904', '#422306', '#542B08', '#6B330D', '#823C13', '#C3621B', '#E08123', '#F8A62D', '#FCD078', '#FDE6B0', '#FEF5D9', '#FFFFFF'],
  'critical': ['#3B0306', '#410406', '#5B0806', '#700006', '#861109', '#9F1610', '#E63D38', '#F46F6D', '#FB9E9D', '#F0CECD', '#FEE5E5', '#FFF2F2', '#FFFFFF'],
}

const defaultColors = {
  'neutral': ['#f8f8f8', '#f4f4f4', '#e1e1e1', '#d9d9d9', '#c6c6c6', '#b7b7b7', '#828282', '#6a6a6a', '#545454', '#3e3e3e', '#2b2b2b', '#262626', '#202020'],
  'neutral-alt': ['#f8f9fd', '#f3f4f9', '#e0e1eb', '#d8d8e4', '#c5c5d5', '#b6b5ca', '#807fa3', '#676690', '#504f7e', '#3b3a60', '#2a2944', '#26243c', '#1f1e31'],

  'accent': ['#faf7fe', '#f6f2fd', '#e9dcfa', '#e5d3fb', '#d9bafc', '#cea6fb', '#a45df9', '#8e27ff', '#6d0ae0', '#5101ad', '#3b027e', '#350370', '#2d035e'],
  'accent-alt': ['#fff5fd', '#fff0fc', '#fed6f4', '#fbccf0', '#f9b0e4', '#fc95db', '#de44ac', '#c31d8e', '#9b1971', '#750860', '#54044b', '#4a0642', '#3d0836'],

  'information': ['#f4fafd', '#ecf6fb', '#cae5fd', '#b9defd', '#8fccff', '#6dbeff', '#1185e3', '#0c69c8', '#0951a9', '#0e3a82', '#0c295f', '#0b2453', '#091e45'],
  'positive': ['#f1fcf3', '#e3f9e7', '#c3ecca', '#ade8b5', '#79dc84', '#59ce6f', '#24963b', '#177a2a', '#156124', '#194621', '#14311b', '#122c18', '#0d2414'],
  'caution': ['#fef9e4', '#fdf4cd', '#fbe183', '#fad665', '#fcbb2a', '#fba509', '#ce6602', '#ac4f02', '#8b3d08', '#652f02', '#462202', '#3d1f02', '#331a02'],
  'critical': ['#fff6f8', '#fff1f5', '#fed8d8', '#ffcdcd', '#ffb2b2', '#fe9d9d', '#f13f3f', '#d40e0f', '#ac0404', '#820000', '#600002', '#560003', '#490004'],
}

export const INITIAL_PALETTES: Record<string, string[]> = defaultColors;
