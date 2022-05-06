import React from 'react'

const Contact = () => {
    return (
        <div name="contact" className="w-full h-screen bg-white flex justify-center items-center p-4">
            <form action="https://getform.io/f/e8fe660c-3917-4db1-a8c0-8d5b1b400a22" method="POST" className="flex flex-col max-w-[600px] w-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-cyan-400 text-black">Contact</p>
                    <p className="text-black py-4 font-semibold">Submit the form below</p>
                </div>
                <input type="text" placeholder="Name" name="name" required className="my-3 p-2.5 outline-none bg-gray-200 text-black rounded-md text-lg"/>
                <input type="text" placeholder="Email" name="email" required className="my-3 p-2.5 outline-none bg-gray-200 text-black rounded-md text-lg"/>
                <textarea name="message" rows="10" placeholder="Message" required className="bg-gray-200 text-black p-2.5 outline-none rounded-md text-lg"></textarea>
                <button className="text-white border-2 px-6 py-3 my-2 flex items-center justify-center hover:bg-cyan-400 hover:border-black text-center font-semibold bg-black">Submit contact info</button>
            </form>
            
        </div>
    )
}

export default Contact
