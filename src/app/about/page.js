'use client';
import React, { useEffect, useState } from 'react';
const about = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/getData');
      const jsonData = await response.json();
      setData(jsonData);

      console.log(jsonData);
    }

    fetchData();
  }, []);
  
  console.log(data);
  return (
    <div>
    {data.map((item) => (
        <div key={item._id}>
            <p>{item.title}</p>
            <div>{item.slug}</div>
            {item.thumb && item.thumb.length > 0 && (
              <ul>
                {item.thumb.map((subItem, subIndex) => (
                  <li key={subIndex}>{subItem.url}</li>
                ))}
              </ul>
            )}
            {item.profile && item.profile.length > 0 && (
              <ul>
                {item.profile.map((subItem, subIndex) => (
                  <li key={subIndex}>{subItem.name} {subItem.image}</li>
                ))}
              </ul>
            )}
        </div>
    ))}
	</div>
  );
}; 

export default about;
