import * as React from "react";
import { Form, Input } from "antd.macro";
import { WrappedFormUtils } from "antd/lib/form/Form";
import { FormattedMessage } from "react-intl";
import I18n from "./I18n";

const FormItem = Form.Item;
const { TextArea } = Input;

interface Props {
  form: WrappedFormUtils;
}

const FeatureForm: React.FC<Props> = ({ form: { getFieldDecorator } }) => (
  <div>
    <FormItem
      label={
        <FormattedMessage
          id="issue.motivation"
          defaultMessage="What problem does this feature solve?"
        />
      }
      help={<I18n id="motivationHelp" />}
    >
      {getFieldDecorator("motivation", {
        rules: [{ required: true }]
      })(<TextArea autosize={{ minRows: 2 }} />)}
    </FormItem>
    <FormItem
      label={
        <FormattedMessage
          id="issue.proposal"
          defaultMessage="What does the proposed API look like?"
        />
      }
      help={<I18n id="proposalHelp" />}
    >
      {getFieldDecorator("proposal", {
        rules: [{ required: true }]
      })(<TextArea autosize={{ minRows: 2 }} />)}
    </FormItem>
  </div>
);

export default FeatureForm;
