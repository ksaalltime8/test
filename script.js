let lines = [];
let bidSheet = [];


// =============================
// LOAD LINES FROM API
// =============================

async function loadLines() {

    try {

        fetch("http://localhost:3000/api/lines")


        if (!response.ok) {
            throw new Error("Failed to load lines");
        }


        const data = await response.json();


        console.log("Lines loaded:", data);


        lines = data.lines || data;


        displayLines(lines);


    } catch(error) {


        console.error(
            "Loading lines error:",
            error
        );


        document.getElementById("linesContainer").innerHTML = `

        <div class="line-card">

        Unable to load lines.

        </div>

        `;


    }

}





// =============================
// DISPLAY LINES
// =============================


function displayLines(data){


const container =
document.getElementById("linesContainer");


container.innerHTML="";



data.forEach(line=>{


container.innerHTML += `


<div class="line-card">


<div class="line-header">


<div class="line-number">

Line ${line.lineNo}

</div>


<div class="match">

Crewly Match

</div>


</div>



<div class="info-grid">


<div class="info-box">

<span>
Aircraft
</span>

${line.aircraft}

</div>



<div class="info-box">

<span>
Route
</span>

${line.route}

</div>



<div class="info-box">

<span>
Block
</span>

${line.block}

</div>


<div class="info-box">

<span>
Credit
</span>

${line.credit}

</div>


<div class="info-box">

<span>
Layover
</span>

${line.layover}

</div>


</div>



<button onclick="addBid('${line.lineNo}')">

Add To Bid

</button>


</div>


`;


});


}







// =============================
// BID SHEET
// =============================


function addBid(id){


let line =
lines.find(
x=>x.lineNo == id
);



if(line && !bidSheet.includes(line)){


bidSheet.push(line);


renderBid();


}


}



function renderBid(){


const box =
document.getElementById("bidContainer");


box.innerHTML="";



bidSheet.forEach((line,index)=>{


box.innerHTML += `

<div class="bid-item">

<b>
${index+1}. Line ${line.lineNo}
</b>

<br>

${line.route}

</div>

`;



});


}






// START APP

window.onload = function(){

    loadLines();

};