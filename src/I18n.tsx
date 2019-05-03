import * as React from "react";
import { importMDX } from "mdx.macro";
import LocaleContext from "./LocaleContext";

const texts: any = {
  en: {
    intro: importMDX.sync("./locales/en/intro.md"),
    introModal: importMDX.sync("./locales/en/introModal.md"),
    motivationHelp: importMDX.sync("./locales/en/motivationHelp.md"),
    proposalHelp: importMDX.sync("./locales/en/proposalHelp.md"),
    reproHelp: importMDX.sync("./locales/en/reproHelp.md"),
    reproModal: importMDX.sync("./locales/en/reproModal.md"),
    stepsHelp: importMDX.sync("./locales/en/stepsHelp.md")
  },
  zh: {
    intro: importMDX.sync("./locales/zh/intro.md"),
    introModal: importMDX.sync("./locales/zh/introModal.md"),
    motivationHelp: importMDX.sync("./locales/zh/motivationHelp.md"),
    proposalHelp: importMDX.sync("./locales/zh/proposalHelp.md"),
    reproHelp: importMDX.sync("./locales/zh/reproHelp.md"),
    reproModal: importMDX.sync("./locales/zh/reproModal.md"),
    stepsHelp: importMDX.sync("./locales/zh/stepsHelp.md")
  }
};

export interface Props {
  id: string;
  [name: string]: any;
}

const I18n: React.FC<Props> = ({ id, ...restProps }) => {
  const locale = React.useContext(LocaleContext);
  const Text = texts[locale][id];

  return (
    <div {...restProps}>
      <Text />
    </div>
  );
};

export default I18n;
