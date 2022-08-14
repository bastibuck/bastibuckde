export type OptionsResult = {
  forHire: boolean;
  typewriterWords: string[];
} | null;

export const optionsQuery = `
  *[
    _type == "options"
   ] {
    _id,
    forHire,
    "typewriterWords":  professions[][$locale]
  }[0]
`;
