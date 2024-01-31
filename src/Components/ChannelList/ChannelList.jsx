// src/ChannelList.js
import React from 'react';

const channels = [
  {
    id: 1,
    name: 'Channel 1',
    description: 'Description for Channel 1',
    imageUrl: 'https://placekitten.com/100/100', // Use your channel image URL
  },
  {
    id: 2,
    name: 'Channel 2',
    description: 'Description for Channel 2',
    imageUrl: 'https://placekitten.com/100/101', // Use your channel image URL
  },
  // Add more channels as needed
];

const ChannelList = () => {
  return (
    <div className='pt-[50px] bg-slate-900'>
      <div className='flex justify-center w-full p-5'>
        <input type='text' max={20} className='p-1 outline-none text-orange-600 bg-slate-800 w-[300px]'  placeholder='Search Channel here '/>
        <button className='bg-slate-400 p-2 rounded-tr-lg rounded-br-lg hover:bg-orange-600 hover:text-balck hover:font-semibold'>Search</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-slate-900  min-h-[100vh] h-fit">
        {channels.map((channel) => (
          <div key={channel.id} className="bg-slate-700 p-4 rounded shadow-md h-fit">
            <img
              src={channel.imageUrl}
              alt={channel.name}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <div className='flex'>
              <div className='px-5 pr-10 pt-2'>
                <img src="" alt=""  className='w-[70px] h-[70px] rounded-full'/>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2 text-orange-600">{channel.name}</h2>
                <p className="text-gray-400">{channel.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChannelList;
