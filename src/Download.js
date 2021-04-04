import React from 'react';
import Styles from './Styles';

export function Download(props) {
  /* Handles the download of the generated meme. */

  function handleDownloadClick() {
    fetch(props.url).then((response) => {
      response.arrayBuffer().then((buffer) => {
        const element = document.createElement('a');
        const file = new Blob([buffer], { type: 'image/jpeg' });
        element.href = URL.createObjectURL(file);
        element.download = 'image.jpg';
        element.click();
      });
    });
  }

  return (
    <Styles.Download>
      <button onClick={handleDownloadClick} download>
        Download generated meme
      </button>
    </Styles.Download>
  );
}
