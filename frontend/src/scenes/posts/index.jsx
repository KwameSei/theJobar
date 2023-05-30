import React, { useState } from "react";
// import Nav from "./Nav";

const Posts = () => {
    const [thread, setThread] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ thread });
        setThread("");
    };
    return (
        <>
            {/* <Nav /> */}
            <main className='posts'>
                <h2 className='post_heading'>Create a Thread</h2>
                <form className='postForm' onSubmit={handleSubmit}>
                    <div className='post_container'>
                        <label htmlFor='thread'>Let the world know</label>
                        <input
                            type='text'
                            name='thread'
                            required
                            value={thread}
                            onChange={(e) => setThread(e.target.value)}
                        />
                    </div>
                    <button className='homeBtn'>CREATE THREAD</button>
                </form>
            </main>
        </>
    );
};

export default Posts;