import React, { useState, useEffect } from "react";
import YTService from "../services/YTService";
import axios from "axios";

const VideoComments = props => {
  const [videoId, setVideoId] = useState("");

  useEffect(() => {

  }, []);

  const handleInputChange = event => {
    setVideoId(event.target.value);
  };
// http://localhost:8085/getChannelStats/
// https://st-service.herokuapp.com/getChannelStats/


  const getVideoComments = () => {
             axios.get('https://st-service.herokuapp.com/getChannelStats/'+videoId, {
                  headers: {
                    "Access-Control-Allow-Origin": "*"
                  }
                 }).then(response => {
                 console.log(response.data);
                 
                 });
   };

/*const getChannelStats = () => {
    YTService.getChannelStats(channelId)
    .then(response => {
      console.log(response.data);
        setRowData(response.data);
    })
    .catch(e => {
      console.log(e);
    });
} ;*/





  return (
    <div>
        <div className="edit-form">
          <h4>YT-UI</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Video ID</label>
              <input
                type="text"
                className="form-control"
                placeholder="Channel ID"
                id="title"
                name="title"
                value={videoId}
                onChange={handleInputChange}
              />
            </div>
          </form>
          <button className="badge badge mr-2" onClick={getVideoComments}>
                    Video Comments
         </button>
        </div>
      </div>
);
}
export default VideoComments;
