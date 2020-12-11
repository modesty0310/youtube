import { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './component/search_header/search_header';
import VideoDetail from './component/video_detail/video_detail';
import VideoList from './component/video_list/video_list';


function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selected, setSelected] = useState(null);


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
      <section className={styles.content}> 
        {selected &&  (
        <div className={styles.detail}>
          <VideoDetail video={selected} />
        </div> 
        )}
        <div className={styles.list}>
          <VideoList videos={videos} onClickVideo={selectVideo} display={selected ? 'list' : 'grid'}/>
        </div>
      </section>

      </div>
  )
}

export default App;
