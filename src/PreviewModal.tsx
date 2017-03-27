import React from 'react';
import { Modal } from 'antd';

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
    <Modal title="Issue Preview" visible={visible}>
      <div dangerouslySetInnerHTML={{ __html: md.render(content )}} />
    </Modal>
  );
}
