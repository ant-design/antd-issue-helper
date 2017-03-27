import React from 'react';
import { Form, Col, Input, Select, Button } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import debounce from 'lodash.debounce';
import * as api from './api';

const styles: any = require('./IssueForm.less');
const FormItem = Form.Item;
const { Option } = Select;

export interface IssueFormProps {
  form: WrappedFormUtils;
};

export interface IssueFormState {
  versions: string[];
  similarIssues: any[];
};

class IssueForm extends React.Component<IssueFormProps, IssueFormState> {
  constructor(props: IssueFormProps) {
    super(props);

    this.state = {
      versions: [],
      similarIssues: [],
    };

    this.handleTitleChange = debounce(this.handleTitleChange, 500);
  }

  componentDidMount() {
    this.fetchVerions('ant-design');
  }

  fetchVerions(repo: string) {
    api.fetchVersions(repo)
       .then((versions: string[]) => this.setState({ versions }));
  }

  fetchIssues() {
    const { form } = this.props;
    const repo = form.getFieldValue('repo');
    const title = form.getFieldValue('title');
    api.fetchIssues(repo, title)
       .then(issues => this.setState({ similarIssues: issues }));
  }

  handleRepoChange = (repo: string) => {
    this.fetchVerions(repo);
  }

  handleTitleChange = () => {
    this.fetchIssues();
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { versions, similarIssues } = this.state;

    return (
      <Form layout="horizontal">
        <FormItem>
           <Col span={11}>
              <FormItem label="I am opening an issue for">
                {getFieldDecorator('repo', {
                  initialValue: 'ant-design',
                })(
                  <Select onChange={this.handleRepoChange}>
                    <Option key="ant-design">antd</Option>
                    <Option key="ant-design-mobile">antd-mobile</Option>
                  </Select>
                )}
              </FormItem>
           </Col>
           <Col span={12} offset={1}>
              <FormItem label="This is a">
                {getFieldDecorator('type', {
                  initialValue: 'bug',
                })(
                  <Select>
                    <Option key="bug">Bug Report</Option>
                    <Option key="feature">Feature Request</Option>
                  </Select>
                )}
              </FormItem>
           </Col>
        </FormItem>
        <FormItem label="Title">
          {getFieldDecorator('title', {})(
            <Input onChange={this.handleTitleChange}/>
          )}
        </FormItem>
        {similarIssues.length > 0 &&
          <FormItem>
            <h3>Similar Issues:</h3>
            <ul>
              {similarIssues.map(issue =>
                <li key={issue.id}>
                  <a href={issue.html_url} target="_blank" rel="noreferer noopener">{issue.title}</a>
                </li>
              )}
            </ul>
          </FormItem>
        }
        <FormItem>
          <Col span={5}>
            <FormItem label="Version">
              {getFieldDecorator('version', {
                initialValue: versions[0],
              })(
                <Select showSearch>
                  {versions.map(version =>
                    <Option key={version}>{version}</Option>
                  )}
                </Select>
              )}
            </FormItem>
          </Col>
          <Col span={18} offset={1}>
            <FormItem label="Link to minimal reproduction">
              {getFieldDecorator('reproduce', {})(
                <Input />
              )}
            </FormItem>
          </Col>
        </FormItem>
        <FormItem label="Step to reproduce">
          <Input type="textarea" autosize={{ minRows: 2 }} />
        </FormItem>
        <FormItem label="What is expected?">
          <Input type="textarea" autosize={{ minRows: 2 }} />
        </FormItem>
        <FormItem label="What is actually happening?">
          <Input type="textarea" autosize={{ minRows: 2 }} />
        </FormItem>
        <FormItem label="Any additional comments?(optional)">
          <Input type="textarea" autosize={{ minRows: 2 }} />
        </FormItem>
        <FormItem>
          <div className={styles.submitBtn}>
            <Button type="primary" htmlType="submit" size="large">Preview</Button>
          </div>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(IssueForm);
