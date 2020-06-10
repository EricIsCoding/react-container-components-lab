import { defaultConfig } from "sinon";
import React from 'react';

export const Review = (props) => {
    return (
  
      <div
        key={props.headline}
        className="review"
      >
        <header>
            {props.headline}
          <br/>
          <p>{props.byline}</p>
        </header>
        <blockquote>{props.summary}</blockquote>
      </div>
    );
  };
  
  export default Review;