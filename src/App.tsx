import React, {ChangeEvent, useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Select, Typography, MenuItem, SelectChangeEvent } from "@mui/material";
/**
 * You will find globals from this file useful!
 */
import {postCode,getCode,BASE_API_URL,GET_DEFAULT_HEADERS} from "./globals";
import { IDisplayDataClass } from "./types/api_types";
import {dummyData, GradeTable} from './components/GradeTable'
import { text } from "stream/consumers";

function App() {
  // You will need to use more of these!
  const [displayDataList,setDisplayDataList]=useState<IDisplayDataClass[]>([]);
  const [message, setMessage] = useState('');
  const [currClassTitle,setCurrClassTitle]=useState<string>("");

  const fetchShipmentDataById = async (id:string) => {
    const res = await fetch(BASE_API_URL+'HttpGet'+'?'+new URLSearchParams({'code': getCode}), {
      method: "GET",
      headers:GET_DEFAULT_HEADERS(),
    });
    const json = await res.json();
    setDisplayDataList(json)
  };

//Yt2rJ0q2lCtqTsjsiKbcUmG_6_5Pz4HfbDrrIrazEl93AzFu0jOx7w==
//OKv-EePp3jgVvEwp7npapgd66BMXkxErvTz9lWM7jFk0AzFuyHF4tg==

  /**
   * This is JUST an example of how you might fetch some data(with a different API).
   * As you might notice, this does not show up in your console right now.
   * This is because the function isn't called by anything!
   *
   * You will need to lookup how to fetch data from an API using React.js
   * Something you might want to look at is the useEffect hook.
   *
   * The useEffect hook will be useful for populating the data in the dropdown box.
   * You will want to make sure that the effect is only called once at component mount.
   *
   * You will also need to explore the use of async/await.
   *
   */

  function searchID(){
    console.log(message);
    fetchShipmentDataById(message);
  }

  function postData(){

  }
  



  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Grid container spacing={2} style={{ padding: "1rem" }}>
        <Grid xs={12} container alignItems="center" justifyContent="center">
          <Typography variant="h2" gutterBottom>
            Shipment Report
          </Typography>
         
        </Grid>
        <Grid xs={12} md={4}>
          <Typography variant="h4" gutterBottom>
            Enter a shipment number
          </Typography>
          <div> 
            <div>ShipmentID</div>
            <input type="text" id="searchId" ></input>
          </div>
          <button onClick={searchID}>Search</button>

        </Grid>


        <Grid xs={12} md={8}>
          {/* <Typography variant="h4" gutterBottom>
            Final Grades
          </Typography> */}
          <div>
            {GradeTable(displayDataList)}
          </div>
        </Grid>


        <Grid xs={12} md={4}>
          <Typography variant="h4" gutterBottom>
            Enter Data to insert into Database
          </Typography>
          <div> 
            <div>Shipment ID</div>
            <input type="text" id="shipment_ID" ></input>
          </div>

          <div> 
            <div>Date</div>
            <input type="text" id="date" ></input>
          </div>

          <div> 
            <div>shipping PO</div>
            <input type="text" id="shipping_PO" ></input>
          </div>

          <div> 
            <div>warehouse ID</div>
            <input type="text" id="warehouse_ID" ></input>
          </div>

          <div> 
            <div>boxes Received</div>
            <input type="text" id="boxes_Received" ></input>
          </div>


          <button onClick={postData}>Insert</button>

        </Grid>

      </Grid>
    </div>
  );
}

export default App;
