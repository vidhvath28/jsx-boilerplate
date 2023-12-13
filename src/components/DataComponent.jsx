import React from 'react';

const DataComponent = (props) => {
 let data = [
    {
      id: 1,
      img: elephant
    },
    {
      id: 2,
      img: elephant
    },
    {
      id: 3,
      img: elephant
    },
    {
      id: 4,
      img: elephant
    }
 ];

 return <div>{data.map(item => <p key={item.id}>{item.img}</p>)}</div>;
};

export default DataComponent;