import styled, { keyframes } from "styled-components";
export const WritingPageDiv = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200,300;500;700;900&family=Rubik:wght@400;500;600&display=swap');
font-family: 'Poppins', sans-serif;
background-color: rgb(245, 245, 245);
display: flex;
flex-wrap: wrap;

justify-content: space-between;
width: 100%;
height: max-content;
position: relative;

  button.back {
    background-color: transparent;
    color: rgb(47, 113, 218);
    width: max-content;
    border: none;
    position: absolute;
    top: 0;
    left: 15px;
    font-size: 1.4rem;
    font-weight: 560;
    font-family: "Poppins", sans-serif;
    :hover {
      cursor: pointer;
    }
  }

  .left {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 2rem 10px 5vh 20px;
    border-radius: 10px;
    background-color: white;
    width: 45%;
    min-width: 340px;
    height: 81vh;
    flex: 1;
    .topic {
      // styles for the textarea

      // disable the textarea if resubmit is true
      &[disabled] {
        background-color: #f2f2f2;
        color: #999;
        cursor: not-allowed;
      }
    }
    textarea {
    resize:none;
    border: none;
    font-family: 'Poppins', sans-serif;
    font-size: .8rem;
    line-height: 1.5rem;
    border: none;

    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-scrollbar-track {
      background-color: #f1f1f1;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(162, 162, 181, 0.828);
    }
    &::placeholder {
     line-height: 2.8rem;

      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      color: #ccccccc9;
      padding-bottom: 10px;
      text-underline-position: under;
      text-decoration: underline;
    }

    &:focus {
      outline: none;
      border: 1 px solid rgb(18, 13, 13);
    }


    width: 80%;
  }

  &:disabled {
    background-color: #ccc;
    /* change the background color */
    color: #666;
    /* change the text color */
    // cursor: not-allowed; /* change the cursor */
    /* add any other styles you want */
    }
  }

    .topic {
      width: 80%;
      margin: 30px auto;
      height: 15vh;
    }

    .flex-col {
      display: flex;
      flex-direction: column;
    }

  .content {
    margin: 25px auto 10px;
    width: 80%;
    height: 46vh;
    // overflow-y: hidden;

  }

    hr {
      border: 1px solid rgb(47, 113, 218);
      height: 0;
      width: 90%;
      margin: auto;
    }

    textarea {
      border: none;

      &::placeholder {
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;600;700&family=Rubik:wght@400;500;600&display=swap");
        font-family: "Poppins", sans-serif;
        font-size: 1.5rem;
        font-weight: 500;
        color: #ccccccc9;
        padding-bottom: 10px;
        text-underline-position: under;
        text-decoration: underline;
      }

      &:focus {
        outline: none;
        border: 1 px solid rgb(18, 13, 13);
      }

      font-size: large;

    width: 80%;
  }`;
export const BackButton = styled.button` position: absolute;
top:20px;
`;
export const RightCard = styled.div`
  position: relative;
  margin: 2rem 20px 5vh 10px;
  border-radius: 10px;
  background-color: white;
  width: 45%;
  min-width: 340px;

  flex: 1;`;
export const PreFeedbacks = styled.div`
  margin: 70px 50px 50px;
  display: flex;
  flex-direction: column;
  gap: auto;
  height: 70vh;

  .preFeed {
    text-align: start;
    font-weight: 400;
    font-size: large;
    color: rgb(40, 86, 161);
  }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingContainer = styled.div`
  position: absolute;
  top: 40%;
  align-content: center;
  background-color: transparent;
  position: relative;
  .loader {
    border: 5px solid #f3f3f3;
    border-top: 5px solid rgb(47, 113, 218);
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: ${spin} 1s linear infinite;
    margin: 0 auto;
  }
  .loading-text {
    font-family: "Poppins";
    font-size: 1.5rem;
    text-align: center;
    margin-top: 10px;
  }
`;

export const NoFeed = styled.div`
margin-left: 8%;
text-align: start;
font-weight: 700;
margin-top: 30px;
padding-bottom: 10px;
font-size: 1.5rem;
font-weight: 600;
color: #ccccccc9;
padding-bottom: 10px;
text-underline-position: under;
text-decoration: underline;
`;

export const FeedbackContainer = styled.div`
flex-direction: column;
justify-content: space-around;
gap:10px;
display: flex;
margin: 5rem 10% 10%;
text-align: left;
height: 66vh;
height: min-content;

#moment {
  position:absolute;
  right:30px; 
  top:1rem;
  font-size: 0.5rem;
  color: #969494c9;
}
button {
  font-family: 'Poppins';
  font-weight: 500;
  bottom: 10px;
  right: 20px;
  position: absolute;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 5px;
  width: 10rem;
  height: 33px;
  background-color:#1677ff;
  &:hover {
    cursor: pointer;
    background-color:#4096ff;
  }
}
&::-webkit-scrollbar {
  display: hidden;
}
p {
  color: rgb(55, 109, 196);
  font-size: 1.4rem;
  position: absolute;
  top: 8px;
  right: 10%;
}
span {
  color: gb(55, 109, 196);
  font-size: 4rem;
  font-weight: bold;
}
`;

export const Group = styled.div`
height: min-content;
font-size: .7rem;
h3 {
  margin: 0;
}
span{
  font-size:.7rem;
  color:#777;
  font-weight: 400;
}
.thin {
  font-weight: 400;
}
.sliced{
  &:hover{
    cursor: pointer;
  }
}
.scores {
  font-size: 1rem;
  font-weight: 400;
  color: rgb(55, 109, 196);
}
`;

export const Draft = styled.div`
font-family: "Poppins";
font-weight: 500;
bottom: "10px";
right: "20px";
position: "absolute";
border: "none";
border-radius: "10px";
color: "rgb(47, 113, 218)";
padding: "5px";
width: "6rem";
height: "min-content";
background-color: "white";
`;

export const NoPre = styled.p`
font-size: 1.5rem;
font-weight: 600;
color: #ccccccc9;`;

export const InputCardBottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* width: 100%; */
  justify-content: space-between;
  position:absolute;
  left:20px;
  bottom:10px ;
  right:10px;
  
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-left: 10px;
  font-size: "12px";
  font-weight: 700;
`;
