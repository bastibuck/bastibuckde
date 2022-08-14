const projects = {
  title: "Projekte",
  name: "project",
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
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Image",
      name: "image",
      type: "image",
      fields: [
        {
          name: "alternativText",
          type: "i18nString",
          title: "Alt-Text",
          options: {
            isHighlighted: true,
          },
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      title: "Link",
      name: "href",
      type: "url",
      validation: (Rule) => Rule.uri(),
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

export default projects;
