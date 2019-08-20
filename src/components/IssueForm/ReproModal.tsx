import * as React from 'react';
import { Button, Modal } from 'antd';
import { FormattedMessage } from 'umi-plugin-locale';
import I18n from '../I18n';

interface Props {
  visible: boolean;
  onCancel: () => any;
}

const ReproModal: React.FC<Props> = ({ visible, onCancel }) => {
  return (
    <Modal
      title={<FormattedMessage id="repro.about" defaultMessage="About Reproductions" />}
      footer={
        <Button type="primary" onClick={onCancel}>
          <FormattedMessage id="common.close" defaultMessage="Close" />
        </Button>
      }
      visible={visible}
      onCancel={onCancel}
      width="680px"
      bodyStyle={{ maxHeight: 400, overflowY: 'scroll' }}
    >
      <I18n className="paragraph" id="reproModal" />
    </Modal>
  );
};

export default ReproModal;
