import * as React from 'react';
import { Layout, Button, ConfigProvider } from 'antd';
import zh_CN from 'antd/lib/locale/zh_CN';
import en_US from 'antd/lib/locale/en_US';
import { getLocale, setLocale } from 'umi-plugin-locale';
import Intro from '@/components/Intro';
import IssueForm from '@/components/IssueForm';
import styles from './index.less';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  const locale = getLocale() || 'en-US';
  // umi 的国际化写法默认为中划线，antd 的国际化写法为下划线
  const antdLocaleMap: any = {
    'zh-CN': zh_CN,
    'en-US': en_US,
  };
  return (
    <ConfigProvider locale={antdLocaleMap[locale]}>
      <Layout className="layout">
        <Header className={styles.header}>
          <div className={styles.headerContainer}>
            <div className={styles.logo}>
              <img
                alt="logo"
                src="https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*N4ZMS7gHsUIAAAAAAAAAAABkARQnAQ"
              />
              <h1>Issue Helper</h1>
            </div>
            <div className={styles.locale}>
              <Button
                size="small"
                onClick={() => {
                  if (locale === 'zh-CN') {
                    setLocale('en-US');
                  } else {
                    setLocale('zh-CN');
                  }
                  window.location.reload();
                }}
              >
                {locale === 'en-US' ? '中文' : 'English'}
              </Button>
            </div>
          </div>
        </Header>
        <Content className={styles.content}>
          <Intro />
          <IssueForm />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Inspired by{' '}
          <a href="https://new-issue.vuejs.org" target="_blank" rel="noopener noreferrer">
            Vue Issue Helper
          </a>{' '}
          · Forked from{' '}
          <a href="http://new-issue.ant.design" target="_blank" rel="noopener noreferrer">
            Ant Design Issue Helper
          </a>
          · <a href="https://github.com/antvis/antv-issue-helper">Source Code</a>
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
