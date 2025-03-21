const cardssss = document.querySelector(".cardssss");

function loadCards() {
	fetch("xhunterxhunter.json")
		.then((response) => response.json())
		.then((json) => {
			for (let i = 0; i < 100; i++) {
				CreatCards(json[i]);
			}
		})
		.catch((error) => console.error("Error fetching data:", error));
}

function CreatCards(data) {
	console.log(data);

	let mainDiv = document.createElement("div");
	mainDiv.classList.add("card");

	let idDiv = document.createElement("div");
	let p0 = document.createElement("p");
	p0.innerHTML = `${data.number}`;
	idDiv.appendChild(p0);

	let p1 = document.createElement("p");
	p1.innerHTML = `${data.name}`;
	idDiv.appendChild(p1);

	let p2 = document.createElement("p");
	p2.innerHTML = `${data.rank}`;
	idDiv.appendChild(p2);

	mainDiv.appendChild(idDiv);


	let img0 = document.createElement("img");
	img0.src = `${data.image}`;
	img0.alt = `${data.image}`;
	mainDiv.appendChild(img0);


	let infoDiv0 = document.createElement("div");
	let infoDiv1 = document.createElement("div");
	let p3 = document.createElement("p");
	p3.innerHTML = `${data.description}`;


	infoDiv1.appendChild(p3);
	infoDiv0.appendChild(infoDiv1);
	mainDiv.appendChild(infoDiv0);


	cardssss.appendChild(mainDiv);
}

loadCards();
