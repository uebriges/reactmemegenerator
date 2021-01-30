import React from 'react';
import Styles from './Styles';

export function Cache(props) {
  console.log('props.generatedMemes: ', typeof props.generatedMemes);
  return (
    <>
      <p>
        <i style={{ 'margin-left': '20px' }}>Your generated memes: </i>
      </p>
      <Styles.CacheBox>
        {props.generatedMemes
          ? props.generatedMemes.map((element) => {
              return (
                <Styles.CacheImage
                  src={element.url}
                  alt="your cache"
                  key={element.url}
                />
              );
            })
          : ''}
      </Styles.CacheBox>
    </>
  );
}
