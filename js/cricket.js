	$(document).ready(function() {
	
	var playA = [];
	var playB = [];
	var A;
	var B;
		$('#inputType').bind("change",function() {
			if($(this).val()=="--Select--")
				$('#TeamA, #TeamB').attr("disabled","disabled");
				else
				$('#TeamA, #TeamB').removeAttr("disabled");	
		});
	
	var teams=["India","Australia","Pakistan","England","South Africa","New Zealand","Sri Lanka","West Indies","Zimbabwe","Bangladesh","Kenya","Ireland","Canada","Netherland","Scotland","Afghanistan","USA"];
	$('#TeamA, #TeamB').typeahead({
		source: teams,
		items: 4
		});
	$('#TeamB').bind("change", function() {
			if($('#TeamA').val()==$(this).val())
			{
			alert($(this).val()+" cant play aganist same team!!!");
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
		myTable = '<table class="table table-striped" width="100%">' ;		
		for(var i=0;i<playA.length;i++) {
			myTable += "<tr><td class='batsman'>"+playA[i]+"</td></tr>";   
		}
		myTable+="</table>";
		$("#play1").html(myTable);
		myTable = '<table class="table table-striped" width="100%">' ;		
		for(var i=0;i<playB.length;i++) {
			myTable += "<tr><td class='bowler'>"+playB[i]+"</td></tr>";   
		}
		myTable+="</table>";
		$("#play2").html(myTable);
		fun();
	}
	});
	
	function fun() {
		$('#team1').text(A);
		$('#team2').text(B);
		$('#Team1Score').text("0");
		$('#Team1Wicket').text("0");
		$('#Team1Overs').text("12");
		$('#Team2Score').text("n/a");
		$('#Team2Wicket').text("n/a");
		$('#CRR').text((parseInt($('#Team1Score').text())/parseInt($('#Team1Overs').text())).toFixed(2));
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
		
		$('#nxtBall').bind("click",function(){
			alert("hii");
		});
	}
	$('Team1Balls').text('0');
	$('#nxtBall').bind("click",function(){
			if($("input:radio[name=ext]:checked").val()=="gb") {
				if(parseInt($('#Team1Balls').text())<5) {
					$('#Team1Balls').text(parseInt($('#Team1Balls').text())+1);
				} else {
					$('#Team1Balls').text("0");
					$('#Team1Overs').text(parseInt($('#Team1Overs').text())+1);
			}
			} else {
				$('#extras').text(parseInt($('#extras').text())+parseInt($("input:radio[name=runs]:checked").val()));
			}
			$('#Team1Score').text(parseInt($('#Team1Score').text())+parseInt($("input:radio[name=runs]:checked").val()));
		});
	
	function getTeam(team)
	{
	var playingXI = [];
	$('input.'+team+':checked').each(function() {
    playingXI.push($(this).attr("value") + this.id);
	});
	return playingXI;
	}
	
	
});


