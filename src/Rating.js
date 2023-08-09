import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"

export default function Rating() {
  return (
    <div>
      <div className= "rating" FontAwesomeIcon={{ fontStar:rating}}>
<FontAwesomeIcon icon="fa-solid fa-star" />
<FontAwesomeIcon icon="fa-solid fa-star" />
<FontAwesomeIcon icon="fa-solid fa-star" />
<FontAwesomeIcon icon="fa-solid fa-star" />
<FontAwesomeIcon icon="fa-solid fa-star" />
</div>
    </div>
  );
}


