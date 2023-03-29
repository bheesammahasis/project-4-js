setInterval(showTime, 1000);
        function showTime() {
        	let time = new Date();
        	let hour = time.getHours();
        	let min = time.getMinutes();
        	let sec = time.getSeconds();
        	let am_pm = "AM";
        
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
        let textchange1=document.querySelector(".item4")
		textchange1.addEventListener('click',()=>{
			let time=new Date();
			hour=time.getHours();
        if(hour>=5 && hour<12){
           textchange1.innerHTML="GRAB SOME HEALTHY BREAKFAST!!";
        }
        else if(hour>=12 && hour<5){
           textchange1.innerHTML="LET'S HAVE SOME LUNCH!!";
        }
        if(hour>=5 && hour<9){
           textchange1.innerHTML="STOP YAWNING, GET SOME TEA...ITS JUST EVENING TIME";
        }
        if(hour>=9 && hour<5){
            textchange1.innerHTML="CLOSE YOUR EYES AND GOTO SLEEP";
        }
	});

		let textchange2 = document.querySelector(".item8");
		textchange2.addEventListener('click',()=>{
			let time=new Date();
			hour=time.getHours();
			let time1a = document.getElementById("time1").value ;
			let time1b = document.getElementById("time2").value ;
			let time1c = document.getElementById("time3").value ;
			let time1d = document.getElementById("time4").value ;
			let image = document.querySelector('');
			console.log(hour,time1a,time1b,time1c,time1d);
			if(hour===parseInt(time1a)){
				item7.innerHTML="GOOD MORNING!! WAKE UP!!";
				Image.src="Group 5183.svg";
				item9.innerHTML="Wake Up Time:5AM-8AM <br>Lunch Time:default<br>Nap Time:default<br>Night Time:default";
			}
			if(hour===parseInt(time1b)){
				item7.innerHTML="GOOD AFTERNOON!! TAKE SOME SLEEP";
				Image.src="Group 5183 B.svg";
				item9.innerHTML="Wake Up Time:default<br>Lunch Time:12PM-5PM<br>Nap Time:default<br>Night Time:default";
			}
			if(hour===parseInt(time1c)){
				item7.innerHTML="GOOD EVENING!!";
				Image.src="Glunch_image.png";
				item9.innerHTML="Wake Up Time:default <br>Lunch Time:default<br>Nap Time:5PM-9PM<br>Night Time:default";
			}
			if(hour===parseInt(time1d)){
				item7.innerHTML="GOOD NIGHT!!";
				Image.src="Group 5194.svg";
				item9.innerHTML="Wake Up Time:default <br>Lunch Time:default<br>Nap Time:default<br>Night Time:9PM-5AM";
			}
	});
        
        
	