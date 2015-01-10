SlidePanel
==========

Another JQuery Panel Plugin.
-------------

Version Beta 0.0.1
Updated November 10th, 2011

###Description

Slide Panel is a JQuery plugin that allows elements to expand and collapse creating a sliding panel effect. I know that this is nothing new and there are already a few JQuery panel plugins out there but this one is both highly flexible, has a small footprint and has some unique features.

###Further Developments

*	Option to slide vertically as well as horizontally
*	Destroy method to unbind events and remove the panel from the dom

###Options

*	handle : Selector for the element that is visible at collapsed state, default is set to ".panel_tab"
*	content : Selector for the element that is visible at  open state ".panel_content"
*	opened : Inital panel state is open, default is set to false
*	hidden : Inital panel state is hidden, default is set to false
*	direction : If closing on "mouseleave" constrain the direction that closes the panel, can be "right", "left" or "both", default is set to "both"
*	openedSize : Width of panel at its open state, default is set to 250
*	offset : Width for the handle at its closed state, default is set to 35
*	closedSize : Width of the panel at its closed state, default is set to 0
*	animTime : Time it takes to open or close, default is set to 500
*	openEvent : Event to open the panel, default is set to "mouseenter"
*	closeEvent : Event to close the panel, default is set to "mouseleave"
*	toggleEvent : Event to toggle the panel, default is set to ""
*	openSelector : Selector for the element to attach the open event to, default is set to ""
*	closeSelector : Selector for the element to attach the close event to, default is set to ""
*	toggleSelector : Selector for the element to attach the toggle event to, default is set to ""


###Methods

*	open : Open the panel
*	close : Close the panel
*	forceClose : Force close the panel no matter what
*	toggle : Toggle the panel
*	hide : Hide the panel

###Project Page

[SlidePanel](http://robincwillis.github.io/SlidePanel/ "Project Page")

###HTML

	<div id="slide_panel" class="panel right">
		<div class="panel_content"></div>
		<div class="panel_tab"></div>
	</div>

###CSS

	.left{float:left;}
	.right{float: right;}

	.panel{
		height:100%;
		display:block;
		overflow:hidden;
	}

	.panel_tab{
		height:100%;
		overflow: hidden;
	}

###Javascript

	$("#a_panel").panel({
		handle:'#slide_panel > .panel_tab',
		content:'#slide_panel > .panel_content',
		opened:true,
		direction : "both",
		openedSize : 180,
		openEvent : 'mouseenter',
		closeEvent : 'mouseleave',
		openSelector : '#slide_panel',
		closeSelector : '#slide_panel',
	});