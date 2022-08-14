const cv = {
  title: "CV",
  name: "cv",
  type: "document",

  fields: [
    {
      title: "From",
      name: "from",
      type: "date",
      options: {
        dateFormat: "DD.MM.YYYY",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "To",
      name: "to",
      type: "date",
      options: {
        dateFormat: "DD.MM.YYYY",
      },
    },
    {
      title: "Title",
      name: "title",
      type: "i18nString",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {},
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Description",
      name: "description",
      type: "i18nText",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Details",
      name: "details",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Details",
      name: "detailsI18n",
      type: "i18nArrayBlock",
    },
  ],
  orderings: [
    {
      title: "Datum, absteigend",
      name: "dateDesc",
      by: [{ field: "from", direction: "desc" }],
    },
    {
      title: "Datum, aufsteigend",
      name: "dateDesc",
      by: [{ field: "from", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title.de",
    },
  },
};

export default cv;
