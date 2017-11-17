import * as React from 'react';
import { Modal, Button } from 'antd';
import { FormattedMessage } from 'react-intl';

const Remarkable: any = require('remarkable');
const md = new Remarkable();

export interface PreviewModalProps {
  visible: boolean;
  content: string;
  onCancel: () => any;
  onCreate: () => any;
}

export default function PreviewModal({
  visible,
  content,
  onCancel,
  onCreate,
}: PreviewModalProps) {
  return (
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
      footer={(
        <Button onClick={onCreate} type="primary">
          <FormattedMessage id="issue.create" defaultMessage="Create" />
        </Button>
      )}
    >
      <div
        className="paragraph"
        dangerouslySetInnerHTML={{ __html: md.render(content) }}
      />
    </Modal>
  );
}
