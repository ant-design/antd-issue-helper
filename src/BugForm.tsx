import * as React from "react";
import { Form, Row, Col, Input, Select } from "antd";
import { FormattedMessage } from "react-intl";
import I18n from "./I18n";

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
          <Form.Item
            name="version"
            label={
              <FormattedMessage id="issue.version" defaultMessage="Version" />
            }
            extra={
              <FormattedMessage
                id="issue.versionHelp"
                defaultMessage="Check if the issue is reproducible with the latest stable version."
              />
            }
          >
            <Select showSearch variant="filled">
              {versions.map((version) => (
                <Option key={version} value={version}>
                  {version}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col span={12} offset={1}>
          {/* react version */}
          <Form.Item
            name="react"
            rules={[{ required: true }]}
            label={<FormattedMessage id="issue.react" defaultMessage="React" />}
            extra={
              <FormattedMessage
                id="issue.reactHelp"
                defaultMessage="react/react-native version..."
              />
            }
          >
            <Input variant="filled" />
          </Form.Item>
        </Col>
      </Row>
    </Form.Item>

    <Form.Item>
      <Row>
        {/* System */}
        <Col span={11}>
          <Form.Item
            name="system"
            rules={[{ required: true }]}
            label={
              <FormattedMessage id="issue.system" defaultMessage="System" />
            }
            extra={
              <FormattedMessage
                id="issue.systemHelp"
                defaultMessage="System version..."
              />
            }
          >
            <Input variant="filled" />
          </Form.Item>
        </Col>

        {/* Browser */}
        <Col span={12} offset={1}>
          <Form.Item
            name="browser"
            rules={[{ required: true }]}
            label={
              <FormattedMessage id="issue.browser" defaultMessage="Browser" />
            }
            extra={
              <FormattedMessage
                id="issue.browserHelp"
                defaultMessage="Browser version..."
              />
            }
          >
            <Input variant="filled" />
          </Form.Item>
        </Col>
      </Row>
    </Form.Item>

    {/* ==================================== Reproduce ==================================== */}
    <Form.Item
      name="reproduction"
      rules={[
        {
          required: true,
          validator: async (rule, value) => {
            if (!value || value.includes("new-issue.ant.design")) {
              return Promise.reject("Please provide valid reproduction url");
            }
            return Promise.resolve();
          },
        },
      ]}
      label={
        <FormattedMessage
          id="issue.reproduction"
          defaultMessage="Link to minimal reproduction"
        />
      }
      extra={<I18n id="reproHelp" />}
    >
      <Input type="url" variant="filled" />
    </Form.Item>

    <Form.Item
      name="steps"
      rules={[{ required: true }]}
      label={
        <FormattedMessage id="issue.steps" defaultMessage="Step to reproduce" />
      }
      extra={<I18n id="stepsHelp" />}
    >
      <TextArea variant="filled" autoSize={{ minRows: 2 }} />
    </Form.Item>
    <Form.Item
      name="expected"
      rules={[{ required: true }]}
      label={
        <FormattedMessage
          id="issue.expected"
          defaultMessage="What is expected?"
        />
      }
    >
      <TextArea variant="filled" autoSize={{ minRows: 2 }} />
    </Form.Item>
    <Form.Item
      name="actual"
      rules={[{ required: true }]}
      label={
        <FormattedMessage
          id="issue.actually"
          defaultMessage="What is actually happening?"
        />
      }
    >
      <TextArea variant="filled" autoSize={{ minRows: 2 }} />
    </Form.Item>
    <Form.Item
      name="extra"
      label={
        <FormattedMessage
          id="issue.extra"
          defaultMessage="Any additional comments?(optional)"
        />
      }
      extra={
        <FormattedMessage
          id="issue.extraHelp"
          defaultMessage="e.g. some background/context of how you ran into this bug."
        />
      }
    >
      <TextArea variant="filled" autoSize={{ minRows: 2 }} />
    </Form.Item>
  </div>
);

export default BugForm;
