setInterval(showTime, 1000);
        function showTime() {
        	let time = new Date();
        	let hour = time.getHours();
        	let min = time.getMinutes();
        	let sec = time.getSeconds();
        	let am_pm = "PM";
			if (hour < 12) {
        		am_pm = "AM";
        	}
		    if (hour > 12) {
        		hour -= 12;
        		am_pm = "PM";
        	}
			if (hour == 0) {
        		hr = 12;
        		am_pm = "AM";
        	}

            hour = hour < 10 ? "0" + hour : hour;
        	min = min < 10 ? "0" + min : min;
        	sec = sec < 10 ? "0" + sec : sec;
        
        	let currentTime = hour + ":"
        		+ min + ":" + sec + am_pm;
        
        	document.getElementById("time0").innerHTML = currentTime;
			console.log(currentTime);
        }
        showTime();

		//set wakeup time (5am to 12pm) image set,text set,etc
       
        function myom1(){
			let time=new Date();
			hour=time.getHours();
			let time1a = document.getElementById("time1").value ;
			let time1b = document.getElementById("time2").value ;
			let time1c = document.getElementById("time3").value ;
			let time1d = document.getElementById("time4").value ;
			//let image = document.querySelector('#imgi5');
			console.log(hour,time1a,time1b,time1c,time1d);
			if(hour===parseInt(time1a)){
				console.log(hour,time1a);
				document.getElementById("i7").innerText="GOOD MORNING!! WAKE UP!!";
			document.getElementById("imgi5").src="Group 5183.svg";
			document.getElementById("i9").innerText="Wake Up Time:5AM-8AM;LunchTime:default;NapTime:default;Night Time:default"
			document.getElementById("i4").innerText="GRAB SOME HEALTHY BREAKFAST!!";
			}
			else if(hour===parseInt(time1b)){
				console.log(hour,time1b);
				document.getElementById("i7").innerText="GOOD AFTERNOON!! TAKE SOME SLEEP";
				document.getElementById("imgi5").src="Group 5183 B.svg";
				document.getElementById("i9").innerText="Wake Up Time:default;Lunch Time:12PM-5PM;Nap Time:default;Night Time:default";
				document.getElementById("i4").innerText="LET'S HAVE SOME LUNCH!!";
			}
			else if(hour===parseInt(time1c)){
				console.log(hour,time1c);
				document.getElementById("i7").innerText="GOOD EVENING!!";
				document.getElementById("imgi5").src="Glunch_image.png";
				document.getElementById("i9").innerText="Wake Up Time:default;Lunch Time:default;Nap Time:5PM-9PM;Night Time:default";
				document.getElementById("i4").innerText="STOP YAWNING, GET SOME TEA...ITS JUST EVENING TIME";
			}
			else if(hour===parseInt(time1d)){
				console.log(hour,time1d);
				document.getElementById("i7").innerText="GOOD NIGHT!!";
				document.getElementById("imgi5").src="Group 5194.svg";
				document.getElementById("i9").innerText="Wake Up Time:default ;Lunch Time:default;Nap Time:default;Night Time:9PM-5AM";
				document.getElementById("i4").innerText="CLOSE YOUR EYES AND GOTO SLEEP";
			}
}
        
	/* let textchange1=document.getElementById("i8")
		textchange1.addEventListener('click',()=>{
			let time=new Date();
			hour=time.getHours();
			console.log(hour)
        if(hour>=5 && hour<12){
			document.getElementById("i4").innerText="GRAB SOME HEALTHY BREAKFAST!!";
        }
        else if(hour>=12 && hour<5){
			document.getElementById("i4").innerText="LET'S HAVE SOME LUNCH!!";
        }
        if(hour>=5 && hour<9){
			document.getElementById("i4").innerText="STOP YAWNING, GET SOME TEA...ITS JUST EVENING TIME";
        }
        if(hour>=9 && hour<5){
			document.getElementById("i4").innerTextL="CLOSE YOUR EYES AND GOTO SLEEP";
        }
	});*/
	