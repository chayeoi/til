import React from 'react';
import { useSample } from '../contexts/sample';

const Receives = ({ value }) => {
  return (
    <div>
      현재 설정된 값: {value}
    </div>
  );
};

export default useSample(Receives);