import React from 'react';
import PortfolioCard from '../components/PortfolioCard';
import works from '../util/portfolio_list.json';

export default function Portfolio() {
    return (
        <main className="container
                mx-auto
                my-5 py-2
                rounded">
            <div className="row
                    text-center
                    page-header">
                <div className="col-md-12">
                    <h1>Portfolio</h1>
                    <hr />
                </div>
            </div>
            <div id="portfolio" className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                {works.map((item) => <PortfolioCard item={item} />)}
            </div>
        </main>
    )
}