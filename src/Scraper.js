import { useState } from 'react';
import { Cache } from './Cache';
import { Download } from './Download';
import Styles from './Styles';
import { Templates } from './Templates';

let baseUrl = 'https://api.memegen.link/images/buzz/';

export default function MemeGenerator() {
  const [url, setUrl] = useState('');
  const [draftTopText, setDraftTopText] = useState('');
  const [draftBottomText, setDraftBottomText] = useState('');
  const [currentTemplateURL, setCurrentTemplateURL] = useState('');

  /* Generates Meme */
  function handleMemeGeneratorClick() {
    // Make special characters #/? work
    setDraftTopText(
      draftTopText
        .replace(/#/g, '~s')
        .replace(/\//g, '~h')
        .replace(/\?/g, '~q'),
    );
    setDraftBottomText(
      draftBottomText
        .replace(/#/g, '~s')
        .replace(/\//g, '~h')
        .replace(/\?/g, '~q'),
    );

    const testURL =
      baseUrl.slice(0, baseUrl.length - 4) +
      '/' +
      draftTopText +
      '/' +
      draftBottomText +
      '.jpg';
    setUrl(testURL);

    const memeArray = localStorage.getItem('generatedMemesKey')
      ? JSON.parse(localStorage.getItem('generatedMemesKey'))
      : [];

    // Check if exact same meme is already stored in the localStore
    if (
      !memeArray.some((meme) => {
        return meme.url === testURL;
      })
    ) {
      memeArray.unshift({
        url: testURL,
        toptext: draftTopText,
        bottomtext: draftBottomText,
      });
      localStorage.setItem('generatedMemesKey', JSON.stringify(memeArray));
    }
  }

  /* Handles click of a template button */
  function handleTemplateButtonClick(id) {
    document.getElementById(id).scrollIntoView();
  }

  /* Is used to forward to Templates component (=child) empowering the child setting a base URL in here, meaning Scraper component (=parent)  */
  function setBaseURL(baseurlLocal) {
    baseUrl = baseurlLocal;
  }

  return (
    <div>
      <Templates
        scrollTo={handleTemplateButtonClick}
        setBaseURL={setBaseURL}
        setCurrentTemplateURL={setCurrentTemplateURL}
      />
      <Styles.MemeGenerationArea>
        <Styles.ChosenTemplate>
          {currentTemplateURL ? (
            <img
              id="templateImage"
              alt="alt text juhu"
              src={currentTemplateURL}
            />
          ) : (
            <Styles.EmptyDiv />
          )}
        </Styles.ChosenTemplate>
        <Styles.TextEntry>
          <p>
            <label htmlFor="toptext">Top Text: </label>
            <br />
            <input
              type="text"
              id="toptext"
              onChange={(e) => setDraftTopText(e.target.value)}
            />
          </p>
          <p>
            <label htmlFor="bottomtext">Bottom Text: </label>
            <br />
            <input
              type="text"
              id="bottomtext"
              onChange={(e) => setDraftBottomText(e.target.value)}
            />
          </p>
          <p>
            <button onClick={handleMemeGeneratorClick}>Generate Meme</button>
          </p>
        </Styles.TextEntry>
        <Styles.GeneratedMeme>
          {url ? (
            <img src={url} alt="This is alt text" id="preview" />
          ) : (
            <Styles.EmptyDiv />
          )}
        </Styles.GeneratedMeme>
      </Styles.MemeGenerationArea>
      <Download url={url} />
      <Cache
        generatedMemes={JSON.parse(localStorage.getItem('generatedMemesKey'))}
      />
    </div>
  );
}
