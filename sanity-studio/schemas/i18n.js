export const i18nString = {
  title: "i18nString",
  name: "i18nString",
  type: "object",
  fields: [
    {
      title: "Deutsch",
      name: "de",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "English",
      name: "en",
      type: "string",
    },
  ],
};

export const i18nText = {
  title: "i18nText",
  name: "i18nText",
  type: "object",
  fields: [
    {
      title: "Deutsch",
      name: "de",
      type: "text",
    },
    {
      title: "English",
      name: "en",
      type: "text",
    },
  ],
};

export const i18nArrayBlock = {
  title: "i18nArrayBlock",
  name: "i18nArrayBlock",
  type: "object",
  fields: [
    {
      title: "Deutsch",
      name: "de",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "English",
      name: "en",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
