import * as React from 'react';
import styles from './index.less';

const BasicLayout: React.FC = props => {
  return <div className={styles.normal}>{props.children}</div>;
};

export default BasicLayout;
