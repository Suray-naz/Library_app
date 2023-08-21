import React from "react";
import { CardBtn, CardContainer, CardHeader, CardMedia } from "./Card.style";
import defaultImg from "../../assets/book.jpg";



const Card = ({ item }) => {
  const { volumeInfo } = item;

  return (
    <CardContainer>
      <CardHeader>{volumeInfo?.title}</CardHeader>
      <CardMedia
        src={volumeInfo?.imageLinks?.smallThumbnail || defaultImg}
        alt={volumeInfo?.title}
      />
      <CardBtn onClick={() => navigate (`/detail/${id}`, {state: item})}>View More</CardBtn>
    </CardContainer>
  );
};

export default Card;
