import {Link} from "react-router-dom";

function Home() {

  return (
      <div className="flex flex-col items-center w-full h-screen space-y-4">
	  	<div className="flex h-40 items-center">
			<div className="flex-1">
				<h1>Hello, my name is Khanh An</h1> <br />
				<p>20 years old software engineer from Vietnam</p> <br />
				<p>Full-stack developer and AI engineer at your service</p> <br />
				<div className="space-x-3">
					<Link to={"/resume.pdf"}>
						Resume
					</Link>
					<Link to={"https://github.com/KanTheCodingNoob"} target={"_blank"}>
						Github
					</Link>
					<Link to={"https://www.linkedin.com/in/khanh-an-nguyen-b1433619a/"} target={"_blank"}>
						LinkedIn
					</Link>
				</div>
			</div>
			<div className="flex-1">
				Placeholder image
			</div>
		</div>
		<div>
			Hello
		</div>
	  </div>
  )
}

export default Home
