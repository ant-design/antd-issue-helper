import * as React from "react";
import IntroModal from "./IntroModal";
import I18n from "./I18n";
import { state } from "reactive.macro";
import styles from "./Intro.module.scss";

const Intro: React.FC = () => {
  let modalOpen = state(false);
  const introRef = React.useRef<null | HTMLDivElement>(null);

  React.useEffect(() => {
    introRef.current!.addEventListener("click", (e: Event) => {
      if ((e.target as any).getAttribute("href") === "#intro-modal") {
        e.preventDefault();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        modalOpen = true;
      }
    });
  }, []);

  return (
    <div className={`${styles.intro} paragraph`} ref={introRef}>
      <IntroModal open={modalOpen} onCancel={() => (modalOpen = false)} />
      <I18n id="intro" />
    </div>
  );
};

export default Intro;
