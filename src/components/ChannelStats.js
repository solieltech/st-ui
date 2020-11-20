import React, { useState, useEffect } from "react";
import YTService from "../services/YTService";
import axios from "axios";

import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


const ChannelStats = props => {
  const [channelId, setChannelId] = useState("");
  const [rowData, setRowData] = useState([]);
  const [loder,setLoader] = useState(false);

  const [channelDetails,setChannelDetails] = useState(false);
  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");
  const [publishedAt,setPulishedAt] = useState("");


  useEffect(() => {

  }, []);

  const handleInputChange = event => {
    //setCurrentTutorial({ ...currentTutorial, [name]: value });
    setChannelId(event.target.value);
  };
// http://localhost:8085/getChannelStats/
// https://st-service.herokuapp.com/getChannelStats/


  const getChannelStats = () => {
    setLoader(true);


    axios.get('https://st-service.herokuapp.com/channelDetails/'+channelId, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
    responseType: 'application/json; charset=utf-8',
     }).then(response => {
     console.log(response.data);
     //setLoader(false);
     setTitle(response.data.title);
     setDescription(response.data.description);
     setPulishedAt(response.data.publishedAt);
     });


             axios.get('https://st-service.herokuapp.com/getChannelStats/'+channelId, {
                  headers: {
                    "Access-Control-Allow-Origin": "*"
                  },
                responseType: 'application/json; charset=utf-8',
                 }).then(response => {
                 console.log(response.data);
                 setRowData(response.data);
                 setLoader(false);
                 setChannelDetails(true);
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


function formatDateValue(params){ 
  console.log("from formatDateValue");
  console.log(params.data.timestamp);
  return params.data.timestamp;
}



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
          <button className="badge badge mr-2" onClick={getChannelStats}>
                    Channel Stats
         </button>
        </div>
        {loder && <div className="loader"></div>}
        {channelDetails && <div>
          <span><b>Title:</b> {title}</span> <br />
        <span><b>Description: </b>{description}</span>  <br />
        <span><b>Channel PublishedAt: </b>{publishedAt}</span> 
        </div>
        }      
          <div className="ag-theme-alpine" style={ { height: 400, width: 1000 } }>
            <AgGridReact rowData={rowData}> 
                <AgGridColumn field="channelId"></AgGridColumn>
                <AgGridColumn field="viewCount"></AgGridColumn>
                <AgGridColumn field="videoCount"></AgGridColumn>
                <AgGridColumn field="subscriberCount"></AgGridColumn>
                <AgGridColumn headerName= 'Timestamp' filed="timestamp" cellRenderer={formatDateValue} ></AgGridColumn>
            </AgGridReact>
        </div>


    </div>
);
}
export default ChannelStats;
