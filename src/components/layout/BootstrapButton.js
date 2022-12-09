import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

function LoadingButton() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <Button
      className='btn btn-info'
      href='/quiz' 
      style={{
        backgroundColor: '#ABEBFF',
        color: 'white',
        fontSize: '18px',
        fontWeight: '600',
        padding: '10px 60px',
        borderRadius: '5px',
        margin: '10px 0px',
        cursor: 'pointer'
      }} 
      variant="primary"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? 'Loading…' : 'Take the Quiz'}
    </Button>
  );
}

export default LoadingButton;