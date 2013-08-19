
<!DOCTYPE html>
<html lang="en">
  <head>
    <link href="css/bootstrap.css" rel="stylesheet">
    <style>
      body {
        padding-top: 60px;
      }
    </style>
  </head>

  <body>

    <div class="navbar navbar-inverse navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container">
          <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="brand" href="#">Project name</a>
          <div class="nav-collapse collapse">
            <ul class="nav">
              <li class="active"><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div><!--/.nav-collapse -->
        </div>
      </div>
    </div>

    <div class="container">
		<form class="form-horizontal">
  <div class="control-group">
    <label class="control-label" for="inputType">Select Type</label>
    <div class="controls">
      <select id="inputType">
  <option>--Select--</option>
  <option>Test</option>
  <option>ODI</option>
  <option>T20</option>
</select>
    </div>
  </div>
  
  <div class="control-group">
    <label class="control-label" for="inputTeams">Select Teams</label>
    <div class="controls">
      <input type="text" data-provide="typeahead" id="TeamA" disabled="disabled"> Vs
	 <input type="text" data-provide="typeahead" id="TeamB" disabled="disabled">
  </div>
</div>
  <div class="control-group">
    <div class="controls">
      <button type="button" class="btn" id="squadBtn">Get Squad</button>
    </div>
  </div>
<div id="squad1" class="span5">
</div>
<div id="squad2" class="span5">
</div>
<div class="span10" id="final">
  <div class="control-group">
    <label class="control-label" for="inputTeams">Toss</label>
    <div class="controls">
	  <select id="inputToss" disabled="disabled">
  <option>--Select--</option>
</select>
  </div>
</div>
  <div class="control-group">
    <div class="controls">
      <button type="button" id="start" class="btn">Start Match</button>
    </div>
  </div>

</div>

</form>
    </div> <!-- /container -->

    <!-- Le javascript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="js/jquery.js"></script>
	<script src="js/bootstrap.js"></script>
	<script type="text/javascript">
	$(document).ready(function() {
	
	var playA = [];
	var playB = [];
	
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
			var A=$('#TeamA').val();
			var B=$('#TeamB').val();
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
		
	$( "#start" ).on( "click", function(){
	var A=$('#TeamA').val();
			var B=$('#TeamB').val();
	playA=getTeam(A);
	playB=getTeam(B);
	alert(playA);
	alert(playB);
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


	</script>
  </body>
</html>
