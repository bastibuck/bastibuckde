import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import options from "./options";
import cv from "./cv";
import skills from "./skills";
import projects from "./projects";
import { i18nString, i18nText, i18nArrayBlock } from "./i18n";

export default createSchema({
  name: "bastibuckSchema",
  types: schemaTypes.concat([
    options,
    cv,
    skills,
    projects,
    i18nString,
    i18nText,
    i18nArrayBlock,
  ]),
});
