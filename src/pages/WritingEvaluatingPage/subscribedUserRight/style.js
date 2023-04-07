import styled from "styled-components";

const WritingPageDiv = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200,300;500;700;900&family=Rubik:wght@400;500;600&display=swap');
  font-family: 'Poppins', sans-serif;
  background-color: rgb(245, 245, 245);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  min-height: 100%;
  position: relative;
`;

const GrammarContainer = styled.div`

  /* margin:100px 7% 5vh 7%; */
  padding: 20px;
  text-align:left;
`;

const Button = styled.button`
  font-weight: 500;
  bottom: 20px;
  right: 30px;
  position: absolute;
  border: none;
  border-radius: 6px;
  color: white;
  padding: 5px;
  width: 10em;
  height: 33px;
  background-color:#1677ff;
  &:hover {
    cursor: pointer;
    background-color:#4096ff;
  }`;
export { WritingPageDiv, GrammarContainer, Button };
