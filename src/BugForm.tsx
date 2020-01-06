import * as React from "react";
import { Form, Row, Col, Input, Select } from "antd";
import { FormattedMessage } from "react-intl";
import I18n from "./I18n";

const FormItem = Form.Item;
const { Option } = Select;
const { TextArea } = Input;

interface Props {
  versions: string[];
}

const BugForm: React.FC<Props> = ({ versions }) => (
  <div>
    {/* ==================================== Environment ==================================== */}
    <Form.Item>
      <Row>
        <Col span={11}>
          {/* antd version */}
          <FormItem
            name="version"
            label={
              <FormattedMessage id="issue.version" defaultMessage="Version" />
            }
            help={
              <FormattedMessage
                id="issue.versionHelp"
                defaultMessage="Check if the issue is reproducible with the latest stable version."
              />
            }
          >
            <Select showSearch={true}>
              {versions.map(version => (
                <Option value={version}>{version}</Option>
              ))}
            </Select>
          </FormItem>
        </Col>
        <Col span={12} offset={1}>
          {/* react version */}
          <FormItem
            name="react"
            rules={[{ required: true }]}
            label={<FormattedMessage id="issue.react" defaultMessage="React" />}
            help={
              <FormattedMessage
                id="issue.reactHelp"
                defaultMessage="react/react-native version..."
              />
            }
          >
            <Input />
          </FormItem>
        </Col>
      </Row>
    </Form.Item>

    <Form.Item>
      <Row>
        {/* System */}
        <Col span={11}>
          <FormItem
            name="system"
            rules={[{ required: true }]}
            label={
              <FormattedMessage id="issue.system" defaultMessage="System" />
            }
            help={
              <FormattedMessage
                id="issue.systemHelp"
                defaultMessage="System version..."
              />
            }
          >
            <Input />
          </FormItem>
        </Col>

        {/* Browser */}
        <Col span={12} offset={1}>
          <FormItem
            name="browser"
            rules={[{ required: true }]}
            label={
              <FormattedMessage id="issue.browser" defaultMessage="Browser" />
            }
            help={
              <FormattedMessage
                id="issue.browserHelp"
                defaultMessage="Browser version..."
              />
            }
          >
            <Input />
          </FormItem>
        </Col>
      </Row>
    </Form.Item>

    {/* ==================================== Reproduce ==================================== */}
    <FormItem
      name="reproduction"
      rules={[{ required: true }]}
      label={
        <FormattedMessage
          id="issue.reproduction"
          defaultMessage="Link to minimal reproduction"
        />
      }
      help={<I18n id="reproHelp" />}
    >
      <Input type="url" />
    </FormItem>

    <FormItem
      name="steps"
      rules={[{ required: true }]}
      label={
        <FormattedMessage id="issue.steps" defaultMessage="Step to reproduce" />
      }
      help={<I18n id="stepsHelp" />}
    >
      <TextArea autoSize={{ minRows: 2 }} />
    </FormItem>
    <FormItem
      name="expected"
      rules={[{ required: true }]}
      label={
        <FormattedMessage
          id="issue.expected"
          defaultMessage="What is expected?"
        />
      }
    >
      <TextArea autoSize={{ minRows: 2 }} />
    </FormItem>
    <FormItem
      name="actual"
      rules={[{ required: true }]}
      label={
        <FormattedMessage
          id="issue.actually"
          defaultMessage="What is actually happening?"
        />
      }
    >
      <TextArea autoSize={{ minRows: 2 }} />
    </FormItem>
    <FormItem
      name="extra"
      label={
        <FormattedMessage
          id="issue.extra"
          defaultMessage="Any additional comments?(optional)"
        />
      }
      help={
        <FormattedMessage
          id="issue.extraHelp"
          defaultMessage="e.g. some background/context of how you ran into this bug."
        />
      }
    >
      <TextArea autoSize={{ minRows: 2 }} />
    </FormItem>
  </div>
);

export default BugForm;
