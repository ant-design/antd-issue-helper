import React from 'react';
import { Modal, Button } from 'antd';

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
      title="Issue Preview"
      cancelText=""
      width="680px"
      visible={visible}
      onCancel={onCancel}
      footer={(
        <Button onClick={onCreate} type="primary">Create</Button>
      )}
    >
      <div className="paragraph" dangerouslySetInnerHTML={{ __html: md.render(content )}} />
    </Modal>
  );
}
