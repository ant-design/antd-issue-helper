import React, { PropTypes } from 'react';

const req = (require as any).context('../locales', true, /\.md$/);
const texts = { en: {}, zh: {} };

req.keys().forEach((mod: string) => {
  const matches: any = mod.match('./(.+)/(.+).md');
  const locale = matches[1] as string;
  const id = matches[2] as string;
  texts[locale][id] = req(mod);
});

export interface I18nProps {
  id: string;
  [name: string]: any;
}

export default class I18n extends React.Component<I18nProps, null> {
  static contextTypes = {
    locale: PropTypes.string,
  };

  render() {
    const { id, ...restProps } = this.props;
    const { locale } = this.context;
    const html = texts[locale][id];

    return <div {...restProps} dangerouslySetInnerHTML={{ __html: html }} />;
  }
}
