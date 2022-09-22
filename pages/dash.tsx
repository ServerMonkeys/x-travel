import { NextPage } from "next";
import React from "react";
import {BaseCard} from "../components/Card";
import styles from "../styles/Home.module.css";
import client from "../libs/client";



export const Dash: NextPage = (data) => {
  console.log(data)
  return (
    <div className={styles.container}>
        <div className="min-h-screen flex flex-1 flex-col justify-center items-center box-border">
          <div className="grid ">
          <p></p>
          </div>
          <BaseCard agencyFullName={"Department of State"} status={"ready"}/>
        </div>
    </div>
)};

export default Dash



export const getStaticProps = async() =>{
  const {entities} = client;
  const data = await entities.person.list({
    filter: {
      ssn: { eq: 154061 },
    },
  });
  return {
    props : {data}
  }
}
