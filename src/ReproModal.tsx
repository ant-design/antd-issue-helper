import * as React from "react";
import { Modal } from "antd";
import { FormattedMessage } from "react-intl";
import I18n from "./I18n";

interface Props {
  open: boolean;
  onCancel: () => any;
}

const ReproModal: React.FC<Props> = ({ open, onCancel }) => {
  return (
    <Modal
      title={
        <FormattedMessage
          id="repro.about"
          defaultMessage="About Reproductions"
        />
      }
      footer=""
      open={open}
      onCancel={onCancel}
      width="680px"
    >
      <I18n className="paragraph" id="reproModal" />
    </Modal>
  );
};

export default ReproModal;
