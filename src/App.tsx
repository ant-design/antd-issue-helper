import * as React from 'react';
import * as PropTypes from 'prop-types';
import { IntlProvider, addLocaleData } from 'react-intl';
import { Layout, Button } from 'antd';
import Intro from './Intro';
import IssueForm from './IssueForm';
import logo from './logo.svg';

const styles: any = require('./App.module.less');
const { Header, Content, Footer } = Layout;

export interface AppState {
  locale: string;
}

function getLocale() {
  const cache = localStorage.getItem('locale');
  if (cache) {
    return cache;
  }
  return window.navigator.language.toLowerCase() === 'zh-cn' ? 'zh' : 'en';
}

class App extends React.Component<{}, AppState> {
  static childContextTypes = {
    locale: PropTypes.string,
  };

  state = {
    locale: getLocale(),
  };

  getChildContext() {
    return {
      locale: this.state.locale,
    };
  }

  handleLocaleChange = () => {
    this.setState(
      ({ locale }) => ({
        locale: locale === 'en' ? 'zh' : 'en',
      }),
      () => {
        localStorage.setItem('locale', this.state.locale);
      },
    );
  };

  render() {
    const { locale } = this.state;
    const appLocale = (window as any).appLocale[locale];
    addLocaleData(appLocale.data);

    return (
      <Layout className="layout">
        <Header className={styles.header}>
          <div className={styles.headerContainer}>
            <div className={styles.logo}>
              <img alt="logo" src={logo} />
              <h1>Issue Helper</h1>
            </div>
            <div className={styles.locale}>
              <Button size="small" onClick={this.handleLocaleChange}>
                {locale === 'en' ? '中文' : 'English'}
              </Button>
            </div>
          </div>
        </Header>
        <IntlProvider locale={appLocale.locale} messages={appLocale.messages}>
          <Content className={styles.content}>
            <Intro />
            <IssueForm />
          </Content>
        </IntlProvider>
        <Footer style={{ textAlign: 'center' }}>
          Inspired by{' '}
          <a href="https://new-issue.vuejs.org/" target="_blank">
            Vue Issue Helper
          </a>{' '}
          · <a href="https://github.com/eggjs/egg-issue-helper">Source Code</a>
        </Footer>
      </Layout>
    );
  }
}

export default App;
