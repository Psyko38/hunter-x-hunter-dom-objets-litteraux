let cardssss = document.querySelector(".cardssss");
const Body = document.body;
const BTNlist = document.querySelectorAll(".BTN > button");
const Input = document.getElementById("inp");

let val = "";
Input.addEventListener("input", () => {
	val = Input.value;
	main(val, ImportentFilter);
});

let ImportentFilter = "";
for (let i = 0; i < BTNlist.length; i++) {
	BTNlist[i].addEventListener("click", () => {
		for (let c = 0; c < BTNlist.length; c++) {
			BTNlist[c].style.background = "#2a2e2f";
		}
		BTNlist[i].style.background = "#cc527e";
		if (i == 0) {
			ImportentFilter = "";
		}
		if (i == 1) {
			ImportentFilter = "SS";
		}
		if (i == 2) {
			ImportentFilter = "S";
		}
		main(val, ImportentFilter);
	});
}

function Filter(Text, data, IF) {
	console.log(`${Text}, ${IF}`);
	if (IF != "") {
		if (data.rank.toLowerCase().startsWith(IF.toLowerCase())) {
			if (Text == "") {
				CreatCards(data);
			} else {
				if (data.name.toLowerCase().includes(Text.toLowerCase())) {
					CreatCards(data);
				} else if (data.number.startsWith(Text)) {
					CreatCards(data);
				}
			}
		}
	} else {
		if (data.name.toLowerCase().includes(Text.toLowerCase())) {
			CreatCards(data);
		} else if (data.rank.toLowerCase().includes(Text.toLowerCase())) {
			CreatCards(data);
		} else if (data.number.includes(Text)) {
			CreatCards(data);
		}
	}
}

function CreatCards(JSON) {
	let mainDiv = document.createElement("div");
	mainDiv.classList.add("card");

	let idDiv = document.createElement("div");
	let p0 = document.createElement("p");
	p0.innerHTML = `${JSON.number}`;
	idDiv.appendChild(p0);

	let p1 = document.createElement("p");
	p1.innerHTML = `${JSON.name}`;
	idDiv.appendChild(p1);

	let p2 = document.createElement("p");
	p2.innerHTML = `${JSON.rank}`;
	idDiv.appendChild(p2);

	mainDiv.appendChild(idDiv);

	let img0 = document.createElement("img");
	img0.src = `${JSON.image}`;
	img0.alt = `${JSON.image}`;
	mainDiv.appendChild(img0);

	let infoDiv0 = document.createElement("div");
	let infoDiv1 = document.createElement("div");
	let p3 = document.createElement("p");
	p3.innerHTML = `${JSON.description}`;

	infoDiv1.appendChild(p3);
	infoDiv0.appendChild(infoDiv1);
	mainDiv.appendChild(infoDiv0);

	cardssss.appendChild(mainDiv);
}

async function main(q, im) {
	cardssss.remove();
	let c0 = document.createElement("div");
	c0.classList.add("cardssss");
	Body.appendChild(c0);
	cardssss = document.querySelector(".cardssss");
	try {
		const response = await fetch("xhunterxhunter.json");
		const json = await response.json();

		for (let i = 0; i < 100; i++) {
			Filter(q, json[i], ImportentFilter);
		}
	} catch (error) {
		console.error("Error fetching data:", error);
	}
}

main(val, ImportentFilter);
