// import { ButtonContainer, Button } from "./style";
// import { useState } from "react";
// import AddQuestion from "../AddQuestion/index.js";
// import FavoriteButton from "../FavoriteButton/index.js";

// const Buttons = ({ id, onToggleFavorite }) => {
//   console.log("BUTTOS", typeof onToggleFavorite);
//   const [isPlusFilled, setIsPlusFilled] = useState(false);
//   const [isClipboardFilled, setIsClipboardFilled] = useState(false);
//   const [isHeartFilled, setIsHeartFilled] = useState(false);
//   const [isAddingQuestion, setIsAddingQuestion] = useState(false);

//   const handlePlusClick = () => {
//     setIsPlusFilled(!isPlusFilled);
//     setIsAddingQuestion(!isAddingQuestion);
//   };

//   const handleHeartClick = () => {};

//   const handleClipboardClick = () => {
//     setIsClipboardFilled(!isClipboardFilled);
//   };

//   return (
//     <>
//       <ButtonContainer>
//         <Button onClick={handlePlusClick}>
//           {isPlusFilled ? (
//             <svg viewBox="0 0 24 24" width="32" height="32">
//               <title>plus filled</title>
//               <path d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
//             </svg>
//           ) : (
//             <svg viewBox="0 0 24 24" width="32" height="32">
//               <title>plus</title>
//               <path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z" />
//             </svg>
//           )}
//         </Button>
//         <FavoriteButton id={id} onToggleFavorite={onToggleFavorite} />
//         {/* <Button onClick={handleHeartClick}>
//           {isHeartFilled ? (
//             <svg viewBox="0 0 24 24" width="32" height="32">
//               <title>heart filled</title>
//               <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
//             </svg>
//           ) : (
//             <svg viewBox="0 0 24 24" width="32" height="32">
//               <title>heart</title>
//               <path d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
//             </svg>
//           )}
//         </Button> */}
//         <Button onClick={handleClipboardClick}>
//           {isClipboardFilled ? (
//             <svg viewBox="0 0 24 24" width="32" height="32">
//               <title>clipboard filled</title>
//               <path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
//             </svg>
//           ) : (
//             <svg viewBox="0 0 24 24" width="32" height="32">
//               <title>clipboard</title>
//               <path d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z" />
//             </svg>
//           )}
//         </Button>
//       </ButtonContainer>
//       {isAddingQuestion && <AddQuestion />}
//     </>
//   );
// };

// export default Buttons;
