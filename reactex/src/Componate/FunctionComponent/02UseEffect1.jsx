import { useEffect } from "react";
import { useState } from "react";

const UseeffectEx = () => {
    const [serverUrl, setServerUrl] = useState('https://localhost:1234');
    const [roomId, setRoomId] = useState('general');
    const [show, setShow] = useState(false);



    function createConnection(serverUrl, roomId) {
        return {
            connect() {
                console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...');
            },
            disconnect() {
                console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);

            }
        }

    }
    useEffect(() => {
        const Connection = createConnection(serverUrl, roomId);
        Connection.connect();
        //cleanup code here 
        return () => {
            Connection.disconnect();
        };
    }, [serverUrl, roomId]);

    return (
        <>

            <label>
                Choose the chat room:{''}
                <select value={roomId} onChange={e => setRoomId(e.target.value)}>
                    <option value='general'>General</option>
                    <option value='tech'>Travel</option>
                    <option value='music'>Music</option>
                </select>
            </label>
            <button onClick={() => setShow(!show)}>{show ? 'Close Chat' : 'Open chat'}</button>
            <br />
            <br />
            {show ? <>
                <label >
                    Server URL :{' '}
                    <input type="text" value={serverUrl} onChange={e => setServerUrl(e.target.value)} />
                </label>
                <h1>Welcome to the {roomId} room!</h1>
            </> : null}

        </>
    );

}



export default UseeffectEx;
