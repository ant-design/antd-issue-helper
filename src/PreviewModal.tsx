import * as React from "react";
import { Modal, Button } from "antd.macro";
import { FormattedMessage } from "react-intl";
import Remarkable from "remarkable";

const md = new Remarkable();

interface Props {
  visible: boolean;
  content: string;
  onCancel: () => any;
  onCreate: () => any;
}

const PreviewModal: React.FC<Props> = ({
  visible,
  content,
  onCancel,
  onCreate
}) => (
  <Modal
    title={
      <FormattedMessage
        id="previewModal.title"
        defaultMessage="Issue Preview"
      />
    }
    cancelText=""
    width="680px"
    visible={visible}
    onCancel={onCancel}
    footer={
      <Button onClick={onCreate} type="primary">
        <FormattedMessage id="issue.create" defaultMessage="Create" />
      </Button>
    }
  >
    <div
      className="paragraph"
      dangerouslySetInnerHTML={{ __html: md.render(content) }}
    />
  </Modal>
);

export default PreviewModal;
