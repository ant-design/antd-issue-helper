import React from 'react';
import { Form, Col, Input, Select, Button } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import debounce from 'lodash.debounce';
import * as api from './api';
import BugForm from './BugForm';
import FeatureForm from './FeatureForm';
import PreviewModal from './PreviewModal';
import createPreview from './createPreview';

const styles: any = require('./IssueForm.less');
const FormItem = Form.Item;
const { Option } = Select;

export interface IssueFormProps {
  form: WrappedFormUtils;
};

export interface IssueFormState {
  versions: string[];
  similarIssues: any[];
  preview: boolean;
};

class IssueForm extends React.Component<IssueFormProps, IssueFormState> {
  constructor(props: IssueFormProps) {
    super(props);

    this.state = {
      versions: [],
      similarIssues: [],
      preview: false,
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

  handlePreview = () => {
    this.setState({ preview: true });
  }

  render() {
    const { form } = this.props;
    const { versions, similarIssues, preview } = this.state;
    const { getFieldDecorator, getFieldValue } = form;
    const issueType = getFieldValue('type');
    const content = createPreview(issueType, form.getFieldsValue());

    const similarIssuesList = (
      <FormItem>
        <h3>Similar Issues:</h3>
        <ul>
          {similarIssues.map(issue => (
            <li key={issue.id}>
              <a href={issue.html_url} target="_blank" rel="noreferer noopener">{issue.title}</a>
            </li>
          ))}
        </ul>
      </FormItem>
    );

    return (
      <Form layout="horizontal">
        <PreviewModal
          visible={preview} content={content}
        />
        <FormItem>
           <Col span={11}>
              <FormItem
                label="I am opening an issue for"
                help="Please make sure to file the issue at appropriate repo."
              >
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
        {similarIssues.length > 0 && similarIssuesList}
        {issueType === 'bug' ? (
          <BugForm
            form={form}
            versions={versions}
            similarIssues={similarIssues}
          />
        ) : (
          <FeatureForm form={form} />
        )}
        <FormItem>
          <div className={styles.submitBtn}>
            <Button type="primary" size="large" onClick={this.handlePreview}>Preview</Button>
          </div>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(IssueForm);
