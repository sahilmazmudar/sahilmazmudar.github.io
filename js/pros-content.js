var pros = [
  ["3/27/22", "Local Signs", "I live in downtown vancouver. A few blocks from my house is Seymour Health Center - a medical clinic that by the mercy of COVID-19 became a de-facto testing site for residents of the area. I moved into this apartment in August 2020 and have been living here since (as of this writing in April 2022). Interestingly, this clinic has been a reliable barometer of the spread of the virus at any given point throughout the pandemic. Folks line up outside the clinic for a PCR test. The line always seems to get longer as cases spike. My spidey-senses tingle when the line stretches a bit longer outside the buildings entrance columns and starts wrapping around Horby Street. Despite the news (and there's a lot to be said about the news), a simple line of people a few blocks from my house has been how I decided to evaluate the spread of the virus in my community. The past few months have offered a glimmer of hope as restrictions in British Columbia have been lifted completely (with the exception of vaccine passports). As of today morning however, as I stepped out for an afternoon stroll in the Vancouver rain, I noticed that line spill out a bit longer than I've noticed in a while. Looking forward to this."],
]

let pContents = '';

pros.forEach( i => {
	pContents += 
	`<div class="row">
            <div class="card" style="width: 30rem;">
              <div class="card-body">
                <h5 class="card-title">${i[0]}</h5>
                <p class="card-text">${i[1]}</p><br>
                <p class="card-text">${i[2]}</p><br>
              </div>
            </div>
    </div>`
});

document.querySelector("#pros-content").innerHTML = pContents;
