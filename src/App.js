import { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './component/search_header/search_header';
import VideoDetail from './component/video_detail/video_detail';
import VideoList from './component/video_list/video_list';


function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [slected, setSelected] = useState(null);
  
  const selectVideo = video => {
    setSelected(video);
  };

  const search = query => {
    youtube.search(query)
    .then(videos => setVideos(videos));
  };
  

  useEffect(() => {
    youtube.mostPopular()
    .then(videos => setVideos(videos));
  }, []);


  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <div>
        {
        slected && <VideoDetail video={slected} />
        }
        <VideoList videos={videos} onClickVideo={selectVideo} />
      </div>
      </div>
  )
}

export default App;
