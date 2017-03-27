import React from 'react';
import { Form, Col, Input, Select } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';

const FormItem = Form.Item;
const { Option } = Select;

export interface BugFormProps {
  form: WrappedFormUtils;
  versions: string[];
  similarIssues: any[];
}

export default function BugForm({ form, versions, similarIssues }: BugFormProps) {
  const { getFieldDecorator } = form;

  return (
    <div>
      <FormItem>
        <Col span={11}>
          <FormItem
            label="Version"
            help="Check if the issue is reproducible with the latest stable version."
          >
            {getFieldDecorator('version', {
              initialValue: versions[0],
            })(
              <Select showSearch={true}>
                {versions.map(version =>
                  <Option key={version}>{version}</Option>
                )}
              </Select>
            )}
          </FormItem>
        </Col>
        <Col span={12} offset={1}>
          <FormItem
            label="Link to minimal reproduction"
            help={(
              <span>
                Please provide a online demo by forking this <a href="http://codepen.io/benjycui/pen/KgPZrE?editors=001" target="_blank">Codepen</a> or GitHub repo.
              </span>
            )}
          >
            {getFieldDecorator('reproduce', {})(
              <Input />
            )}
          </FormItem>
        </Col>
      </FormItem>
      <FormItem
        label="Step to reproduce"
        help={(
          <span>
            Clear and concise reproduction instructions are important for us to be able to triage your issue in a timely manner. Note that you can use <a href="https://guides.github.com/features/mastering-markdown/" target="_blank">Markdown</a> to format lists and code.
          </span>
        )}
      >
        <Input type="textarea" autosize={{ minRows: 2 }} />
      </FormItem>
      <FormItem label="What is expected?">
        <Input type="textarea" autosize={{ minRows: 2 }} />
      </FormItem>
      <FormItem label="What is actually happening?">
        <Input type="textarea" autosize={{ minRows: 2 }} />
      </FormItem>
      <FormItem
        label="Any additional comments?(optional)"
        help="e.g. some background/context of how you ran into this bug."
      >
        <Input type="textarea" autosize={{ minRows: 2 }} />
      </FormItem>
    </div>
  );
}
