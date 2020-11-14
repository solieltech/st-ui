import React, { useState, useEffect } from "react";
import YTService from "../services/YTService";
import axios from "axios";
import ReactExport from "react-data-export";
import { loadProgressBar } from 'axios-progress-bar'



const VideoComments = props => {
  const [videoId, setVideoId] = useState("");
  const [commentData,setCommentData] =  useState([]);
  const [canDownload,setCanDownload] = useState(false);
  const [loder,setLoader] = useState(false);

  useEffect(() => {

  }, []);

  const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

  const handleInputChange = event => {
    setVideoId(event.target.value);
  };
// http://localhost:8085/getChannelStats/
// https://st-service.herokuapp.com/getChannelStats/


  const getVideoComments = () => {
    setLoader(true);
             axios.get('https://st-service.herokuapp.com/getVideoComments/'+videoId, {
                  headers: {
                    "Access-Control-Allow-Origin": "*"
                  }
                 }).then(response => {
                  loadProgressBar();
                 console.log(response.data);
                 setCommentData(response.data);
                 setCanDownload(true);
                 setLoader(false);
                 
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

       {loder && <div className="loader"></div>}

       { canDownload && <ExcelFile>
                <ExcelSheet data={commentData} name="Comments">
                    <ExcelColumn label="Name" value="name"/>
                    <ExcelColumn label="Comment" value="comment"/>
                    <ExcelColumn label="LikeCount" value="likeCount"/>
                    <ExcelColumn label="TotalReplyCount" value="totalReplyCount"/>
                    <ExcelColumn label="PublishedAt" value="publishedAt"/>
                    <ExcelColumn label="UpdatedAt" value="updatedAt"/>
                    <ExcelColumn label="AuthorChannelUrl" value="authorChannelUrl"/>
                    
                </ExcelSheet>
        </ExcelFile>
    } 


      </div>
);
}
export default VideoComments;
