import styles from '../styles/Home.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { NextApiRequest, NextPage } from 'next';
import { NextRouter } from 'next/router';

export interface allPlayerData {
  reb: number;
  pts: number;
  ast: number;
  name: string;
  img: string;
  data: object;
}

// to-do : clean up typescript on ANY
const PlayerCard: any = (props: allPlayerData) => {
  return (
    <a href="https://nextjs.org/docs" className={styles.card}>
      <h2>{props.name} &rarr;</h2>
      <img src={props.img}></img>
      <p>Points - {props.pts}</p>
      <p>Rebounds - {props.reb}</p>
      <p>Assists - {props.ast}</p>
    </a>
  );
};

export default PlayerCard;
