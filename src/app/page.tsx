import React from 'react'
import Searchbar from '../../components/Searchbar'
import Card from '../../components/Card'

function page() {
  return (
    <div>
      <Searchbar />
      <div className="container mx-auto my-6">
      <h1 className="text-3xl font-semibold mb-6">Dummy Cards</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Render 3 dummy cards */}
        <Card />
        <Card />
        <Card />
      </div>
    </div>
    </div>
  )
}

export default page