import React, { useState, useEffect } from "react";
import TutorialDataService from "../services/TutorialService";
import YTService from "../services/YTService";
import axios from "axios";


const ChannelStats = props => {
  const initialTutorialState = {
    id: null,
    title: "",
    description: "",
    published: false
  };
  const [currentTutorial, setCurrentTutorial] = useState(initialTutorialState);
  const [message, setMessage] = useState("");
  const [channelId, setChannelId] = useState("");

  const [videoCount, setVideoCount] = useState("0");
  const [subscriberCount, setSubscriberCount] = useState("0");
  const [viewCount, setViewCount] = useState("0");

  useEffect(() => {

  }, []);

  const handleInputChange = event => {
    const { name, value } = event.target;
    //setCurrentTutorial({ ...currentTutorial, [name]: value });
    setChannelId(event.target.value);
  };

  const getChannelStats = () => {
      /*YTService.getAll(channelId)
            .then(response => {
              console.log(response.data);
            })
            .catch(e => {
              console.log(e);
            });*/

             axios.get('https://st-service.herokuapp.com/getChannelStats/'+channelId, {
                  headers: {
                       'Access-Control-Allow-Origin': true
                  },
                responseType: 'json',
                 }).then(response => {
                 //console.log(response.data.items[0].statistics.videoCount);
                 setVideoCount(response.data.items[0].statistics.videoCount);
                 setViewCount(response.data.items[0].statistics.viewCount);
                 setSubscriberCount(response.data.items[0].statistics.subscriberCount);
                });

   };



  return (
    <div>
        <div className="edit-form">
          <h4>YT-UI</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Channel ID</label>
              <input
                type="text"
                className="form-control"
                placeholder="Channel ID"
                id="title"
                name="title"
                value={channelId}
                onChange={handleInputChange}
              />
            </div>
          </form>
        </div>

         <button className="badge badge mr-2" onClick={getChannelStats}>
                    Channel Stats
         </button>
         Video Count is: { videoCount &&   videoCount } <br></br>
         View  Count is: { viewCount &&   viewCount }<br></br>
          Subscriber  Count is: { subscriberCount &&   subscriberCount }

    </div>
);
}
export default ChannelStats;
