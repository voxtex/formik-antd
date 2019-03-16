import * as React from "react";
import { render } from "react-dom";
import {
  InputField,
  InputPasswordField,
  InputNumberField,
  SwitchField,
  TextAreaField,
  DatePickerField,
  DateTimeAsStringField,
  EnumStringEditor,
  ArrayEditor,
  FormikDebug
} from "@jbuschke/formik-antd";
import { Formik } from "formik";
import { Divider } from "antd";
import "./sample.css";
import "antd/dist/antd.css";

function App() {
  return (
    <div>
      <div className="Header">
        <h1>Formik + Ant Design</h1>
        <h2>Antd components that are connected to Formik</h2>
      </div>
      <Formik
        initialValues={{
          email: "sample@email.com",
          website: "github.com/jannikbuschke/formik-antd",
          password: "hidden",
          index: 5,
          dollars: 1,
          applyForNewsletter: false,
          description: "lorem ipsum",
          date: null
        }}
      >
        <div className="split">
          <div>
            <h3>Simple fields</h3>
            <div className="field-container">
              <span>InputField</span>
              <InputField name="email" />
              <span>with InputProps</span>
              <InputField name="website" addonBefore="https://" />
              <span>PasswordInputField</span>
              <InputPasswordField name="password" />
              <span>TextAreaField</span>
              <TextAreaField name="description" />
              <span>InputNumberField</span>
              <InputNumberField name="index" />
              <span>Field with formatter</span>
              <InputNumberField
                name="dollars"
                formatter={value => `$ ${value}`}
              />
              <span>SwitchField</span>
              <div>
                <SwitchField name="applyForNewsletter" />
              </div>
              <span>DateField</span>
              <DatePickerField name="date" />
              <h3 style={{ gridColumnStart: 1, gridColumnEnd: 3 }}>
                Lists and enums
              </h3>
              <span>RadioGroupField</span>
              <EnumStringEditor
                name="enumString"
                dataSource={[
                  { displayName: "Val 1", value: "val1" },
                  { displayName: "5", value: 5 }
                ]}
              />
            </div>
          </div>
          <Divider type="vertical" style={{ height: "100%" }} />
          <div>
            <FormikDebug />
          </div>
        </div>
      </Formik>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
