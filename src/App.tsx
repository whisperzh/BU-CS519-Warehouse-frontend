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
import axios from 'axios';

function App() {
  // You will need to use more of these!
  const [displayDataList,setDisplayDataList]=useState<IDisplayDataClass[]>([]);
  const [currClassTitle,setCurrClassTitle]=useState<string>("");

  const fetchShipmentDataById = async (id:string) => {
    const res= await axios.get(BASE_API_URL+"HttpGet",{
      headers:{
        "Access-Control-Allow-Origin":"https://portal.azure.com"
      },
      params: {
        code: getCode,
        ShipmentID:id
      }
    }
    );
    setDisplayDataList(res.data)
    console.log(res.data);

  };

  const collectAndPostShipmentData = async(id:string,po:string,wid:string,box:string,date:string)=>{
    const res= await axios.post(BASE_API_URL+"insertData",
    {    
      "Date":date,
      "WarehouseID":wid,
      "ShippingPO":po,
      "ShipmentID":id,
      "BoxesRcvd":box},
    {
      params: {
        code: postCode,
      }

    }
    );
    console.log(res);
  }
  

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
    const id = (document.getElementById("searchId")as HTMLInputElement).value
    fetchShipmentDataById(id);
  }

  function postData(){

    const date=(document.getElementById("date")as HTMLInputElement).value;
    const shipid=(document.getElementById("shipment_ID")as HTMLInputElement).value;
    const shippo=(document.getElementById("shipping_PO")as HTMLInputElement).value;
    const warehouseid=(document.getElementById("warehouse_ID")as HTMLInputElement).value;
    const boxRec=(document.getElementById("boxes_Received")as HTMLInputElement).value;

    if(date==""){
      alert("Date is missing!");
      return;
    }

    if(shipid==""){
      alert("Shipment ID is missing!");
      return;
    }

    if(shippo==""){
      alert("Shipment PO is missing!");
      return;
    }

    if(warehouseid==""){
      alert("Warehouse ID is missing!");
      return;
    }

    if(boxRec==""){
      alert("Boxes Received is missing!");
      return;
    }
    collectAndPostShipmentData(shipid,shippo,warehouseid,boxRec,date);
    
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
