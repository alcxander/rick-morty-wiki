import React from 'react'
import styles from './Search.module.scss'
import { Form } from 'react-router-dom'

const Search = ({
  setSearch,
  setPageNumber
}) => {
  return (
    <form className="d-flex justify-content-center gap-4 mb-5 flex-sm-row flex-column align-items-center">
      <input onChange={e=>{
        setSearch(e.target.value);// think i did a learn. this onchange will update then
        // value, which will get passed back to the usestate function of setSearch
        // and then the iife will get called with the updated value showing 
        // the updated url paramter
        setPageNumber(1);
      }} type="text" className={styles.input} placeholder='Search for Characters'/>
      <button onClick={e=>{e.preventDefault()}} className={`${styles.btn} btn btn-primary fs-5`}>Search</button>
    </form>
  )
}

export default Search