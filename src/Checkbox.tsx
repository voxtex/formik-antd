import * as React from "react";
import { Checkbox as $Checkbox } from "antd";
import { Field, FieldProps } from "formik";
import { CheckboxProps } from "antd/lib/checkbox/Checkbox";
import { FormikFieldProps } from "./FieldProps";
import { CheckboxGroupProps } from "antd/lib/checkbox/Group";

export const Checkbox = ({ name, ...restProps }: FormikFieldProps & CheckboxProps) => (
  <Field name={name}>
    {({ field: { value, onChange } }: FieldProps) => (
      <$Checkbox
        name={name}
        checked={value}
        onChange={onChange}
        {...restProps}
      />
    )}
  </Field>
);

Checkbox.Group = ({ name, ...restProps }: FormikFieldProps & CheckboxGroupProps) => (
  <Field name={name}>
    {({ field: { value }, form: { setFieldValue } }: FieldProps) => (
      <$Checkbox.Group
        value={value}
        onChange={v => setFieldValue(name, v)}
        {...restProps}
      />
    )}
  </Field>
);
