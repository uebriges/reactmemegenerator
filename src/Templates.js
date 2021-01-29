import axios from 'axios';
import { useEffect, useState } from 'react';
import Styles from './Styles';

export function Templates(props) {
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
    <>
      <p>
        <i style={{ 'margin-left': '20px' }}>Your selection of templates: </i>
      </p>
      <Styles.TempalteBox>
        {templateURLs.map((element, index) => {
          return (
            <Styles.TemplateImageButton
              id="templateImage"
              key={'btn' + index}
              onClick={(e) => {
                props.setCurrentTemplateURL(e.target.src);
                props.scrollTo('templateImage');
                props.setBaseURL(e.target.src);
              }}
            >
              <Styles.TemplateImage
                key={element}
                src={element}
                alt="this is the alt text"
              />
            </Styles.TemplateImageButton>
          );
        })}
      </Styles.TempalteBox>
    </>
  );
}
