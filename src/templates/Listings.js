import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CardsPerPage = 20;

function Listings() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOption, setFilterOption] = useState('all'); // Initial filter option
  const [sellers, setSellers] = useState([]); // Rename to sellers

  useEffect(() => {
    const fetchSellers = async () => { // Update function name
      try {
        const response = await axios.get('http://localhost:5000/seller');
        setSellers(response.data); // Update state to sellers
      } catch (error) {
        console.error(error);
      }
    };

    fetchSellers();
  }, []);

  const totalPages = Math.ceil(sellers.length / CardsPerPage);
  const indexOfLastCard = currentPage * CardsPerPage;
  const indexOfFirstCard = indexOfLastCard - CardsPerPage;

  // Apply search term and filter
  const filteredData = sellers.filter((seller) => {
    if (filterOption === 'all') return true;
    return seller.username.toLowerCase().includes(filterOption.toLowerCase());
  });

  const searchedData = filteredData.filter((seller) =>
    Object.values(seller).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const currentSellers = searchedData.slice(indexOfFirstCard, indexOfLastCard);

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
    <div className='mt-20 px-4'>
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
          {Array.from(new Set(sellers.map((seller) => seller.username))).map((username, index) => ( // Update to map over sellers and username
            <option key={index} value={username}>{username}</option>
          ))}
        </select>
      </div>
      <div className="cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentSellers.map((seller, index) => (
          <Card
            key={index}
            imageSrc={seller.image}
            source={seller['energy type']} // Pass username as source
            name={seller.seller}
            quantityAvailable={seller.quantity} // Pass quantity as quantityAvailable
            pricing={seller.price} // Pass price as pricing
            location={seller.location} // Pass location as location
          />
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

const Card = ({ imageSrc, name, link, source, quantityAvailable, pricing, location }) => {
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
          <p className="text-base font-fam-bold">{name} - <span style={{ textTransform: 'capitalize' }}>{source}</span></p>
          <p className="text-sm text-gray-500 font-fam"> <span className='font-bold'>Quantity Available: </span>{quantityAvailable} MW</p>
          <p className="text-sm text-gray-500 font-fam"> <span className='font-bold'>Pricing:</span>  ₹ {pricing}</p>
          <p className="text-sm text-gray-500 font-fam"> <span className='font-bold'>Location: </span> {location}</p>
        </div>
        <button className='w-full p-1 rounded mt-4 bg-green-500'>
          Buy Now
        </button>
      </a>
    </div>
  );
};