import React from 'react';
import { Form, Input } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';

const FormItem = Form.Item;

export interface FeatureFormProps {
  form: WrappedFormUtils;
}

export default function FeatureForm({ form }: FeatureFormProps) {
  const { getFieldDecorator } = form;

  return (
    <div>
      <FormItem
        label="What problem does this feature solve?"
        help={(
          <span>Explain your use case, context, and rationale behind this feature request. More importantly, what is the end user experience you are trying to build that led to the need for this feature?</span>
        )}
      >
        {getFieldDecorator('featureMotivation', {})(
          <Input type="textarea" autosize={{ minRows: 2 }} />
        )}
      </FormItem>
      <FormItem
        label="What does the proposed API look like?"
        help={(
          <span>Describe how you propose to solve the problem and provide code samples of how the API would work once implemented. Note that you can use <a href="https://guides.github.com/features/mastering-markdown/" target="_blank">Markdown</a> to format your code blocks.</span>
        )}
      >
        {getFieldDecorator('featureDetail', {})(
          <Input type="textarea" autosize={{ minRows: 2 }} />
        )}
      </FormItem>
    </div>
  );
}
