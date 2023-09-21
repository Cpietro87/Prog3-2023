import React from 'react'

interface Prop {
  name: string;
  surname: string;
  age: number;
  description: string
}

export const titleCase = (text: string) => {

  if(text === '') return '' ;
  
  const arr = text.split(' ');
  const result = [];

  for(let elem of arr){
    result.push(elem[0].toLocaleUpperCase() + elem.substring(1).toLowerCase())
  }
  return result.join(' ');



}

export const ProfileCard = ({name,surname,age,description}: Prop) => {
  return (
    <div>ProfileCard</div>
  )
}
