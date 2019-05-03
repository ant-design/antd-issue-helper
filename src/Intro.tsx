import * as React from "react";
import IntroModal from "./IntroModal";
import I18n from "./I18n";
import { state } from "reactive.macro";
import styles from "./Intro.module.scss";

const Intro: React.FC = () => {
  let modalVisible = state(false);
  const introRef = React.useRef<null | HTMLDivElement>(null);

  const handleClick = React.useCallback((e: Event) => {
    e.preventDefault();
    modalVisible = true;
  }, []);

  const handleCancel = React.useCallback(() => {
    modalVisible = false;
  }, []);

  React.useEffect(() => {
    introRef.current!.addEventListener("click", (e: Event) => {
      if ((e.target as any).getAttribute("href") === "#intro-modal") {
        handleClick(e);
      }
    });
  }, []);

  return (
    <div className={`${styles.intro} paragraph`} ref={introRef}>
      <IntroModal visible={modalVisible} onCancel={handleCancel} />
      <I18n id="intro" />
    </div>
  );
};

export default Intro;
