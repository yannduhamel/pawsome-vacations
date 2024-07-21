/* eslint-disable react/prop-types */

import "./AccCategoryCard.css";

export default function AccCategoryCard({ category }) {
  return (
    <div className="categoryCardWrapper">
      <img
        src={category.category_image}
        className="categoryCardContainer"
        alt=""
      />
      <div className="categoryCardOverlay" />
      <button type="button" className="categoryCardButton">
        {category.category_name}
      </button>
    </div>
  );
}
