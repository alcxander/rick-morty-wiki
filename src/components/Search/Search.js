import React from 'react'
import styles from './Search.module.scss'
import { Form } from 'react-router-dom'

const Search = ({
  setSearch
}) => {
  return (
    <form className="d-flex justify-content-center gap-4 mb-5">
      <input onChange={e=>{
        setSearch(e.target.value);// think i did a learn. this onchange will update then
        // value, which will get passed back to the usestate function of setSearch
        // and then the iife will get called with the updated value showing 
        // the updated url paramter
      }} type="text" className={styles.input} placeholder='Search for Characters'/>
      <button className={`${styles.btn} btn btn-primary fs-5`}>Search</button>
    </form>
  )
}

export default Search