import Image from 'next/image';
import { createContext, useContext, useState } from 'react';
import { memo } from 'react';

import styles from '../styles/Main.module.css';
import { ThemeContext } from '../pages/index';
import { AnnouncementInt } from '../interfaces/announcement';


const Announcement: React.FC<AnnouncementInt> = memo(function Announcement({ bestPrice, onClick }) {
  const theme = useContext(ThemeContext);
  const className = 'container-' + theme;

  return (
    <article className={`${styles.container} ${styles[className]}`}>
      <Image
        src="/pet_game_general.png"
        alt="Bjanka greets you at this site."
        width={290}
        height={400}
      ></Image>
      <div className={styles.content}>
        <h2>Announcement</h2>
        <p>Here is our greatest news!</p>
        <p>Now we're offering tiny chikens.</p>
        <p>We're offering fluffy cats, too!</p>
      </div>
      <p>only {bestPrice}$ !</p>
      <button onClick={onClick}>See more...</button>
    </article>
  );
});

export default Announcement;
