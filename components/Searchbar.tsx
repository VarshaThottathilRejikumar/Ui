'use client'
import React, { useState } from 'react';

export default function Home() {
  const [tripType, setTripType] = useState('roundTrip');

  const handleTripTypeChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setTripType(e.target.value);
  };

  return (
    <div>
      {/* radio button part */}

        {/* roundtrip */}
       <div className='container mx-auto mt-5 p-3 text-ellipsis'>
        <div className='bg-white p-4 rounded-lg shadow-lg'>
          <div className='flex flex-col md:flex-row md:items-center gap-3 mb-3'>
            <div className='md:flex-grow'>
              <input
                type='radio'
                name='trip'
                value='roundTrip'
                checked={tripType === 'roundTrip'}
                onChange={handleTripTypeChange}
              />
              <label className='ml-1'>Round-trip</label>
            </div>

            {/* One-Way */}
            <div className='md:flex-grow'>
              <input
                type='radio'
                name='trip'
                value='oneWay'
                checked={tripType === 'oneWay'}
                onChange={handleTripTypeChange}
              />
              <label className='ml-1'>One-way</label>
            </div>

            {/* Multi-city */}
            <div className='md:flex-grow'>
              <input
                type='radio'
                name='trip'
                value='multiCity'
                checked={tripType === 'multiCity'}
                onChange={handleTripTypeChange}
              />
              <label className='ml-1'>Multi-city</label>
            </div>
            <div>
              <select className='bg-gray-100 rounded-md px-2 py-1'>
                <option value='1'>Economy</option>
                <option value='2'>Business</option>
                <option value='3'>First class</option>
                <option value='4'>Premium</option>
              </select>
            </div>
          </div>

          {/* give from-to-date */}
                {/* Round trip */}
          {tripType === 'roundTrip' && (
            <div className='flex flex-col md:flex-row gap-2 mr-2'>
              <div className='md:flex-grow'>
                <input
                  type='text'
                  placeholder='From'
                  className='border rounded-md p-2'
                />
              </div>
              <button className='bg-blue-500 text-white rounded-md p-1 md:mt-0 mt-2'>
                ⇆
              </button>
              <div className='md:flex-grow'>
                <input
                  type='text'
                  placeholder='To'
                  className='border rounded-md p-2'
                />
              </div>
              <div className='md:flex-grow'>
                <input
                  type='date'
                  placeholder='Departure Date'
                  className='border rounded-md p-2'
                />
              </div>
              <div className='md:flex-grow'>
                <input
                  type='date'
                  placeholder='Return Date'
                  className='border rounded-md p-2'
                />
              </div>
              <div>
                <input
                  type='button'
                  value='Search'
                  className='bg-blue-500 text-white rounded-md p-2 cursor-pointer'
                />
              </div>
            </div>
          )}

          {/* One-way */}
          {tripType === 'oneWay' && (
            <div className='flex flex-col md:flex-row gap-2'>
              <div className='md:flex-grow'>
                <input
                  type='text'
                  placeholder='From'
                  className='border rounded-md p-2'
                />
              </div>
              <button className='bg-blue-500 text-white rounded-md p-1 md:mt-0 mt-2'>
              ⇆
              </button>
              <div className='md:flex-grow'>
                <input
                  type='text'
                  placeholder='To'
                  className='border rounded-md p-2'
                />
              </div>
              <div className='md:flex-grow'>
                <input
                  type='date'
                  placeholder='Departure Date'
                  className='border rounded-md p-2'
                />
              </div>
              <div>
                <input
                  type='button'
                  value='Search'
                  className='bg-blue-500 text-white rounded-md p-2 cursor-pointer'
                />
              </div>
            </div>
          )}

          {/*Multi-city */}
          {tripType === 'multiCity' && (
            <div>
              <div className='flex flex-col md:flex-row gap-2'>
              <div className='md:flex-grow'>
                <input
                  type='text'
                  placeholder='From'
                  className='border rounded-md p-2'
                />
              </div>
              <button className='bg-blue-500 text-white rounded-md p-1 md:mt-0 mt-2'>
              ⇆
              </button>
              <div className='md:flex-grow'>
                <input
                  type='text'
                  placeholder='To'
                  className='border rounded-md p-2'
                />
              </div>
              <div className='md:flex-grow'>
                <input
                  type='date'
                  placeholder='Departure Date'
                  className='border rounded-md p-2'
                />
              </div>
              <div>
                <input
                  type='button'
                  value='Search'
                  className='bg-blue-500 text-white rounded-md p-2 cursor-pointer'
                />
              </div>
            </div>
            <div className='flex flex-col md:flex-row gap-2'>
              <div className='md:flex-grow'>
                <input
                  type='text'
                  placeholder='From'
                  className='border rounded-md p-2'
                />
              </div>
              <button className='bg-blue-500 text-white rounded-md p-1 md:mt-0 mt-2'>
              ⇆
              </button>
              <div className='md:flex-grow'>
                <input
                  type='text'
                  placeholder='To'
                  className='border rounded-md p-2'
                />
              </div>
              <div className='md:flex-grow'>
                <input
                  type='date'
                  placeholder='Departure Date'
                  className='border rounded-md p-2'
                />
              </div>
              <div>
                <input
                  type='button'
                  value='Search'
                  className='bg-blue-500 text-white rounded-md p-2 cursor-pointer'
                />
              </div>
            </div>
            </div>
            
          )}
        </div>
      </div>
    </div>
  );
}
