import Image from 'next/image'

export default function Home() {
  return (
    <div>
    <div className=' sm:mx-auto mb-0 mt-5'>
      <div className='grid grid-cols-1 md:grid-cols-2 '>
        <div style={{fontSize:50, paddingLeft:30}}>
          <h1>Fly Easy 
          Fly Smart<br/>
           Your Journey
           Our Priority</h1>
        </div>
        <div className='col-span-1' style={{marginTop:-100}}>
        <Image src='/asset/p2.png'
            alt='plane-image'
            width={450}
            height={450}
            />
        </div>
      </div>
      </div>

<div className='container mx-auto mt--70 p-5 text-ellipsis'>
<div className='bg-white p-6 rounded-lg shadow-lg'>
  <div className='flex flex-col md:flex-row md:items-center gap-5 mb-4'>
    <div className='md:flex-grow'>
      <input type='radio' name='trip' />
      <label className='ml-1'>Round-trip</label>
    </div>
    <div className='md:flex-grow'>
      <input type='radio' name='trip' />
      <label className='ml-1'>One-way</label>
    </div>
    <div className='md:flex-grow'>
      <input type='radio' name='trip' />
      <label className='ml-1'>Multi-city</label>
    </div>
    <div>
      <select className='bg-gray-100 rounded-md px-2 py-1'>
        <option value='1'>Economy</option>
        <option value='2'>Business</option>
      </select>
    </div>
  </div>
  <div className='flex flex-col md:flex-row gap-4'>
    <div className='md:flex-grow'>
      <input type='text' placeholder='From' className='border rounded-md p-2' />
    </div>
    <button className='bg-blue-500 text-white rounded-md p-2 md:mt-0 mt-2'>➔</button>
    <div className='md:flex-grow'>
      <input type='text' placeholder='To' className='border rounded-md p-2' />
    </div>
    <div className='md:flex-grow'>
      <input type='date' className='border rounded-md p-2' />
    </div>
    <div>
      <input type='button' value='Search' className='bg-blue-500 text-white rounded-md p-2 cursor-pointer' />
    </div>
  </div>
</div>
</div>
    
</div>
  )
}
