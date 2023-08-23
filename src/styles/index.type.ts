// import original module declarations
import 'solid-styled-components';

interface PartialTypography {
  fontSize: string;
  font: string;
}

interface TypographyVariants {
  fontFamily: string;
  fontWeight: number;
  extraSmall: Partial<PartialTypography>;
  small: Partial<PartialTypography>;
  medium: Partial<PartialTypography>;
  large: Partial<PartialTypography>;
}

// and extend them!
declare module 'solid-styled-components' {
  export interface DefaultTheme {
    colors: {
      common: {
        white: string;
        black: string;
      };
      primary: string;
      primaryDark: string;
      neutralDark: string;
      neutralMedium: string;
      neutralLight: string;
      neutralLighter: string;
      error: string;
    };
    typography: TypographyVariants;
  }
}
