import React from "react";
import { useState, useEffect } from "react";
import { getData } from "./services/device.js";

export default function Device() {
  const [deviceData, setDeviceData] = useState();

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await getData();
      setDeviceData(response)
      // ...
    }
    fetchData();
  }, []);
  console.log("front", deviceData)
  return (
    <>
    <h3>{deviceData.apower}</h3>
    <h3>{deviceData.voltage}</h3>
    </>
  )
}
