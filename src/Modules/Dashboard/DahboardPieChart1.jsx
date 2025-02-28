import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';

import { Card, Col, Row, Select, Progress } from "antd";
const { Option } = Select;

const data = [
    {
      type: 'Present',
      value: 180
    },
    {
      type: 'Absent',
      value: 20
    }
  ];
  const config = {
    appendPadding: 5,
    data,
    innerWidth:100,
    width: 256,
    height: 200,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    label: {
      type: 'inner',
      offset: '-40%',
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
    legend: {
        layout: 'horizontal',
        position: 'bottom'
    },
    // theme: {
    //   colors10: [
    //     '#FF6B3B',
    //     '#626681'
    //   ]
    // }
  };

  
const DahboardPieChart1 = () => {
    return (
        <Pie {...config} />
    );
}
export default DahboardPieChart1;