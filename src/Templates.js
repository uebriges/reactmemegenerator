import styled from '@emotion/styled';
import axios from 'axios';
import { useEffect, useState } from 'react';

const templateURLsExt = [];

const TemplateImage = styled.img`
  height: 100px;
  width: 130px;
`;

const TemplateImageButton = styled.button`
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
  :hover {
    background-color: grey;
  }
`;

export function Templates(props) {
  const [currentTempalteURL, setCurrentTemplateURL] = useState('');
  const [templateURLs, setTemplateURLs] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.memegen.link/templates')
      .then(function (response) {
        setTemplateURLs(
          response.data.map((element) => {
            return element.blank;
          }),
        );
      })
      .catch(function (error) {
        console.log('Error: ', error);
      });
  }, [templateURLs]);

  return (
    <div>
      {templateURLs.map((element, index) => {
        return (
          <TemplateImageButton
            id="templateImage"
            key={'btn' + index}
            onClick={(e) => {
              setCurrentTemplateURL(e.target.src);
              props.scrollTo('preview');
              props.setBaseURL(e.target.src);
            }}
          >
            <TemplateImage
              key={element}
              src={element}
              alt="this is the alt text"
            />
          </TemplateImageButton>
        );
      })}
      <p>
        <img id="templateImage" alt="alt text juhu" src={currentTempalteURL} />
      </p>
    </div>
  );
}
