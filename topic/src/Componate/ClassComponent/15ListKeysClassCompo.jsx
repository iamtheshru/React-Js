import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class ListKeysClassCompo extends Component {
    render() {
        const array = [1, 2, 3, 4, 5];
        const ResponseFromMap = array.map((data) => {
            return data * 2;
        });
        console.log(ResponseFromMap);

        const ResponseFromForEach = array.forEach(element => {
            console.log(element);
        })
        console.log(ResponseFromForEach);

        const obj = {
            "HomePage": "Home",
            "AboutPage": "About",
            "ContactPage": "Contact"
        }
        const responseFromObj1 = Object.keys(obj).map((key) => {
            // console.log(key);
            // console.log(`${key} : ${obj[key]}`);
            return key;
        });
        console.log(responseFromObj1);


        const responseFromObj2 = Object.entries(obj).map(([key, value], index) => {
            // console.log(key, value);
            // console.log(`${key}:${value}`);
            return <li key={index}><Link to={key}>{value}</Link></li>
        });
        console.log(responseFromObj2);


        return (
            <>
                <ul>{responseFromObj2}
                    <a href="https://codepen.io/mingshin430/pen/RwPoKy?editors=1010">Slider Reference for json object</a>
                    <pre>
                        const menuItems = [ <br />
                        &#123; <br />
                        &nbsp; title: 'Services', <br />
                        &nbsp; url: '/services', <br />
                        &nbsp; submenu: [ <br />
                        &nbsp;&nbsp;&nbsp; &#123; <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; title: 'web design', <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; url: 'web-design', <br />
                        &nbsp;&nbsp;&nbsp; &#125;, &#123; <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; title: 'web development', <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; url: 'web-dev', <br />
                        &nbsp;&nbsp;&nbsp; &#125;, &#123; <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; title: 'SEO', <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; url: 'seo', <br />
                        &nbsp;&nbsp;&nbsp; &#125;, <br />
                        &nbsp; ], <br />
                        &#125;, <br />
                        // ... <br />
                        ]; <br />
                    </pre>
                </ul>
                <br />
            </>
        )
    }
}
