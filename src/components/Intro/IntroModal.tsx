import * as React from 'react';
import { Button, Modal } from 'antd';
import { FormattedMessage } from 'umi-plugin-locale';
import I18n from '../I18n';

interface Props {
  visible: boolean;
  onCancel: () => any;
}

const IntroModal: React.FC<Props> = ({ visible, onCancel }) => (
  <Modal
    title={
      <FormattedMessage
        id="intro.modal"
        defaultMessage="The reason behind our strict issue policy"
      />
    }
    footer={
      <Button type="primary" onClick={onCancel}>
        <FormattedMessage id="common.close" defaultMessage="Close" />
      </Button>
    }
    visible={visible}
    onCancel={onCancel}
    width="680px"
  >
    <I18n className="paragraph" id="introModal" />
  </Modal>
);

export default IntroModal;
