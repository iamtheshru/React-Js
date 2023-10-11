import React, { Component } from "react";
import { Link } from "react-router-dom";
class DynamicSubMenuex extends Component {
    constructor(props) {
        super(props);
        this.state = { open: true };
    }
    inputHandle = () => {
        this.setState({ open: !this.state.open })
    }
    render() {
        const menuItems = [
            {
                title: 'Services',
                url: '/services',
                submenu: [
                    {
                        title: 'web design',
                        url: 'web-design',
                    }, {
                        title: 'web development',
                        url: 'web-dev',
                    }, {
                        title: 'SEO',
                        url: 'seo',
                    },
                ],
            },
        ];
        const Menudata = menuItems.map((data) => {

            let submenudata = data.submenu.map((submenu) => {
                return <>

                    <li><Link to={submenu.url}>{submenu.title}</Link></li>
                </>
            })
            return <>
                {/* <ol>{submenudata}</ol> */}
                {this.state.open ? <>
                    <button onClick={this.inputHandle}>Services</button>
                </> : <>
                    <button onClick={this.inputHandle}>Services</button>
                    <ol>{submenudata}</ol>

                </>}
            </>
        })

        return (<>
            <ol>{Menudata}</ol>
        </>)
    }
}

export default DynamicSubMenuex;