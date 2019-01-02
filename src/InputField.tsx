import { Form, Input } from "antd";
import { Field, FormikProps } from "formik";
import * as React from "react";

export const InputField = (props: any) => (
  <Field {...props}>
    {({ field, form }: { field: any; form: FormikProps<any> }) => {
      const hasError = form.errors && form.errors[field.name.toLowerCase()];
      if (hasError) {
        return (
          <Form.Item
            label={props.label}
            validateStatus="error"
            hasFeedback={false}
            help={form.errors[field.name.toLowerCase()]}
          >
            <Input {...props} {...field} />
          </Form.Item>
        );
      }
      return <Input {...props} {...field} />;
    }}
  </Field>
);
