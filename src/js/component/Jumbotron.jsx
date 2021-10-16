import React from "react";

const Jumbotron = () => {
	return (
		<div className="container bg-secondary p-5 text-dark bg-opacity-25 mb-5 ">
			<h1 className="mt-0 pt-0 display-1">A Warm Welcome!</h1>
			<p className="mt-5">
				Spacing utilities that apply to all breakpoints, from xs to xxl,
				have no breakpoint abbreviation in them. This is because those
				classes are applied from min-width: 0 and up, and thus are not
				bound by a media query. The remaining breakpoints, however, do
				include a breakpoint abbreviation. Bootstrap supports the
				latest, stable releases of all major browsers and platforms.
				Alternative browsers which use the latest version of WebKit,
				Blink, or Gecko, whether directly or via the platform’s web view
				API, are not explicitly supported. However, Bootstrap should (in
				most cases) display and function correctly in these browsers as
				well. More specific support information is provided below. You
				can find our supported range of browsers and their versions
			</p>

			<div className="btn-group" role="group" aria-label="Basic example">
				<button type="button" className="btn btn-primary my-5">
					Call to Action!
				</button>
			</div>
		</div>
	);
};

export default Jumbotron;
