import Footer from "../components/Footer.tsx";
import {useState} from "react";

export default function Contact() {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [message, setMessage] = useState<string>("")

    function handleSubmit() {

    }

    return (
        <div className="flex flex-col items-center w-full h-screen space-y-4">
            <h1>Reach out below</h1>
            <div className="flex space-x-4">
                <div>
                    <h1>Contact info</h1>
                    <h2>Email: annguyen.221105sc@gmail.com</h2>
                    <h2>Phone: (+84) 862 711 602</h2>
                    <h2>Location: District 7, Ho Chi Minh City</h2>
                </div>
                <form className="space-y-4 gap-x-2">
                    <h1>Leave a message here</h1>
                    <input type="text" placeholder="Name" className="border mr-1" value={name} onChange={(e) => setName(e.target.value)}/>
                    <input type="text" placeholder="Email" className="border ml-1" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <br />
                    <textarea
                        className="border w-full h-20"
                        placeholder="Feel free to provide career opportunities here, or simply just say hello"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="cursor-pointer"
                        onSubmit={() => handleSubmit()}
                    >
                        Submit
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    )
}