
import { useCallback } from 'react';
import { Button } from '../Button/Button';
import { Table } from '../Table/Table';
import { RowWithIcon } from '../RowWithIcon/RowWithIcon';
import { Navbar } from '../Navbar/Navbar';
import './AdminView.css';

export function AdminView () {

  const onPressNewPlayer = useCallback(()=>{
    alert('new player')
  },[])

  const onPressEndChalleng = useCallback(()=>{
    alert('end Challeng')
  },[])

  const headers = ["position","name","gender","money"]

  const data = [
    {position: 1, name: "Anom", gender: "Male",money:210000 },
    { position: 2, name: "Megha", gender: "Female",money:210000},
    {position: 3, name: "Subham",gender: "Male",money:210000},
  ] 

  const headersFinished = ["name","start Date","finish Date","winner"];

  const dataFinishTable = [
    { name: "Tournañmet1", start: "01/01/2022", end: "01/01/2023",winner:"Luigui" },
    { name: "Tournaàmet2", start: "01/01/2022", end: "01/01/2023",winner:"Luigui" },
    { name: "TournaÂmet3", start: "01/01/2022", end: "01/01/2023",winner:"Luigui" },
    { name: "tónica", start: "01/01/2022", end: "01/01/2023",winner:"Luigui" },
  ] 

  return (
    <section className='container-admin-page'>
      <div className='challenger-row'>
        <section className='table-container-challenge'>
          <Table heads={headers} data={data} />
        </section>
        <section className='button-container'>
          <Button onAction={onPressNewPlayer} type="nes-btn is-success background" text="New Player" />
          <Button onAction={onPressEndChalleng} type="nes-btn is-warning" text="End Challenge" />
        </section>
      </div>
      <div className='challenger-row'>
        <section className='table-container-olds-challenge'>
          <Table heads={headersFinished} data={dataFinishTable} />
        </section>
        <section className='top-user-list'>
          <RowWithIcon text="Top User : Pablo" icon="nes-icon trophy " type="is-primary" />
          <RowWithIcon text="Top Score : 1000000" icon="nes-icon coin" type="is-success" />
          <RowWithIcon text="Players : 23" icon="nes-logo" type="is-warning" />
        </section>
      </div>
    </section>

  )
}