import React from 'react';

const LatestCollectionBox = (props) => {
    return (
        <>
            <li className="portfolio-item2" data-id="id-0" data-type="cat-item-4">
                <div>
                    <span className="image-block img-hover">
                        <a className="image-zoom rounded" href="images/g1.jpg" data-gal="prettyPhoto[gallery]">
                            <img src={props.Img} className="img-fluid rounded" alt="" />
                        </a>
                    </span>
                </div>
            </li>
        </>
    );
};

export default LatestCollectionBox;