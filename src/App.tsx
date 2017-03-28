import React, { PropTypes } from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import { Layout, Button } from 'antd';
import Intro from './Intro';
import IssueForm from './IssueForm';

const styles: any = require('./App.less');
const { Header, Content, Footer } = Layout;

export interface AppState {
  locale: string;
}

class App extends React.Component<null, AppState> {
  static childContextTypes = {
    locale: PropTypes.string,
  };

  state = {
    locale: 'en',
  };

  getChildContext() {
    return {
      locale: this.state.locale,
    };
  }

  handleLocaleChange = () => {
    this.setState(({ locale }) => ({
      locale: locale === 'en' ? 'zh' : 'en',
    }));
  }

  render() {
    const { locale } = this.state;
    const appLocale = (window as any).appLocale[locale];
    addLocaleData(appLocale.data);

    return (
      <Layout className="layout">
        <Header className={styles.header}>
          <div className={styles.headerContainer}>
            <div className={styles.logo}>
              <img alt="logo" src="https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg" />
              <span>
                Issue Helper
              </span>
            </div>
            <div className={styles.locale}>
              <Button size="small" onClick={this.handleLocaleChange}>{locale === 'en' ? '中文' : 'English'}</Button>
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
          Ant Design © {(new Date).getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

export default App;
