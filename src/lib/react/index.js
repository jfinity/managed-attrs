import React from "react";
import * as lib from "../index";

export * from "../index";
export const { useManagedAttrs } = {
  useManagedAttrs: lib.useManagedAttrs.bind({ React })
};
