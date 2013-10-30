
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
	<form id=login>
	<div class="control-group">
	
	 <label class="control-label" for="Name">Name</label>
	 <div class="control">
	   <input type="text" id="Name"/>
	</div>
	</div>
	<div class="control-group">
	
	 <label class="control-label" for="Password">Password</label>
	 <div class="control">
	   <input type="text" id="Password"/>
	</div>
	</div>	
	<div>
		<button type="button" class="btn" id="Login">Login</button>
		</div>
		</div>
	</div>
	
 <script src="js/jquery.js"></script>
	<script src="js/bootstrap.js"></script>
	<script type="text/javascript">
	$('#Login').bind("click",function(){
			
if(($('#Name').val()=="Admin") && ($('#Password').val()=="admin") || ($('#Name').val()=="User") && ($('#Password').val()=="user"))
			{
			alert(" success");
			}
			else
			{
			alert("un success");
			}
			});
	</script>	
	</body>
</html>
