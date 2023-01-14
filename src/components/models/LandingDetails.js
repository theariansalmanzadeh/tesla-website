import React from "react";

import style from "../../style/models.module.css";

function LandingDetails({ Model }) {
  return (
    <div className={style.landingDetails}>
      {Model.detials.map((items, indx) => (
        <div key={indx}>
          <p>
            {items[0]} <span>{items[1]}</span>
          </p>
          <p>{items[2]}</p>
        </div>
      ))}

      <button>Order now</button>
    </div>
  );
}

export default LandingDetails;
