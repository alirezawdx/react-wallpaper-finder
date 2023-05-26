import './../assets/css/loader.css';

function Loader() {
    return (
        <div className='loader-container'>
            <div className='lds-ripple'>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Loader;