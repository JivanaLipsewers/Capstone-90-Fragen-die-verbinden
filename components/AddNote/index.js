import { ButtonContainer, HeartButton } from "../Navigation/styles";

export function NoteButton({ isFavorite, onToggleFavorite }) {
  return (
    <ButtonContainer>
      <NoteButton onClick={onToggleFavorite} isFavorite={isFavorite}>
        {isFavorite ? (
          <svg viewBox="0 0 24 24" width="48" height="48">
            <title>note</title>
            <path
              d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"
              fill="#FFFFFF"
            />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="48" height="48">
            <title>note-outline</title>
            <path
              d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z"
              fill="#FFFFFF"
            />
          </svg>
        )}
      </NoteButton>
    </ButtonContainer>
  );
}
