import * as React from "react";
import { Form, Input } from "antd";
import { FormattedMessage } from "react-intl";
import I18n from "./I18n";

const FormItem = Form.Item;
const { TextArea } = Input;

const FeatureForm: React.FC<{}> = () => (
  <div>
    <FormItem
      name="motivation"
      rules={[{ required: true }]}
      label={
        <FormattedMessage
          id="issue.motivation"
          defaultMessage="What problem does this feature solve?"
        />
      }
      help={<I18n id="motivationHelp" />}
    >
      <TextArea autoSize={{ minRows: 2 }} />
    </FormItem>
    <FormItem
      name="proposal"
      rules={[{ required: true }]}
      label={
        <FormattedMessage
          id="issue.proposal"
          defaultMessage="What does the proposed API look like?"
        />
      }
      help={<I18n id="proposalHelp" />}
    >
      <TextArea autoSize={{ minRows: 2 }} />
    </FormItem>
  </div>
);

export default FeatureForm;
