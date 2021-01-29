import { useState } from 'react';
import { Cache } from './Cache';
import { Download } from './Download';
import { Templates } from './Templates';

let baseUrl = 'https://api.memegen.link/images/buzz/';

export default function MemeGenerator() {
  const [url, setUrl] = useState();
  let [draftTopText, setDraftTopText] = useState('');
  let [draftBottomText, setDraftBottomText] = useState('');
  const [generatedMemes, setGeneratedMemes] = useState();

  /* Generates Meme */
  function handleMemeGeneratorClick() {
    draftTopText = draftTopText
      .replace(/#/g, '~s')
      .replace(/\//g, '~h')
      .replace(/\?/g, '~q');
    draftBottomText = draftBottomText
      .replace(/#/g, '~s')
      .replace(/\//g, '~h')
      .replace(/\?/g, '~q');

    const testURL =
      baseUrl.substring(0, baseUrl.length - 4) +
      '/' +
      draftTopText +
      '/' +
      draftBottomText +
      '.jpg';
    setUrl(testURL);

    let memeArray = localStorage.getItem('generatedMemesKey')
      ? JSON.parse(localStorage.getItem('generatedMemesKey'))
      : [];

    if (
      !memeArray.some((meme) => {
        return meme.url === testURL;
      })
    ) {
      memeArray.push({
        url: testURL,
        toptext: draftTopText,
        bottomtext: draftBottomText,
      });
      localStorage.setItem('generatedMemesKey', JSON.stringify(memeArray));
      setGeneratedMemes(memeArray);
    }
  }

  /* Handles click of on any template button */
  function handleTemplateButtonClick(id) {
    document.getElementById(id).scrollIntoView();
  }

  /* Is used to forward to Templates component (=child) empowering the child setting a base URL in here, meaning Scraper component (=parent)  */
  function setBaseURL(baseurlLocal) {
    baseUrl = baseurlLocal;
  }

  return (
    <div>
      <Templates scrollTo={handleTemplateButtonClick} setBaseURL={setBaseURL} />
      <p>
        <label htmlFor="toptext">Enter the text for the top: </label>
        <input
          type="text"
          id="toptext"
          onChange={(e) => setDraftTopText(e.target.value)}
        />
      </p>
      <p>
        <label htmlFor="bottomtext">Enter the text for the bottom: </label>
        <input
          type="text"
          id="bottomtext"
          onChange={(e) => setDraftBottomText(e.target.value)}
        />
      </p>
      <p>
        <button onClick={handleMemeGeneratorClick}>Generate Meme</button>
        <img src={url} alt="This is alt text" id="preview" />
      </p>
      <Download url={url} />
      <Cache
        generatedMemes={JSON.parse(localStorage.getItem('generatedMemesKey'))}
      />
    </div>
  );
}
