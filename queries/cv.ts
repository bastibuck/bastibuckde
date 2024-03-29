export type CV = {
  _id: string;
  from: string; // Date
  to: string | null; // Date
  slug: string;
  description: string;
  details: unknown; // Sanity BlockContent Type
};

export type CVResult = Array<CV>;

export const cvQuery = `
  *[
    _type == "cv"
   ] {
    _id,
    from,
    to,
    "slug":slug.current,
    "description": coalesce(description[$locale], description.de),
    "details": select(
      *[_type=="options"]{forHire}[0].forHire => detailsI18n[$locale],
      null
    )
  } | order(from)
`;
