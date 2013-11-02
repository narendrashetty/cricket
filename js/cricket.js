	$(document).ready(function() {
	var innings=1;
	var novers;
	var target=-1;
	var playA = [];
	var playB = [];
	var A;
	var B;
	var flag=0;
		$('#inputType').bind("change",function() {
			if($(this).val()=="--Select--")
				$('#TeamA, #TeamB').attr("disabled","disabled");
				else {
				$('#TeamA, #TeamB').removeAttr("disabled");	
				novers=$(this).val();
				}
		});
	
	var teams=["India","Australia","Pakistan","England","South Africa","New Zealand","Sri Lanka","West Indies","Zimbabwe","Bangladesh","Kenya","Ireland","Canada","Netherland","Scotland","Afghanistan","USA"];
	$('#TeamA, #TeamB').typeahead({
		source: teams,
		items: 4
		});
	$('#TeamB').bind("change", function() {
			if($('#TeamA').val()==$(this).val())
			{
			alert($(this).val()+" cant play against same team!!!");
			$(this).val('');
			}
	});
	
	$('#squadBtn').bind("click",function(){
			A=$('#TeamA').val();
			B=$('#TeamB').val();
			getSquad(A,"squad1");
			getSquad(B,"squad2");
			$('#inputToss').removeAttr("disabled")
								.append($("<option></option>")
								.attr("value",A)
								.text(A)); 
			$('#inputToss').append($("<option></option>")
								.attr("value",B)
								.text(B)); 
	});
	
	function getSquad(team,pos)
	{
	var myTable = '' ;
			myTable += '<table class="table table-striped" width="100%">' ;
			var url = "team.php?A="+team;
			$.getJSON(url, function(json) {
                $.each(json, function(k, v) { 	
					myTable +=   "<tr><td>"+v.id+"</td><td>"+v.name+"</td><td><input type='checkbox' name="+team+" value="+v.name+" class="+team+"></td></tr>";   
                });
				myTable +="</table>";
				$("#"+pos).html(myTable) ;
				
        });
	}
	
	function finalPlaying(team,pos)
	{
	console.log(team);
	
	}
	
	$('#inputToss').bind("change",function() {
		if($(this).val()=="--Select--") {
				$('#inputSelect').attr("disabled","disabled");
				alert("Who won the toss!!"); 
				}
				else
				$('#inputSelect').removeAttr("disabled");	
	});
	
	$('#inputSelect').bind("change",function() {
		if($(this).val()!="--Select--") {
			$('#start').removeAttr("disabled");
		}
	});
		
	$( "#start" ).on( "click", function(){
	var A=$('#TeamA').val();
			var B=$('#TeamB').val();
	playA=getTeam(A);
	playB=getTeam(B);
	if(playA.length!=playB.length) 
	alert("handicap match not possible choose equal number of players");
	else {
	alert(playA.length);
	if($('#inputToss').val()=='--Select--')
	{
		alert("Who won the toss!!");
	}
	else
	{
		if((($('#inputToss').val()==A)&&($('#inputSelect').val()=="Batting"))||(($('#inputToss').val()==B)&&($('#inputSelect').val()=="Bowling"))) {
			playA=getTeam(A);
			playB=getTeam(B);
		} else if((($('#inputToss').val()==B)&&($('#inputSelect').val()=="Batting"))||(($('#inputToss').val()==A)&&($('#inputSelect').val()=="Bowling"))){
			playA=getTeam(B);
			playB=getTeam(A);
		}
		$('#pg2').css({"display":"block"});
		$('#pg1').css({"display":"none"});
		var myTable2 = '' ;
		myTable = '<table id="innings1bat" class="table table-striped" width="100%">' ;		
		for(var i=0;i<playA.length;i++) {
			myTable += "<tr><td id='innings1' class='batsman'>"+playA[i]+"</td><td id='bscore"+i+"'><span id='bruns"+i+"'>0</span>(<span id='bballs"+i+"'>0</span>)</td></tr>";   
		}
		myTable+="</table>";
		$("#play1").html(myTable);
		myTable = '<table id="innings2bat" class="table table-striped" width="100%">' ;		
		for(var i=0;i<playB.length;i++) {
			myTable += "<tr><td id='innings2' class='batsman'>"+playB[i]+"</td><td id='2bscore"+i+"'><span id='bruns"+i+"'>0</span>(<span id='bballs"+i+"'>0</span>)</td></tr>";   

		}
		myTable+="</table>";
		$("#play2").html(myTable);
		fun();
	}
	}
	});
	
	function fun() {
		$('#team1').text(A);
		$('#team2').text(B);
		$('#Team1Score').text("0");
		$('#Team1Wicket').text("0");
		$('#Team1Overs').text("0");
		$('#Team2Score').text("0");
		$('#Team2Wicket').text("0");
		$('#bat1').text(playA[0]);
		$('#bat2').text(playA[1]);
		$('#bscore0, #bscore1').addClass("onstrike");
		
		
	/*	
		$('.batsman').bind("click",function(){
			if($('#bat1').text()=='') {
				$('#bat1').text($(this).text());
			} else if($('#bat2').text()=='') {
				$('#bat2').text($(this).text());
			}
			else
				alert("2 batsman r already playing");
		
		});
		
		$('.bowler').bind("click",function(){
				$('#bowl2').text($('#bowl1').text());
				$('#bowl1').text($(this).text());
		
		});
	*/
	}
	var nbat1=0;
	var nbat2=1;
	$('#bat1, #bat1s').addClass("onstrike");
	

	$('Team1Balls').text('0');
	$('#nxtBall').bind("click",function(){
	
			if($("input:radio[name=ext]:checked").val()=="gb") {
				if(parseInt($('#Team1Balls').text())<5) {
					$('#Team1Balls').text(parseInt($('#Team1Balls').text())+1);
				} else {
					$('#Team1Balls').text("0");
					$('#Team1Overs').text(parseInt($('#Team1Overs').text())+1);
			}
			} else if(($("input:radio[name=ext]:checked").val()=="nb")||($("input:radio[name=ext]:checked").val()=="wi")) {
				$('#extras').text(parseInt($('#extras').text())+1);
				$('#Team1Score').text(parseInt($('#Team1Score').text())+1);
			} else {
				$('#extras').text(parseInt($('#extras').text())+parseInt($("input:radio[name=runs]:checked").val()));
			}
			
			if($("input:radio[name=runs]:checked").val()=="w") {
				$('#Team1Wicket').text(parseInt($('#Team1Wicket').text())+1);
				if(parseInt($('#Team1Wicket').text())==playA.length-1) {
					if(innings==1) {
					alert("all out start second innings");
					changeInnings();
					innings=2;
					} else
					alert("match over");
				else {
				if(flag==0) {
					$('#bat1').text(playA[parseInt($('#Team1Wicket').text())+1]);
					$('#bscore'+nbat1).removeClass("onstrike");
					$('#r1').text('0');
					$('#b1').text('0');
					if(nbat1>nbat2) {
						nbat1=nbat1+1;
					} else {
						nbat1=nbat2+1;
					}
					$('#bscore'+nbat1).addClass("onstrike");
				} else if(flag==1) {
					$('#bat2').text(playA[parseInt($('#Team1Wicket').text())+1]);
					$('#bscore'+nbat2).removeClass("onstrike");
					$('#r2').text('0');
					$('#b2').text('0');
					if(nbat1>nbat2) {
						nbat2=nbat1+1;
					} else {
						nbat2=nbat2+1;
					}
					$('#bscore'+nbat2).addClass("onstrike");
				}
			}
			} else {
			$('#Team1Score').text(parseInt($('#Team1Score').text())+parseInt($("input:radio[name=runs]:checked").val()));
				if(flag==0) {
					$('#r1').text(parseInt($('#r1').text())+parseInt($("input:radio[name=runs]:checked").val()));
					$('#b1').text(parseInt($('#b1').text())+1);
					
					$('#bruns'+nbat1).text($('#r1').text());
					$('#bballs'+nbat1).text($('#r1').text());
					
					//alert((parseInt($("input:radio[name=runs]:checked").val())%2));
					if((parseInt($("input:radio[name=runs]:checked").val())%2)==0) 
						flag=0;
					else {
						flag=1;
						$('#bat2, #bat2s').removeClass("onstrike").addClass("onstrike");
						$('#bat1, #bat1s').removeClass("onstrike");
					}
				} else if(flag==1) {
					$('#r2').text(parseInt($('#r2').text())+parseInt($("input:radio[name=runs]:checked").val()));
					$('#b2').text(parseInt($('#b2').text())+1);
					
					$('#bruns'+nbat2).text($('#r2').text());
					$('#bballs'+nbat2).text($('#r2').text());
					
					if((parseInt($("input:radio[name=runs]:checked").val())%2)==0) 
						flag=1;
					else {
						flag=0;
						$('#bat1, #bat1s').removeClass("onstrike").addClass("onstrike");
						$('#bat2, #bat2s').removeClass("onstrike");
					}
				}
			}
			var balls=($('#Team1Overs').text()*6)+parseInt($('#Team1Balls').text());
			//console.log(balls);
		$('#CRR').text(((parseInt($('#Team1Score').text())/parseInt(balls))*6).toFixed(2));
		});
		
		
	function getTeam(team)
	{
	var playingXI = [];
	$('input.'+team+':checked').each(function() {
    playingXI.push($(this).attr("value") + this.id);
	});
	return playingXI;
	}
	
	function changeInnings() {
	
		var temp=$('#play1').text();
		$('#play1').html($('#play2').text());
		$('#play2').html(temp);
		
		$('#Team2Score').text($('#Team1Score').text());
		target=parseInt($('#Team1Score').text());
		$('#Team1Score').text("0");
		
		$('#Team2Wicket').text($('#Team1Wicket').text());
		$('#Team1Wicket').text("0");
		
		$('#Team2Overs').text($('#Team1Overs').text());
		$('#Team1Overs').text("0");
		
		
		for(i=0;i<playA.length;i++)
			playA[i]=playB[i];
		
		$('#bat1').text(playA[0]);
		$('#bat2').text(playA[1]);
		$('#bscore0, #bscore1').addClass("onstrike");
	}
	
	
});


