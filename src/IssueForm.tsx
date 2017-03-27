import React from 'react';
import { Form, Col, Input } from 'antd';

const FormItem = Form.Item;

export default class IssueForm extends React.Component<{}, null> {
  render() {
    return (
      <Form layout="horizontal">
        <FormItem label="Title">
          <Input />
        </FormItem>
        <FormItem>
          <Col span={5}>
            <FormItem label="Version">
              <Input />
            </FormItem>
          </Col>
          <Col span={18} offset={1}>
            <FormItem label="Link to minimal reproduction">
              <Input />
            </FormItem>
          </Col>
        </FormItem>
        <FormItem label="Step to reproduce">
          <Input type="textarea" />
        </FormItem>
        <FormItem label="What is expected?">
          <Input type="textarea" />
        </FormItem>
        <FormItem label="What is actually happening?">
          <Input type="textarea" />
        </FormItem>
        <FormItem label="Any additional comments?(optional)">
          <Input type="textarea" />
        </FormItem>
      </Form>
    );
  }
}
