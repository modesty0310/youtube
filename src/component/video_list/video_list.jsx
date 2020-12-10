import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = ({videos, onClickVideo}) => (
      <ul className={styles.videos}>
        {videos.map(video => (
          <VideoItem 
          key={video.id} 
          video={video}
          onClickVideo={onClickVideo}
          />
        ))}
      </ul>
  );

export default VideoList;