import React from 'react';

const Home = () => {
    return (
        <div>
            <div className="home d-flex justify-content-around">
                <h1 className="mt-5 px-5 py-5"  style={{fontSize:"80px" ,fontWeight:"bolder", width:"50%"}}>Welcome to <br></br>My Shoping App</h1>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhSjuzexY2IdS01YjsrygVZ7qKgpJoHGslcsdLlpfifpXxIQRvLqeCWGtsSvnU5PRDB5s&usqp=CAU"  alt="shopimg" className='img' style={{width:"60%"}} />
            </div>
        </div>
    );
};

export default Home;