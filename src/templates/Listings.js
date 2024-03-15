import React, { useState } from 'react';

// Sample data for cards
const sampleData = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  title: `Card ${index + 1}`,
  imageSrc: `https://via.placeholder.com/350x200?text=Card+${index + 1}`,
  link: `#`,
  source: `Hydroelectric Plant ${index + 1}`,
  quantityAvailable: `${800 - index} kWh`,
  pricing: `$${55 - index} per kWh`,
  location: `Delhi, India`,
}));

const CardsPerPage = 20;

function Listings() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOption, setFilterOption] = useState('all'); // Initial filter option

  const totalPages = Math.ceil(sampleData.length / CardsPerPage);
  const indexOfLastCard = currentPage * CardsPerPage;
  const indexOfFirstCard = indexOfLastCard - CardsPerPage;

  // Filter function based on filter option
  const filteredData = sampleData.filter((card) => {
    if (filterOption === 'all') return true; // If 'All' is selected, return all cards
    return card.source.toLowerCase().includes(filterOption.toLowerCase());
  });

  // Apply search term filter
  const searchedData = filteredData.filter((card) =>
    Object.values(card).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const currentCards = searchedData.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset pagination when search term changes
  };

  const handleFilterChange = (event) => {
    setFilterOption(event.target.value);
    setCurrentPage(1); // Reset pagination when filter option changes
  };

  return (
    <div className='mt-40 px-4'>
      <div className="search-filter-container mb-4 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search by anything..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="px-3 py-2 border border-gray-300 rounded w-1/3"
        />
        <select
          value={filterOption}
          onChange={handleFilterChange}
          className="px-3 py-2 border border-gray-300 rounded w-1/3"
        >
          <option value="all">All Sources</option>
          {Array.from(new Set(sampleData.map((card) => card.source))).map((source, index) => (
            <option key={index} value={source}>{source}</option>
          ))}
        </select>
      </div>
      <div className="cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentCards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
      <div className="Listings mx-auto text-center mt-6">
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index} className="px-4 py-2 m-2 text-xl bg-[#79E381] rounded-xl" onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Listings;

const Card = ({ imageSrc, link, source, quantityAvailable, pricing, location }) => {
  return (
    <div className="card-container p-4 rounded-lg border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg font-fam-bold">
      <a href={link}>
        <div className="relative overflow-hidden">
          <img
            className="object-cover w-full h-48"
            src={imageSrc}
            alt="Card Image"
          />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold">{source}</p>
          <p className="text-sm text-gray-500 font-fam">Quantity Available: {quantityAvailable}</p>
          <p className="text-sm text-gray-500 font-fam">Pricing: {pricing}</p>
          <p className="text-sm text-gray-500 font-fam">Location: {location}</p>
        </div>
        <button className='w-full p-1 rounded mt-4 bg-green-500'>
          Buy Now
        </button>
      </a>
    </div>
  );
};