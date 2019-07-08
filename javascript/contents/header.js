// header.js

$(document).ready(function(){
  var activePage = $('#header').data('page');

	$('#header').html(`
		<div class="header-wrap clearfix">
      <div id="logo" class="logo">
        <a href="home" rel="home">
          <img src="images/logo.png" alt="image"/>
        </a>
      </div>

      <div class="nav-wrap">
        <div class="btn-menu">
          <span></span>
        </div>

        <nav id="mainnav" class="mainnav">
          <ul class="menu">
            <li id="home">
              <a href="home">Home</a>
            </li>
            <li class="dropdown " id="products">
              <a href="products" data-toggle="dropdown"> Products </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="zpis">ZPIS</a></li>
                <li class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="temperature_sensors">Temperature Sensor</a></li>
                <li class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="real_time_clock">Real Time Clock</a></li>
                <li class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="energy_harvester">Energy Harvester</a></li>
                <li class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="bat_system">BAT (Battery Assisted Technology) System</a></li>
              </ul>
            </li>
            <li id="aboutus"><a href="aboutus">About Us</a></li>
            <li id="media"><a href="media" class="notification">
              <span>Media</span>
              <span class="badge">New</span></a>
            </li>
            <li id="careers"><a href="careers">Careers</a></li>
            <li id="contact"><a href="contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
	`);
  $('#header').find(`li#${$('#header').data('page')}`).addClass('home');
});