import {useEffect} from "react";

const ScrollProgress = () => {
	useEffect(() => {
		const body = document.body;
		const progressBar = document.querySelector(".progress__bar");

		const updateProgress = () => {
			let scrollPos =
				(window.scrollY / (body.scrollHeight - window.innerHeight)) * 100;
			progressBar.style.width = `${scrollPos}%`;
			requestAnimationFrame(updateProgress);
		};

		updateProgress();

		// Clean up function
		return () => {
			progressBar.style.width = "0";
		};
	}, []);

	return (
		<div>
			<div className="progress__wrapper">
				<div className="progress__bar bg-gradient-to-r from-yellow-400 via-green-400 to-blue-600"></div>
			</div>
			<article className="article__content">
				<h1 className="text-3xl font-bold mb-4">Lorem ipsum dolor sit amet</h1>
				<p className="mb-4">
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum
					dolor sit amet, consectetuer adipiscing elit. Etiam neque. Curabitur
					bibendum justo non orci. Nam libero tempore, cum soluta nobis est
					eligendi optio cumque nihil impedit quo minus id quod maxime placeat
					facere possimus, omnis voluptas assumenda est, omnis dolor
					repellendus.
				</p>
				<h2 className="text-xl font-bold mb-2">Place 1</h2>
				<img
					src="images/lavender-field.jpg"
					alt="Lavender Field"
					className="mb-4 rounded-lg shadow-lg"
				/>
				<p className="mb-6">
					Nullam at arcu a est sollicitudin euismod. Nam quis nulla. In enim a
					arcu imperdiet malesuada. Pellentesque habitant morbi tristique
					senectus et netus et malesuada fames ac turpis egestas. In laoreet,
					magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet
					sapien wisi sed libero. Morbi imperdiet, mauris ac auctor dictum, nisl
					ligula egestas nulla, et sollicitudin sem purus in lacus.
				</p>
				<h2 className="text-xl font-bold mb-2">Place 2</h2>
				<img
					src="images/autumn.jpg"
					alt="Autumn"
					className="mb-4 rounded-lg shadow-lg"
				/>
				<p className="mb-6">
					Fusce suscipit libero eget elit. Ut enim ad minima veniam, quis
					nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
					aliquid ex ea commodi consequatur? Phasellus rhoncus. Integer
					vulputate sem a nibh rutrum consequat. Maecenas fermentum, sem in
					pharetra pellentesque, velit turpis volutpat ante, in pharetra metus
					odio a lectus. Phasellus et lorem id felis nonummy placerat.
					Pellentesque sapien. Praesent in mauris eu tortor porttitor accumsan.
					Mauris tincidunt sem sed arcu. Aliquam ante. Nulla quis diam.
					Temporibus autem quibusdam et aut officiis debitis aut rerum
					necessitatibus saepe eveniet ut et voluptates repudiandae sint et
					molestiae non recusandae. Fusce tellus odio, dapibus id fermentum
					quis, suscipit id erat. Phasellus et lorem id felis nonummy placerat.
				</p>
				<h2 className="text-xl font-bold mb-2">Place 3</h2>
				<img
					src="images/summer.jpg"
					alt="Summer"
					className="mb-4 rounded-lg shadow-lg"
				/>
				<p className="mb-6">
					Aenean vel massa quis mauris vehicula lacinia. Phasellus enim erat,
					vestibulum vel, aliquam a, posuere eu, velit. Integer rutrum, orci
					vestibulum ullamcorper ultricies, lacus quam ultricies odio, vitae
					placerat pede sem sit amet enim. Curabitur vitae diam non enim
					vestibulum interdum. Pellentesque pretium lectus id turpis. Mauris
					tincidunt sem sed arcu. In rutrum. Nulla quis diam. Duis sapien nunc,
					commodo et, interdum suscipit, sollicitudin et, dolor. Nullam sapien
					sem, ornare ac, nonummy non, lobortis a enim. Maecenas fermentum, sem
					in pharetra pellentesque, velit turpis volutpat ante, in pharetra
					metus odio a lectus. Nam sed tellus id magna elementum tincidunt.
				</p>
				<h2 className="text-xl font-bold mb-2">Place 4</h2>
				<img
					src="images/forest.jpg"
					alt="Forest"
					className="mb-4 rounded-lg shadow-lg"
				/>
				<p className="mb-6">
					Maecenas sollicitudin. Nullam dapibus fermentum ipsum. Fusce aliquam
					vestibulum ipsum. Maecenas libero. Fusce suscipit libero eget elit.
					Aenean vel massa quis mauris vehicula lacinia. Quis autem vel eum iure
					reprehenderit qui in ea voluptate velit esse quam nihil molestiae
					consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
					pariatur? In convallis. Nullam sit amet magna in magna gravida
					vehicula. Maecenas aliquet accumsan leo. Integer malesuada. Nemo enim
					ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
					quia consequuntur magni dolores eos qui ratione voluptatem sequi
					nesciunt. Curabitur sagittis hendrerit ante. In laoreet, magna id
					viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi
					sed libero.
				</p>
			</article>
		</div>
	);
};

export default ScrollProgress;
