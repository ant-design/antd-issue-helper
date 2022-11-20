import * as React from "react";
import { Modal } from "antd";
import { FormattedMessage } from "react-intl";
import I18n from "./I18n";

interface IntroModalProps {
  open: boolean;
  onCancel: () => any;
}

const IntroModal: React.FC<IntroModalProps> = ({ open, onCancel }) => (
  <Modal
    title={
      <FormattedMessage
        id="intro.modal"
        defaultMessage="The reason behind our strict issue policy"
      />
    }
    footer=""
    open={open}
    onCancel={onCancel}
    width={680}
  >
    <I18n className="paragraph" id="introModal" />
  </Modal>
);

export default IntroModal;
