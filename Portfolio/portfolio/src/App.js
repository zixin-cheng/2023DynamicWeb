import React, { useEffect } from 'react';

import Landing from './Landing';
import ContactInfo from './ContactInfo';
import ProjectCard from './ProjectCard';
import { PROJECT_LIST } from './ProjectCard/project-data';
import styles from './ProjectCard/ProjectCard.module.css';
import './styles/global.css';
import Scene from './BackgroundScene/Scene';
import { CameraTimeline } from './BackgroundScene/AnimatedCamera';

/**
 * This function will calculate how much the user has scrolled (0-1)
 * @returns {number} The percentage of how much the user has scrolled (0-1)
 */
function getScrollProgress() {
  // This will calculate how many pixels the page is vertically
  const winScroll = window.document.documentElement.scrollTop;
  // This is responsible for subtracticing the total height of the page - where the users page is scrolled to
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  // This will calculate the final total of the percentage of how much the user has scrolled (0-1)
  return winScroll / height;
}

function App() {
  // Set the animation to play based on scroll position
  useEffect(() => {
    // We then register a callback that executes every time the user scrolls
    window.onscroll = (e) => {
      const scrolled = getScrollProgress();
      // console.log(`Scroll progress: ${progress}`);
      CameraTimeline.progress(scrolled);
      return () => {
        // We unregister the callback when the component unmounts
        window.onscroll = null;
      };
    };
  }, []);

  return (
    <div className={styles.article_wrapper}>
      <Landing />
      <div className={styles.content_wrapper}>
        {PROJECT_LIST.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
      <Scene />
      <ContactInfo />
    </div>
  );
}

export default App;
