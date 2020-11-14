import React, { useState, useEffect } from "react";
import YTService from "../services/YTService";
import axios from "axios";

import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


const ChannelStats = props => {
  const [channelId, setChannelId] = useState("");

  const [rowData, setRowData] = useState([]);

  useEffect(() => {

  }, []);

  const handleInputChange = event => {
    //setCurrentTutorial({ ...currentTutorial, [name]: value });
    setChannelId(event.target.value);
  };
// localhost:8085/getChannelStats/
// https://st-service.herokuapp.com/getChannelStats/


  const getChannelStats = () => {
             axios.get('https://st-service.herokuapp.com/getChannelStats/'+channelId, {
                  headers: {
                    "Access-Control-Allow-Origin": "*"
                  },
                responseType: 'json',
                 }).then(response => {
                 console.log(response.data);
                 setRowData(response.data);
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
          <div className="ag-theme-alpine" style={ { height: 400, width: 1000 } }>
            <AgGridReact
                rowData={rowData}>
                <AgGridColumn field="channelId"></AgGridColumn>
                <AgGridColumn field="viewCount"></AgGridColumn>
                <AgGridColumn field="videoCount"></AgGridColumn>
                <AgGridColumn field="subscriberCount"></AgGridColumn>
                <AgGridColumn headerName="Time" field="timestamp"></AgGridColumn>
            </AgGridReact>
        </div>


    </div>
);
}
export default ChannelStats;
