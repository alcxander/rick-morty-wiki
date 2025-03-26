import React from 'react'
import styles from './Search.module.scss'
import { Form } from 'react-router-dom'

const Search = () => {
  return (
    <form className="">
      <input type="text" className={styles.input} placeholder='Search for Characters'/>
      <button className="btn btn-primary">Search</button>
    </form>
  )
}

export default Search