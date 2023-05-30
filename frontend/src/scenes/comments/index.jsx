import React, { useState } from "react";

const Commentss = () => {
    const [comment, setComment] = useState("");

    const handleSubmitReply = (e) => {
        e.preventDefault();
        console.log({ comment });
        setComment("");
    };

    return (
        <main className='comments'>
            <form className='modal_content' onSubmit={handleSubmitReply}>
                <label htmlFor='comment'>comment</label>
                <textarea
                    rows={5}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    type='text'
                    name='reply'
                    className='modalInput'
                />

                <button className='modalBtn'>SEND</button>
            </form>
        </main>
    );
};

export default Commentss;