import React from 'react';
import IntroModal from './IntroModal';
import I18n from './I18n';

const styles: any = require('./Intro.less');

export interface IntroState {
  modalVisible: boolean;
}

export default class Intro extends React.Component<{}, IntroState> {
  introRef: HTMLElement;

  state = {
    modalVisible: false,
  };

  componentDidMount() {
    this.introRef.addEventListener('click', (e: Event) => {
      if ((e.target as any).getAttribute('href') === '#intro-modal') {
        this.handleClick(e);
      }
    });
  }

  handleClick = (e: Event) => {
    e.preventDefault();
    this.setState({ modalVisible: true });
  };

  handleCancel = () => {
    this.setState({ modalVisible: false });
  };

  render() {
    const { modalVisible } = this.state;

    return (
      <div
        className={`${styles.intro} paragraph`}
        ref={node => (this.introRef = node)}
      >
        <IntroModal visible={modalVisible} onCancel={this.handleCancel} />
        <I18n id="intro" />
      </div>
    );
  }
}
