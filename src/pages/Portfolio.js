import React from 'react';
import PortfolioCard from '../components/PortfolioCard';
import works from '../util/portfolio_list.json';

export default function Portfolio() {
    <main class="container
                mx-auto
                my-5 py-2
                rounded">
        <div class="row
                    text-center
                    page-header">
            <div class="col-md-12">
                <h1>Portfolio</h1>
                <hr />
            </div>
        </div>
        <div id="portfolio" class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            {works.map((item) => <PortfolioCard work={item}/>)}
        </div>
    </main>
}