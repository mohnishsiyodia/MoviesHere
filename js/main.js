function mobileCheck() {
	var winWidth = $(window).width();
	if (winWidth <= 768) {
		$("#sidebar").after($("#body .pagination:first"))
	} else {
		$(".products-wrap").before($("#body .pagination:first"))
	}
}

const btn = document.querySelector('#submitVal');
const search = $("#addMovie").text();
console.log(search)

function getapidata(s) {
	var api_url =
		"http://www.omdbapi.com/?s=abcd&apikey=e0620bd4";
		const xhr = new XMLHttpRequest();
  
        // Open an obejct (GET/POST, PATH,
        // ASYN-TRUE/FALSE)
        xhr.open("GET", api_url, true);
  
  
  
  
        // When response is ready
        xhr.onload = function () {
            if (this.status === 200) {
  
                // Changing string data into JSON Object
                obj = JSON.parse(this.responseText);
				console.log(obj);
                // Getting the ul element
                let list = document.getElementById("list");
                str = ""
                for (key in obj.data) {
                    str += `<li>${obj.data[key].employee_name}</li>`;
                }
                list.innerHTML = str;
            }
            else {
                console.log("File not found");
            }
        }
  
        // At last send the request
        xhr.send();
}




btn.addEventListener('click', function () {
	getapidata(search);
})

// vue.component('modal', {
// 	template: `
// 		<div class="modal is-active">
// 			<div class="modal-background"></div>
// 			<div class="modal-content">
// 				<div class="box">
// 					<p>
// 						bfgasduyfgaddfbuydfgsdhvbdhgyzsdhvzdvcyjhd
// 						fhsdguysdvbcdftyasgfsdhfvgzsdjZDbyhdgvbzd
// 						jhzgvbzdgvzdyfbdfuysfsdfjh
// 					</p>
// 				</div>
// 			</div>	
// 			<button class="modal-close is-large" aria-label="close"></button>
//   		</div>
// 	`


// })
