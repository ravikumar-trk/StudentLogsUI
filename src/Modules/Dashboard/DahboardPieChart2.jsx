import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Liquid } from '@ant-design/plots';

const DahboardPieChart2 = () => {
  const config = {
    percent: .75,
    radius: 1,
    innerWidth:100,
    width: 256,
    height: 200,
    outline: {
      border: 2,
      distance: 4,
    },
    wave: {
      length: 128,
    },
  };
  return <Liquid {...config} />;
}
export default DahboardPieChart2;