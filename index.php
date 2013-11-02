
<!DOCTYPE html>
<html lang="en">
  <head>
    <link href="css/bootstrap.css" rel="stylesheet">
    <style>
      body {
        padding-top: 60px;
      }
	  .container {
		width: 1050px;
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
	<div class="container" id="pg1" style="display:block;">
		<form class="form-horizontal">
  <div class="control-group">
    <label class="control-label" for="inputType">Select Number of Overs</label>
    <div class="controls">
      <select id="inputType">
  <option>--Select--</option>
  <option>5</option>
  <option>10</option>
  <option>20</option>
  <option>40</option>
  <option>50</option>
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
<select id="inputSelect" disabled="disabled">
  <option>--Select--</option>
  <option>Batting</option>
  <option>Bowling</option>
</select>
  </div>
</div>
  <div class="control-group">
    <div class="controls">
      <button type="button" id="start" class="btn" disabled="displayed">Start Match</button>
    </div>
  </div>

</div>

</form>
</div>
<div class="container" id="pg2" style="display:none;">
<form class="form-horizontal">
<div id="play1" class="span3">
<table class="table table-striped" width="100%">
<tr><td><a href=''>"+playA[i]+"</a></td></tr>
</table>
</div>

<div id="score" class="span7" style="text-align:center;">
<h3>
<span id="team1">New Zealand</span> Vs <span id="team2">West indies</span>
</h3>
<!-- team1 score -->
<div class="span2 thumbnail">
<h3><span id="Team1Score">0</span>/<span id="Team1Wicket">0</span></h3>
<div class="thumbnail">
Overs <span id="Team1Overs">0</span>.<span id="Team1Balls">0</span>
</div>
</div>
<div class="span2 thumbnail">
<!--
<div class="thumbnail">
Reqd. RR 12.34
</div>
-->
<div class="thumbnail">
Curr. RR <span id="CRR">0.0</span>
</div>
<div class="thumbnail">
Extras <span id="extras">0</span>
</div>
<div id="target-container"class="thumbnail" style="display:none;">
Target <span id="target">n/a</span>
</div>
</div>
<!-- team2 score -->
<div class="span2 thumbnail">
<h3><span id="Team2Score">0</span>/<span id="Team2Wicket">0</span></h3>
<div class="thumbnail">
Overs <span id="Team2Overs">0</span>.<span id="Team2Balls">0</span>
</div>
</div>
<!-- batsman -->
<div class="span3 thumbnail" style="margin-top:10px;text-align:left;">
<span class="pull-right">R(B)</span><br />
<span id="bat1"></span> <span id="bat1s" class="pull-right"><span id="r1">0</span>(<span id="b1">0</span>)</span><br />
<span id="bat2"></span> <span id="bat2s" class="pull-right"><span id="r2">0</span>(<span id="b2">0</span>)</span> 
</div>
<!-- bowlers -->
<div class="span3 thumbnail" style="margin-top:10px;text-align:left;">
<span class="pull-right">O.W.M.R</span><br />
<span id="bowl1"></span> <span id="bowl1s" class="pull-right"><span id="o1">10</span>.<span id="w1">2</span>.<span id="m1">4</span>.<span id="r1">40</span></span><br />
<span id="bowl2"></span> <span id="bowl2s" class="pull-right"><span id="o2">10</span>.<span id="w2">2</span>.<span id="m2">4</span>.<span id="r2">40</span></span> 
</div>
<!-- number of balls 
<div class="span6 thumbnail" id="no_balls" style="margin-top:10px;text-align:left;">
<div class="span1 thumbnail">0</div>
<div class="span1 thumbnail">0</div>
<div class="span1 thumbnail">6</div>
<div class="span1 thumbnail">4</div>
<div class="span1 thumbnail">4</div>
<div class="span1 thumbnail">W</div>
</div>
-->
<!-- runs -->
<div class="span6 thumbnail" id="no_balls" style="margin-top:10px;text-align:left;">
<div class="span1 thumbnail">
	<input type="radio" name="runs" value="0" checked="checked"> 0<br />
	<input type="radio" name="runs" value="1"> 1<br />
	<input type="radio" name="runs" value="2"> 2<br />
	<input type="radio" name="runs" value="3"> 3<br />
	<input type="radio" name="runs" value="4"> 4<br />
	<input type="radio" name="runs" value="5"> 5<br />
	<input type="radio" name="runs" value="6"> 6<br />
	<input type="radio" name="runs" value="w"> W<br />
</div>
<div class="span2 thumbnail">
	<input type="radio" name="ext" value="gb" checked="checked"> Good Ball<br />
	<input type="radio" name="ext" value="nb"> No ball<br />
	<input type="radio" name="ext" value="wi"> Wide<br />
	<input type="radio" name="ext" value="b"> Bye<br />
	<input type="radio" name="ext" value="lb"> Leg Bye<br />
</div>
<button type="button" class="btn" id="nxtBall">Next Ball</button>
</div>
</div>

<div id="play2" class="span3 pull-right">
<table class="table table-striped" width="100%">
<tr><td><a href=''>"+playA[i]+"</a></td></tr>
</table>
</div>
</form>
</div>
    </div> <!-- /container -->

    <!-- Le javascript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="js/jquery.js"></script>
	<script src="js/bootstrap.js"></script>
	<script type="text/javascript" src="js/cricket.js"></script>
  </body>
</html>
