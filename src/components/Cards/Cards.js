import React from 'react'

const Cards = ( {results} ) => {
  let display;

  if(results){
    display = results.map(x =>{
      // x in this context means target the mapped results one by one 
      return( <div className='col-4'>{x.name}</div>  )
      /*I learned something here and im not sure what.
      the $ is not needed when you are returning the value so you can spit out 
      html and then inline use the dollar sign and {} to point to variables all you like
      */
    });

  }else{
    display = "No characters found :/";

  }

  return (
    <>{display}</>
  )
}

export default Cards