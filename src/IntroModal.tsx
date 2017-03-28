import React from 'react';
import { Modal } from 'antd';
import I18n from './I18n';

const styles: any = require('./IntroModal.less');


export interface IntroModalProps {
  visible: boolean;
  onCancel: () => any;
}

export default function IntroModal({ visible, onCancel }: IntroModalProps) {
  return (
    <Modal
      title="The reason behind our strict issue policy"
      footer=""
      visible={visible}
      onCancel={onCancel}
      width="680px"
    >
      <I18n className={styles.policy} id="introModal" />
    </Modal>
  );
};
