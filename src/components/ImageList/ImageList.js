import React, { useState } from 'react'
import './ImageList.css'
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import Lightbox from "react-awesome-lightbox";
// You need to import the CSS only once
import "react-awesome-lightbox/build/style.css";


function ImageList({ photos }) {
 const [openedImage, setOpenedImage] = useState('');

 return (
  <>
   <GridList cellHeight={375} cols={3}>
    {photos.map((img, i) => (
     <GridListTile key={i} cols={(img.width / 3600).toFixed(0)} className='img-list' onClick={() => setOpenedImage(img.urls.regular)}>
      <img src={img.urls.regular} alt={img.alt_description} />
      <GridListTileBar title={img.description} subtitle={img.user.name} />
     </GridListTile>
    ))}
   </GridList>
   {openedImage ? <Lightbox image={openedImage} onClose={() => setOpenedImage('')} /> : null}
  </>
 )
}

export default ImageList
