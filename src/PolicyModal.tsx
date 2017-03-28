import React from 'react';
import { Modal } from 'antd';

const styles: any = require('./PolicyModal.less');

export interface PolicyModalProps {
  visible: boolean;
  onCancel: () => any;
}

export default function PolicyModal({ visible, onCancel }: PolicyModalProps) {
  return (
    <Modal
      title="The reason behind our strict issue policy"
      footer=""
      visible={visible}
      onCancel={onCancel}
      width="680px"
    >
      <div className={styles.policy}>
        <p>As a free and open source project, Ant Design also has limited maintainer bandwidth. That means the only way to ensure the project's sustainability is to:</p>
        <ol>
          <li>Prioritize more concrete work (bug fixes and new features);</li>
          <li>Improve issue triaging efficiency.</li>
        </ol>
        <p>For (1), we have decided to use the GitHub issue lists exclusively for work that has well-defined, actionable goals. Questions and open ended discussions should be posted to mediums that are better suited for them.</p>
        <p>For (2), we have found that issues that do not provide proper information upfront usually results in terribly inefficient back-and-forth communication just to extract the basic information needed for actual triaging. This is exactly why we have created this app: to ensure that every issue is created with the necessary information, and to save time on both sides.</p>
      </div>
    </Modal>
  );
}
