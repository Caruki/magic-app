import React from 'react';
import { useParams } from 'react-router-dom';

export default function AllSets() {
  const { setName } = useParams();

  function displaySet() {
    if (setName) {
      return setName;
    }
  }
  return <div>{displaySet()}</div>;
}
