import React from 'react';
import { Modal } from 'antd';
import { FormattedMessage } from 'react-intl';
import I18n from './I18n';

export interface ReproModalProps {
  visible: boolean;
  onCancel: () => any;
}

export default function ReproModal({ visible, onCancel }: ReproModalProps) {
  return (
    <Modal
      title={<FormattedMessage id="repro.about" defaultMessage="About Reproductions" />}
      footer=""
      visible={visible}
      onCancel={onCancel}
      width="680px"
    >
      <I18n className="paragraph" id="reproModal" />
    </Modal>
  );
};
