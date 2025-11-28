import * as React from "react";
import { Form, Input } from "antd";
import { FormattedMessage } from "react-intl";
import I18n from "./I18n";

const FormItem = Form.Item;
const { TextArea } = Input;

const FeatureForm: React.FC<{}> = () => (
  <>
    <FormItem
      name="motivation"
      rules={[{ required: true }]}
      label={
        <FormattedMessage
          id="issue.motivation"
          defaultMessage="What problem does this feature solve?"
        />
      }
      extra={<I18n id="motivationHelp" />}
    >
      <TextArea variant="filled" autoSize={{ minRows: 2 }} />
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
      extra={<I18n id="proposalHelp" />}
    >
      <TextArea variant="filled" autoSize={{ minRows: 2 }} />
    </FormItem>
  </>
);

export default FeatureForm;
