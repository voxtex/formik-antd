import { Field } from "formik";
import * as React from "react";

export const FormikDebug = () => (
  <Field>{({ form }: any) => <pre>{JSON.stringify(form, null, 2)}</pre>}</Field>
);
