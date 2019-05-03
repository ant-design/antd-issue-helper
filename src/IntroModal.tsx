import * as React from "react";
import { Modal } from "antd.macro";
import { FormattedMessage } from "react-intl";
import I18n from "./I18n";

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
    footer=""
    visible={visible}
    onCancel={onCancel}
    width="680px"
  >
    <I18n className="paragraph" id="introModal" />
  </Modal>
);

export default IntroModal;
