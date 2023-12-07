import React from 'react';
import LatestCollectionChild from './LatestCollectionBox.jsx';

const LatestCollection = () => {
    return (
        <>
            <section class="banner-bottom-w3ls-agileinfo">
                <div class="portfolio" id="portfolio">
                    <div class="container">
                        <h3 class="tittle text-center">Latest Collection</h3>
                        <div class="inner-sec-wthree-agileits"></div>
                        <ul class="portfolio-categ filter text-center mb-lg-5 mb-3">
                            <li class="port-filter all active">
                                <a href="#">All</a>
                            </li>
                            <li class="cat-item-1">
                                <a href="#" title="Category 1">Category 1</a>
                            </li>
                            <li class="cat-item-2">
                                <a href="#" title="Category 2">Category 2</a>
                            </li>
                            <li class="cat-item-3">
                                <a href="#" title="Category 3">Category 3</a>
                            </li>
                            <li class="cat-item-4">
                                <a href="#" title="Category 4">Category 4</a>
                            </li>
                        </ul>
                        <ul class="portfolio-area clearfix">
                            <LatestCollectionChild Img="assets/images/g1.jpg" />
                            <LatestCollectionChild Img="assets/images/g2.jpg" />
                            <LatestCollectionChild Img="assets/images/g3.jpg" />
                            <LatestCollectionChild Img="assets/images/g4.jpg" />
                            <LatestCollectionChild Img="assets/images/g5.jpg" />
                            <LatestCollectionChild Img="assets/images/g6.jpg" />
                            <LatestCollectionChild Img="assets/images/g7.jpg" />
                            <LatestCollectionChild Img="assets/images/g8.jpg" />
                            <LatestCollectionChild Img="assets/images/g9.jpg" />
                        </ul>
                    </div>
                </div>
            </section >
        </>
    );
};

export default LatestCollection;