import Footer from "../components/Footer.tsx";

export default function Contact() {
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
                <form className="space-y-4" action="https://formspree.io/f/myzjqwdl" method="post">
                    <h1>Leave a message here</h1>
                    <input type="name" name="name" placeholder="Name" className="border mr-1"/>
                    <input type="email" name="email" placeholder="Email" className="border ml-1"/>
                    <br />
                    <textarea
                        name="message"
                        className="border w-full h-20"
                        placeholder="Feel free to provide career opportunities here, or simply just say hello"
                    />
                    <button
                        type="submit"
                        className="cursor-pointer"
                    >
                        Send
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    )
}