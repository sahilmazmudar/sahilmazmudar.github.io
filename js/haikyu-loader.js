var haikyus = [
  ["3/29/22", "The lives we have lived", "The lives we have yet to live", "Thai food tomorrow."],
  ["3/28/22", "Once upon a time", "I made some lamb curry", "The lamb is fuckin raw."],
  ["3/27/22","A fresh powder day", "Tad faster than yesterday", "'Pop' goes the tailbone."],
	["3/26/22","Words floating around", "Pick and chose what you desire", "Soon, there will be none."],
  ["3/25/22","$500 lost again", "'I swear the next one is it'", "Make another bet."]
]

let hContents = '';

haikyus.forEach( i => {
	hContents += 
	`<div class="row">
            <div class="card" style="width: 30rem;">
              <div class="card-body">
                <h5 class="card-title">${i[0]}</h5	>
                <p class="card-text">${i[1]}</p><br>
                <p class="card-text">${i[2]}</p><br>
                <p class="card-text">${i[3]}</p><br>
              </div>
            </div>
    </div>`
});

document.querySelector("#haikyu-content").innerHTML = hContents;
