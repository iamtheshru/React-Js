import React from "react";

const FunctionComponentIntro = () => {
    return (
        <>
            <div className="row">
                <div className="col offset-6">
                    <pre>
                        class Welcome extends React.Component &#123; <br />
                        &nbsp;&nbsp; render() &#123;<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;return &lt;h1&gt;Hello, &#123;this.props.name&#125;&lt;/h1&gt;;<br />
                        &nbsp;&nbsp;&nbsp;&#125;<br />
                        &nbsp;&#125;<br />
                    </pre>
                </div>
            </div>
        </>
    )
}
export default FunctionComponentIntro;