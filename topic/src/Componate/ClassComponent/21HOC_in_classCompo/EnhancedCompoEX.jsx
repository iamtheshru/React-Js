import React, { Component } from 'react'

const EnhancedCompoEX = (OriginalCompo) => {
    class newClass extends Component {
        clickHnadle = () => {
            fetch('https://fakestoreapi.com/products/category/jewelery')
                .then((response) => response.json())
                .then((result) => {
                    let data = result;
                    let div = document.getElementById('div')

                    for (let index = 0; index < data.length; index++) {
                        const aaa = data[index]["image"];
                        const bbb = data[index]["id"];
                        console.log(aaa);
                        let p = document.createElement('p')
                        p.textContent += bbb;
                        let img = document.createElement('img');
                        img.setAttribute('src', aaa)
                        p.append(img)
                        div.append(p)
                    }
                })
                .catch((error) => console.log("error"));
        }
        render() {
            return (
                <>
                    <OriginalCompo clickHnadle={this.clickHnadle} />
                </>
            )
        }
    }
    return newClass

}
export default EnhancedCompoEX;