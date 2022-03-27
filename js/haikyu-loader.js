var haikyus = [
  ["3/27/22","A fresh powder day", "A tad faster than yesterday", "'Pop' goes the tailbone."],
	["3/26/22","Words floating around", "Pick and chose  desire", "Soon, there will be none."],
  ["3/25/22","$500 lost again", "'I swear the next one is it'", "Make another bet."],
]

let content = '';

haikyus.forEach( i => {
	content += 
	`<div class="row">
            <div class="card" style="width: 30rem;">
              <div class="card-body">
                <h5 class="card-title">${i[0]}</h5	>
                <p class="	">${i[1]}</p><br>
                <p class="card-text">${i[2]}</p><br>
                <p class="card-text">${i[3]}</p><br>
              </div>
            </div>
    </div>`
});

document.querySelector("#haikyu-content").innerHTML = content;
