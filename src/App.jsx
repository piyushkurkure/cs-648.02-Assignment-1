
class App extends React.Component {
	render() {
		return (
			<div className="container border">
				<h1 className="border">Piyush Kurkure</h1>

				<img className="border" src="/images/profilepic.jpg" width="300px" />
				
        		<p>I am graduate student at San Diego State University currently pursiung masters degree in Computer Science. I enjoy doing projects keep motivating myself from the output of them.</p>
        
        		<a href="https://github.com/Piyush-Kurkure/" target="_blank">
					<button className="border"><h3>Link to Github</h3></button>
				</a>
			</div>
		)
	}
}

ReactDOM.render(React.createElement(App), document.getElementById("name"));