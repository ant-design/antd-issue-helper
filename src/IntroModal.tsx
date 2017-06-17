import React from 'react';
import { Modal } from 'antd';
import { FormattedMessage } from 'react-intl';
import I18n from './I18n';

export interface IntroModalProps {
  visible: boolean;
  onCancel: () => any;
}

export default function IntroModal({ visible, onCancel }: IntroModalProps) {
  return (
    <Modal
      title={
        <FormattedMessage
          id="intro.modal"
          defaultMessage="The reason behind our strict issue policy"
        />
      }
      footer=""
      visible={visible}
      onCancel={onCancel}
      width="680px"
    >
      <I18n className="paragraph" id="introModal" />
    </Modal>
  );
}
