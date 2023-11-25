import { useEffect, useRef, useState } from "react";
import ChildComponent from './ChildComponent.jsx';


const UserImperativeMain = () => {
    const childRef = useRef()
    const [ele, setEle] = useState();

    useEffect(() => {
    }, [ele])

    const resetTable = () => {
        setEle([,])
    }
    const parentFunction = async (data) => {
        console.log("called parentFunction update", data);
        await setEle(data)
    }


    return (<>
        Parent

        {(ele && ele.length) ?
            <table>
                <thead>
                    <tr>
                        <th>col-1</th>
                        <th>col-2</th>
                    </tr>
                </thead>
                <tr>
                    <td>{ele[0]}</td>
                    <td>{ele[1]}</td>
                </tr>
                <tr>
                    <td>{ele[2]}</td>
                    <td>{ele[3]}</td>
                </tr>
            </table> : "no data"}

        <div className="row mt-5">
            <div className="col">
                <button className='btn mt-2' onClick={() => childRef.current.getAlert()}>Shuffle</button>
                <button className='btn_2 ms-5' onClick={resetTable} >Reset</button>
            </div>
        </div>
        <ChildComponent ref={childRef} onAddHandler={parentFunction} />
    </>);
}

export default UserImperativeMain;