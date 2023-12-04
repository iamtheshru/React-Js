import React from 'react';
import styles from './styles.module.css';


const CSSModuleCompo = () => {
    return (<>
        <section className={styles.container}>
            CssModuleCompo
        </section>
        <h4>Our generated HTML elements will look like this:</h4>

        <a href="https://www.freecodecamp.org/news/how-to-style-react-apps-with-css/">Reference</a>

        &lt;p class="_styles__testimonial-name_309571057"&gt; <br />
        Tammy Stevens <br />
        &lt;/p&gt; <br />

        <p>
            Plus, CSS modules solve the problem of global scope in CSS. As compared to our normal CSS stylesheets, CSS declared using modules to individual components will not cascade to child components.
        </p>
        <p>
            Therefore, CSS modules are best to use over CSS and SASS to make sure classes don't conflict and to write predictable styles that only apply to one or another component.
        </p>
        👍 Pros:
        <ul>
            <li> Styles are scoped to one or another component (unlike CSS / SASS)</li>
            <li> Unique, generated classnames ensure no style conflict</li>
            <li> Can use them immediately without setup in CRA projects</li>
            <li> Can be used with SASS / CSS</li>
        </ul>
        👎 Cons:

        <ul>
            <li> Can be tricky to reference classnames</li>
            <li> May be a learning curve to use CSS styles like object properties</li>
        </ul>
    </>);
}

export default CSSModuleCompo;