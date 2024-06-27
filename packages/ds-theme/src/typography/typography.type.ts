import { typo } from "@alphaca-lab/ds-token";

export type TypographyType = {
  fontSize: keyof typeof typo.fontSize;
  fontWeight: keyof typeof typo.fontWeight;
  lineHeight: keyof typeof typo.lineHeight;
};
