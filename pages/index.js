import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import JSON from "./listing.json";
import Link from "next/link";
import { renderComponent } from "./renderComponent.js";
import FullScreenModal from "./FullScreenModal.js";
// import your icons

export default function Home() {
  const [searchValue, setsearchValue] = useState("");
  const [filteredData, setfilteredData] = useState(JSON);
  const [goFullScreen, setgoFullScreen] = useState(false);
  const [selectedData, setSelectedData] = useState({});

  const OnSearch = (e) => {
    let searchVal = e.target.value.toLowerCase();
    JSON.filter((obj) => {
      let filteredArray = obj["name"].toLowerCase().includes(searchVal)
        ? obj
        : "";
      if (filteredArray !== "" && searchVal !== "") {
        setfilteredData([filteredArray]);
      } else {
        setfilteredData(JSON);
      }
      console.log([filteredArray]);
    });
  };

  return (
    <>
      {goFullScreen ? (
        <FullScreenModal Data={selectedData} />
      ) : (
        <div className={styles.background}>
          <div className={styles.container}>
            <h1>Components Master</h1>
            <input type="text" onChange={OnSearch} placeholder="Search" />
            <div className={styles.grid}>
              {filteredData.map((x, i) => (
                <div
                  className={styles.card}
                  key={i}
                  id="comp_container"
                  onClick={() => {
                    setgoFullScreen(true);
                    setSelectedData(x);
                  }}
                >
                  <div className={styles.container}>
                    {renderComponent(x.component)}
                    <h4>
                      <b>{x.name}</b>
                    </h4>
                    <p>{x.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.gridVertical}>
            <Link href="/Basic"><div className={styles.card} key={"basic"} id="comp_container">
              <h4>
                <b>Basic</b>
              </h4>
            </div></Link>
            <div className={styles.card} key={"basic"} id="comp_container">
              <h4>
                <b>Medium</b>
              </h4>
            </div>
            <div className={styles.card} key={"basic"} id="comp_container">
              <h4>
                <b>Large</b>
              </h4>
            </div>
          </div>
        </div>
      )}
      
    </>
  );
}
