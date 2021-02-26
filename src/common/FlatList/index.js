import React from 'react';

const FlatList = ({ data, Child }) => {
  return (
    <>
      {data.map((items, i) => {
        return <Child key={i} {...items} />
})}
    </>
  );
};

export default FlatList;
