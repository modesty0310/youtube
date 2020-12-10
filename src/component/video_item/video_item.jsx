import React, { useRef } from 'react';
import styles from './video_item.module.css';

const VideoItem = ({video, video: {snippet}, onClickVideo}) => {

  
  
  return (
    <div className={styles.containner}>
    <li className={styles.video} onClick={() => onClickVideo(video)} >
      <img className={styles.thumbnail} 
      src={snippet.thumbnails.medium.url} 
      alt="video thumbnail"  
      />
      <div className={styles.metadata}>
        <p className={styles.title}>{snippet.title}</p>
        <p className={styles.channel}>{snippet.channelTitle}</p>
      </div>
    </li>
  </div>
  )
};






export default VideoItem;