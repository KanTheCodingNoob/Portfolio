import {Link} from "react-router-dom";

export default function Footer(){
	return (
		<footer className="flex justify-between px-2 w-full py-20">
			<p>© 2025 <a href="/">nguyenkhanhan.com</a></p>
			<div className="space-x-3">
				<Link to={"/resume.pdf"} target={"_blank"}>
					Resume
				</Link>
				<Link to={"https://github.com/KanTheCodingNoob"} target={"_blank"}>
					Github
				</Link>
				<Link to={"https://www.linkedin.com/in/khanh-an-nguyen-b1433619a/"} target={"_blank"}>
					LinkedIn
				</Link>
			</div>
		</footer>
	)
}