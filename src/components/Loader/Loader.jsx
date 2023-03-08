import './Loader.css'

const Loader = () => {


    return (
        <div className='loader'>
            <div className="lds-circle"><div><p>?</p></div></div>
            <div className="lds-circle circle2"><div><p>?</p></div></div>
            <div className="lds-circle circle3"><div><p>?</p></div></div>
            <div className="lds-circle circle4"><div><p>?</p></div></div>
        </div>
    )
}

export default Loader