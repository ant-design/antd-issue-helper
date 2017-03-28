import React, { SyntheticEvent } from 'react';
import PolicyModal from './PolicyModal';

const styles: any = require('./Intro.less');

export interface IntroState {
  modalVisible: boolean;
}

export default class Intro extends React.Component<null, IntroState> {
  state = {
    modalVisible: false,
  };

  handleClick = (e: SyntheticEvent<HTMLElement>) => {
    e.preventDefault();
    this.setState({ modalVisible: true });
  }

  handleCancel = () => {
    this.setState({ modalVisible: false });
  }

  render() {
    const { modalVisible } = this.state;

    return (
      <div className={styles.intro}>
        <PolicyModal visible={modalVisible} onCancel={this.handleCancel} />
        <h2>Before You Start...</h2>
        <p>
          The issue list is reserved exclusively for bug reports and feature requests. That means we do not accept usage questions. If you open an issue that does not conform to the requirements, <strong>it will be closed immediately</strong>. <a href="#" onClick={this.handleClick}>Why are we so strict about this?</a>
        </p>
        <p>
          For usage questions, please use the following resources:
        </p>
        <ul>
          <li>Read the <a href="https://ant.design/docs/react/introduce-cn" target="_blank">docs</a></li>
          <li>Look for / ask questions on <a href="https://stackoverflow.com/questions/ask?tags=antd" target="_blank">StackOverflow</a></li>
        </ul>
        <p>
          Also try to search for your issue - it may have already been answered or even fixed in the development branch. However, if you find that an old, closed issue still persists in the latest version, you should open a new issue using the form below instead of commenting on the old issue.
        </p>
      </div>
    );
  }
}
