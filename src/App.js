import { useEffect, useState } from 'react';
import './App.css';
import VideoList from './component/video_list/video_list';


function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCpj-H3ezIxwaL5Ih76t74bhfH8KGq8b34", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);


  return (
    <div className="App">
      <VideoList videos={videos}/>
    </div>
  )
}

export default App;
