import React from 'react';

const box = (WrappedComponent, importclassName, importId) => {
  const className = importclassName ? 'box ' + importclassName : 'box';
    return props => (
      <div className={className} id={importId}>
        <WrappedComponent {...props}/>
      </div>
    );
};

export default box;
