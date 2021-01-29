import React from 'react';

export function Cache(props) {
  console.log('props.generatedMemes: ', typeof props.generatedMemes);
  return (
    <>
      <p>
        <i>This is your cache: </i>
      </p>
      <div>
        {props.generatedMemes.map((element) => {
          return <img src={element.url} alt="your cache" key={element.url} />;
        })}
      </div>
    </>
  );
}
