import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import options from "./options";
import cv from "./cv";
import skills from "./skills";

export default createSchema({
  name: "kochrundeSchema",
  types: schemaTypes.concat([options, cv, skills]),
});
