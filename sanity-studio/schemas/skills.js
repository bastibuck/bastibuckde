const skills = {
  title: "Skills",
  name: "skills",
  type: "document",

  fields: [
    {
      title: "Title",
      name: "title",
      type: "i18nString",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Description",
      name: "description",
      type: "i18nText",
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
  ],

  orderings: [
    {
      title: "Order",
      name: "order",
      by: [{ field: "order", direction: "asc" }],
    },
  ],

  preview: {
    select: {
      title: "title.de",
    },
  },
};

export default skills;
