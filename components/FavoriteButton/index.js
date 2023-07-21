import React from "react";
import { ButtonContainer, HeartButton, HeartButtonHover } from "./styles";

export function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <ButtonContainer>
      <HeartButton onClick={onToggleFavorite} isFavorite={isFavorite}>
        {isFavorite ? (
          <svg viewBox="0 0 24 24" width="24" height="24">
            <title>heart</title>
            <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.42 4.42,3 7.5,3C9.28,3 10.97,4 12,5.5C13.03,4 14.72,3 16.5,3C19.58,3 22,5.42 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="24" height="24">
            <title>heart-outline</title>
            <path d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
          </svg>
        )}
      </HeartButton>
    </ButtonContainer>
  );
}

{
  /* <button onClick={onPrevQuestion}>
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="32"
  height="32"
>
  <title>chevron-left</title>
  <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
</svg>
</button>
<button onClick={onNextQuestion}>
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="32"
  height="32"
>
  <title>chevron-right</title>
  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
</svg>
</button> */
}

// import React from "react";
// import { Button, ButtonContainer } from "./styles";

// const FavoriteButton = ({ id, favorite, onToggleFavorite }) => {
//   console.log("ASDASDASD", typeof onToggleFavorite);
//   return (
//     <ButtonContainer>
//       <Button onClick={() => onToggleFavorite(id)}>
//         {favorite ? (
//       <svg viewBox="0 0 24 24" width="32" height="32" fill="red">
//         {" "}
//         {/* Ändere die Farbe des Icons basierend auf dem "favorite" Flag */}
//         <title>heart filled</title>
//         <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.42 4.42,3 7.5,3C9.28,3 10.97,4 12,5.5C13.03,4 14.72,3 16.5,3C19.58,3 22,5.42 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z" />
//       </svg>
//     ) : (
//       <svg viewBox="0 0 24 24" width="32" height="32" fill="gray">
//         {" "}
//         {/* Ändere die Farbe des Icons basierend auf dem "favorite" Flag */}
//         <title>heart</title>
//         <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.42 4.42,3 7.5,3C9.28,3 10.97,4 12,5.5C13.03,4 14.72,3 16.5,3C19.58,3 22,5.42 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z" />
//       </svg>
//     )}
//   </Button>
// </ButtonContainer>
//   );
// };

// export default FavoriteButton;
