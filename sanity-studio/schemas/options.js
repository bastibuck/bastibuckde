const options = {
  title: "Options",
  name: "options",
  type: "document",

  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "TypeWriter words",
      name: "typewriterWords",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Looking for a new job?",
      name: "forHire",
      type: "boolean",
      initialValue: false,
    },
  ],
};

export default options;
