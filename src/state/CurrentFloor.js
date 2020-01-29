import React from 'react';

const currentFloorContext = React.createContext({
  floor: 1,
  changeFloor: () => {},
  floorClass: "xiapia"
});

export default currentFloorContext;