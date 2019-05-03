import * as React from "react";
import { Modal } from "antd.macro";
import { FormattedMessage } from "react-intl";
import I18n from "./I18n";

interface Props {
  visible: boolean;
  onCancel: () => any;
}

const ReproModal: React.FC<Props> = ({ visible, onCancel }) => {
  return (
    <Modal
      title={
        <FormattedMessage
          id="repro.about"
          defaultMessage="About Reproductions"
        />
      }
      footer=""
      visible={visible}
      onCancel={onCancel}
      width="680px"
    >
      <I18n className="paragraph" id="reproModal" />
    </Modal>
  );
};

export default ReproModal;
