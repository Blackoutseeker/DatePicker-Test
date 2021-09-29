import { useState } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import DatePicker, { DateObject } from 'react-multi-date-picker'
import type { Value } from 'react-multi-date-picker'
import DatePanel from 'react-multi-date-picker/plugins/date_panel'
// @ts-ignore
import styles from '../styles/Home.module.css'

const HomePage: NextPage = () => {
  const today = new Date()
  const [date, setDate] = useState<Value>([today])

  const onChange = (date: DateObject[]) => {
    setDate(date)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Test with DatePicker</title>
        <meta name="description" content="Just testing a powerful lib." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <DatePicker
          multiple
          value={date}
          onChange={onChange}
          sort
          format={'DD/MM/YYYY'}
          plugins={[<DatePanel key={'date-panel'} />]}
        />
      </main>
    </div>
  )
}

export default HomePage
