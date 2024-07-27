import React, { useContext } from 'react'
import { myContext } from '../context/GlobalData';

const Gallery = () => {
  const data = useContext(myContext);

  console.log(data);
  return (
    <div>Gallery
      <div className="gallery">{data.userName}</div>
    </div>
  )
}

export default Gallery