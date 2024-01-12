const Admin = () => {
    return (<>
        <div className="row box">
            <div className="col-8">
                <form>
                    {/* {JSON.stringify(inp)} */}
                    <div className="row">
                        <div className="col">
                            <input type="text" placeholder='Enter User Name' className='form-control' name="uname" required />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            <input className='form-control' placeholder='Enter your Password' type="password" name="pass" required />
                        </div>
                        {/* {JSON.stringify(UserById)} */}
                    </div>
                    <div className="row mt-3">
                        <div className="col text-center">
                            <input type="button" value="Udpate" className='btn btn-info' /> &nbsp;
                            <input type="reset" className='btn btn-warning' />
                        </div>

                    </div>
                </form>
            </div>
        </div>
    </>);
}

export default Admin;