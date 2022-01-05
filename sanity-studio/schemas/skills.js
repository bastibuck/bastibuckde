const skills = {
  title: "Skills",
  name: "skills",
  type: "document",

  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Description",
      name: "description",
      type: "text",
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
};

export default skills;
