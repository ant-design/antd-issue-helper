import * as React from 'react';
import { Layout } from 'antd';
import IssueForm from './IssueForm';

const styles: any = require('./App.less');
const { Header, Content, Footer } = Layout;

class App extends React.Component<null, null> {
  render() {
    return (
      <Layout className="layout">
        <Header className={styles.header}>
          <div className={styles.logo}>
            <img alt="logo" src="https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg" />
            <span>
              Issue Helper
            </span>
          </div>
        </Header>
        <Content className={styles.content}>
          <IssueForm />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2016 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

export default App;
