import React from "react";
import * as Styled from "./rating-box.styles";
import { useStateValue } from "../../context/state";

const RatingBox = () => {
  const [
    {
      currentMovie: { imdbRating, imdbVotes }
    }
  ] = useStateValue();
  return (
    <Styled.RatingBoxOuter>
      <Styled.RatingText>Imdb Rating</Styled.RatingText>
      <Styled.RatingBoxInner>
        <Styled.RatingNumber>
          {imdbRating}
          <Styled.RatingNumberSmall>/10</Styled.RatingNumberSmall>
        </Styled.RatingNumber>
      </Styled.RatingBoxInner>
      <Styled.RatingVotes>{imdbVotes}</Styled.RatingVotes>
    </Styled.RatingBoxOuter>
  );
};

export default RatingBox;
