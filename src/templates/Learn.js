import React from 'react';
import BuyerFlowchart from './assets/Images/Buyer-Flowchart.webp';
import SellerFlowchart from './assets/Images/SellerFlowchart.webp';
import AboutImage from './assets/Images/sunset-sky-powers-wind-solar-energy-generated-by-ai.jpg';

function Contact() {
    return (
        <div className='mt-[100px] font-fam'>
            <img src={AboutImage} alt="" className='w-full h-40 md:h-80 object-cover text-justify'/>
            <section className='mt-10 w-4/5 mx-auto mb-10'>
                <h1 className='text-3xl font-bold mb-4'>Benefits of Renewable Energy:</h1>
                <p className="mb-4">Renewable energy sources offer numerous benefits, including:</p>
                <ul className='list-disc ml-6'>
                    <li>Environmental Benefits: Minimal greenhouse gas emissions, reduced air and water pollution, and mitigated ecological impacts.</li>
                    <li>Economic Benefits: Job creation, local economic development, and energy cost savings.</li>
                    <li>Social Benefits: Improved energy access and equity, particularly in rural and underserved communities.</li>
                </ul>
            </section>

            <div className='flex flex-col md:flex-row gap-10 mx-auto justify-center items-center'>
                <div className='text-center'>
                    <h2 className='text-3xl font-bold mb-4'>Flow for Buyers</h2>
                    <img src={BuyerFlowchart} alt="Buyer Flowchart" className='h-80 md:h-96' />
                </div>
                <div className='text-center'>
                    <h2 className='text-3xl font-bold mb-4'>Flow for Sellers</h2>
                    <img src={SellerFlowchart} alt="Seller Flowchart" className='h-80 md:h-96' />
                </div>
            </div>

            <section className='w-4/5 mx-auto my-10'>
                <h1 className='text-3xl font-bold mb-4'>Overview of the Current Status:</h1>
                <p className="mb-4">India has emerged as one of the global leaders in renewable energy deployment, driven by ambitious targets, favorable policies, and rapid technological advancements. The country's renewable energy sector has witnessed significant growth in recent years, with increasing investments, capacity additions, and adoption of clean energy technologies.</p>
                
                <h2 className="text-xl font-bold mb-2">Installed Capacity:</h2>
                <p className="mb-4">As of December 2023, India's total installed renewable energy capacity exceeds 180.79 GW, comprising solar, wind, hydro, biomass, and other sources.</p>

                <h2 className="text-xl font-bold mb-2">Solar Energy:</h2>
                <p className="mb-4">India has become one of the largest solar energy markets in the world, with a substantial increase in solar photovoltaic (PV) installations across utility-scale, rooftop, and decentralized applications. The Solar Energy Corporation of India (SECI) and various state agencies have been instrumental in promoting solar power through auctions, incentives, and supportive policies.</p>

                <h2 className="text-xl font-bold mb-2">Wind Energy:</h2>
                <p className="mb-4">Wind power remains a significant contributor to India's renewable energy portfolio, with extensive wind farms installed across coastal regions, plains, and high-wind corridors. The Ministry of New and Renewable Energy (MNRE) has implemented schemes to promote wind energy development, including competitive bidding processes and feed-in tariffs.</p>

                <h2 className="text-xl font-bold mb-2">Hydroelectric Power:</h2>
                <p className="mb-4">Despite challenges related to land acquisition, environmental clearances, and grid connectivity, India continues to harness its hydroelectric potential through large-scale dams, run-of-the-river projects, and small hydro installations. Efforts are underway to modernize existing hydro plants and explore new sites for sustainable hydropower development.</p>

                <h2 className="text-xl font-bold mb-2">Biomass and Others:</h2>
                <p className="mb-4">Biomass energy, including biogas, biomass power, and biofuels, plays a crucial role in India's rural energy landscape, providing clean cooking fuel, electricity, and heat to millions of households and industries. Additionally, emerging technologies such as tidal energy, geothermal, and ocean energy hold promise for further diversifying India's renewable energy mix.</p>
            </section>

            <section className='w-4/5 mx-auto my-10'>
                <h1 className='text-3xl font-bold mb-4'>What is Ethereum and How it Differs from Bitcoin:</h1>
                <p className="mb-4">Ethereum is a decentralized platform that enables developers to build and deploy decentralized applications (dApps) using blockchain technology. It differs from Bitcoin in several key aspects:</p>
                <ul className='list-disc ml-6'>
                    <li>Purpose: Ethereum is designed as a platform for executing smart contracts and building decentralized applications, while Bitcoin primarily serves as a digital currency and payment system.</li>
                    <li>Functionality: Ethereum's blockchain is programmable, allowing developers to create and execute code (smart contracts) directly on the blockchain, whereas Bitcoin's scripting language is limited in functionality.</li>
                    <li>Flexibility: Ethereum supports a wider range of use cases beyond peer-to-peer payments, including decentralized finance (DeFi), decentralized exchanges (DEXs), non-fungible tokens (NFTs), and more.</li>
                    <li>Consensus Mechanism: Ethereum is transitioning from proof-of-work (PoW) to proof-of-stake (PoS) consensus mechanism (Ethereum 2.0), whereas Bitcoin relies on PoW for consensus.</li>
                </ul>
            </section>

            <section className='w-4/5 mx-auto my-10'>
                <h1 className='text-3xl font-bold mb-4'>Introduction to Blockchain Technology:</h1>
                <p className="mb-4">Blockchain is a distributed ledger technology that enables the secure recording, storage, and sharing of data across a network of computers (nodes) in a tamper-resistant and transparent manner. Key features include:</p>
                <ul className='list-disc ml-6'>
                    <li>Decentralization: Eliminates the need for a central authority or intermediary.</li>
                    <li>Transparency: Transactions are visible to all participants, ensuring transparency and immutability.</li>
                    <li>Immutability: Once recorded, data cannot be altered or deleted.</li>
                    <li>Security: Utilizes cryptographic techniques to secure transactions and ensure network integrity.</li>
                </ul>
                <p className="mt-4">Blockchain plays a crucial role in securing transactions by grouping them into blocks and cryptographically linking them in a sequential chain, forming a tamper-evident record. Consensus mechanisms ensure agreement on transaction validity.</p>
            </section>

            <section className='w-4/5 mx-auto my-10'>
                <h1 className='text-3xl font-bold mb-4'>Smart Contracts and Their Utilization in Ethereum:</h1>
                <p className="mb-4">Smart contracts are self-executing contracts with terms written into code. They automatically enforce and execute the terms when predefined conditions are met. In Ethereum:</p>
                <ul className='list-disc ml-6'>
                    <li>Ethereum's programmable blockchain enables creation and execution of smart contracts using Solidity.</li>
                    <li>Smart contracts facilitate various purposes including token issuance, DeFi, supply chain management, digital identity, and more.</li>
                    <li>By leveraging smart contracts, Ethereum enables secure and transparent transactions, automated processes, and dApps development across industries.</li>
                </ul>
            </section>

            <section className='w-4/5 mx-auto my-10'>
                <h1 className='text-3xl font-bold mb-4'>Securing Ethereum Wallets and Private Keys:</h1>
                <p className="mb-4">Secure Ethereum wallets and private keys by:</p>
                <ul className='list-disc ml-6'>
                    <li>Using Hardware Wallets</li>
                    <li>Backing up Private Keys</li>
                    <li>Enabling Two-Factor Authentication (2FA)</li>
                    <li>Keeping Software Updated</li>
                </ul>
            </section>

            <section className='w-4/5 mx-auto my-10'>
                <h1 className='text-3xl font-bold mb-4'>Identifying and Avoiding Scams and Phishing Attempts:</h1>
                <p className="mb-4">Avoid scams and phishing attempts by:</p>
                <ul className='list-disc ml-6'>
                    <li>Verifying Website URLs</li>
                    <li>Beware of Phishing Emails and Messages</li>
                    <li>Double-Check Addresses</li>
                    <li>Avoid Unrealistic Promises</li>
                </ul>
            </section>

            <section className='w-4/5 mx-auto my-10'>
                <h1 className='text-3xl font-bold mb-4'>Platform Security Measures:</h1>
                <p className="mb-4">Implement platform security measures such as:</p>
                <ul className='list-disc ml-6'>
                    <li>Encryption and SSL</li>
                    <li>Multi-factor Authentication (MFA)</li>
                    <li>Regular Security Audits</li>
                    <li>Customer Education</li>
                </ul>
            </section>
        </div>
    );
}

export default Contact;