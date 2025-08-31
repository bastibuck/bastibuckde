export type Skill = {
  _id: string;
  title: string;
  description: string | null;
};

export type SkillsResult = Array<Skill>;

export const skillsQuery = `
  *[
    _type == "skills" && !(_id in path("drafts.**"))
   ] {
    _id,
   "title": coalesce(title[$locale], title.de),
   "description": coalesce(description[$locale], description.de),
   order
  } | order(order)
`;
