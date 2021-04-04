import Styled from '@emotion/styled';

const TemplateImage = Styled.img`
  height: 100%;
  width: 130px;
`;

const TemplateImageButton = Styled.button`
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
  :hover {
    background-color: grey;
  }
  box-shadow: 2px 1px;
  display: flex;
`;

const TempalteBox = Styled.div`
  width: 100 vw;
  height: 150px;
  overflow: scroll;
  margin: 20px;
  padding: 10px;
  display: flex;
  ::-webkit-scrollbar {
    height: 13px;
    background: white;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #9f8484;
  }
`;

const ChosenTemplate = Styled.div`
  display: flex;
  justify-content: center;
  width: 20vw;
  height: 20vh;
`;

const GenerateMeme = Styled.div`
  align-items: center;
    flex-flow: column;
    display: flex;
`;

const GeneratedMeme = Styled.div`
  display: flex;
  justify-content: center;
  width: 20vw;
  height: 20vh;
`;

const MemeGenerationArea = Styled.section`
  display: flex;
  justify-content: space-around;
  align-items:center;
`;

const TextEntry = Styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CacheBox = Styled.div`
  width: 100 vw;
  height: 150px;
  overflow: scroll;
  margin: 20px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  ::-webkit-scrollbar {
    height: 13px;
    background: white;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #9f8484;
  }`;

const CacheImage = Styled.img`
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
  box-shadow: 2px 1px;
  display: flex;
`;

const Download = Styled.section`
  display: flex;
  justify-content: center;
  margin: 20px;
  padding: 10px;
`;

const EmptyDiv = Styled.div`
  background-color: grey;
  width: 100%;
  height: 100%;
`;

const IElement = Styled.i`
margin-left: 20px
`;

const exportedStyles = {
  TemplateImageButton,
  TempalteBox,
  ChosenTemplate,
  TemplateImage,
  GenerateMeme,
  GeneratedMeme,
  MemeGenerationArea,
  TextEntry,
  CacheBox,
  CacheImage,
  Download,
  EmptyDiv,
  IElement,
};
export default exportedStyles;
