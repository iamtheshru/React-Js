import emailjs from 'emailjs-com'
const BuyData = () => {

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_m3aw8uk', //service key
            'template_wjo6tck', //template Key
            e.target,
            'GPmjDXDLLJWPn1DTn' //Public Key
        ).then(res => {
            console.log(res)
            e.target.reset();
        })
    }

    return (<>
        <form className="for" onSubmit={sendEmail}>
            <div className="form_group mt-3" >
                <input type='text' className="w-75 d-block mx-auto" name="name" style={{ padding: "20px 20px" }} placeholder="enter your name" required />
                {/* <input type="tel" className="w-75 d-block mx-auto" name="" style={{ padding: "20px 20px" }} placeholder="enter your phone No" required /> */}
            </div>
            <div className="form_group mt-3">
                <input className="w-75 d-block mx-auto" name="mail" style={{ padding: "20px 20px" }} type="email" placeholder="enter your email" required />
            </div>
            <button className="btn d-block mx-auto mt-3 text-black"  >
                Successfully Buy
            </button>
        </form>
    </>);
}

export default BuyData;