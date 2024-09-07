import { BrowserRouter } from "react-router-dom";
import {
	About,
	Contact,
	Experience,
	Hero,
	Navbar,
	Tech,
	Projects,
	StarsCanvas,
} from "./components";
import Education from "./components/Education";

// https://www.youtube.com/watch?v=0fYi8SGA20k

function App() {
	return (
		<BrowserRouter>
			<div className="relative z-0 dark:bg-primary bg-light_primary">
				<div className="dark:bg-hero-pattern bg-hero-bg-light bg-cover bg-no-repeat bg-center">
					<Navbar />
					<Hero />
				</div>
				<About />
				<Education />
				<Experience />
				<Tech />
				<Projects />
				{/* <Feedbacks /> */}
				<div className="relative z-0">
					<Contact />
					<StarsCanvas />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
