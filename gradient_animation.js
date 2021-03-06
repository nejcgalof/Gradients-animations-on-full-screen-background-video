var granimInstance;
var is_cleared = true;
var icon_play_pause;
new Vidage('#VidageVideo'); //create playing video

//init granim and all states
function init_granim() {
	granimInstance = new Granim({
		element: '#canvas-image',
		name: 'basic-gradient',
		direction: 'radial',
		isPaused: false,
		opacity: [1, 1],
		stateTransitionSpeed: 1,
		isPausedWhenNotInView: false,
		states : {
			"default-state": {
				gradients: [
				['#ff0000', '#fff'],
				['#0000ff', '#fff'],
				['#0000ff', '#fff']
				],
				transitionSpeed: 5000,
				loop: true
			},
			"police-state": {
				gradients: [
				['#ff0000', '#fff'],
				['#0000ff', '#fff']
				],
				transitionSpeed: 85,
				loop: true
			},
			"camera-state": {
				gradients: [
				['#fff', '#fff'],
				['#fff', '#ffff00'],
				['#ffff00', '#ffff00'],
				['#fff', '#ffff00'],
				['#fff', '#fff'],
				['#fff', '#fff'],
				['#fff', '#fff'],
				['#fff', '#ffff00'],
				['#ffff00', '#ffff00'],
				['#fff', '#ffff00'],
				['#fff', '#fff'],
				['#fff', '#fff'],
				['#fff', '#fff'],
				['#fff', '#fff'],
				['#fff', '#fff'],
				['#fff', '#fff'],
				['#fff', '#fff'],
				['#fff', '#fff'],
				['#fff', '#fff'],
				['#fff', '#fff'],
				['#fff', '#fff'],
				['#fff', '#ffff00'],
				['#ffff00', '#ffff00'],
				['#fff', '#ffff00'],
				['#fff', '#fff'],
				],
				transitionSpeed: 50,
				loop: true
			},
			"fire-state": {
				gradients: [
				['#e2224c', '#e27822'],
				['#e27822', '#e27822']
				],
				transitionSpeed: 1000,
				loop: true
			}
		}
	});
}

function change_granim(){
	if(!granimInstance){
		init_granim();
		is_cleared=false;
	}
	else{
		if(granimInstance.isPaused){
			granimInstance.play();
		}
		if(is_cleared==true){
			is_cleared=false;
			granimInstance.play();
		}
	}
	icon_play_pause = document.getElementById("status_play");
	icon_play_pause.classList.add("icon-play");
	icon_play_pause.classList.remove("icon-pause");
}

function clear_choise(){
	document.getElementById("href-fashion").className = "";
	document.getElementById("href-police").className = "";
	document.getElementById("href-camera").className = "";
	document.getElementById("href-fire").className = "";
	document.getElementById("href-pause").className = "";
	document.getElementById("href-clear").className = "";
};

function gradient_fashion(){
	clear_choise();
	document.getElementById("href-fashion").className = "choise";
	change_granim();
	granimInstance.changeState('default-state');
}

function gradient_police(){
	clear_choise();
	document.getElementById("href-police").className = "choise";
	change_granim();
	granimInstance.changeState('police-state');
}

function gradient_camera(){
	clear_choise();
	document.getElementById("href-camera").className = "choise";
	change_granim();
	granimInstance.changeState('camera-state');
}

function gradient_fire(){
	clear_choise();
	document.getElementById("href-fire").className = "choise";
	change_granim();
	granimInstance.changeState('fire-state');
}

function gradient_pause(){
	clear_choise();
	icon_play_pause = document.getElementById("status_play");
	icon_play_pause.classList.add("icon-pause");
	icon_play_pause.classList.remove("icon-play");
	if(granimInstance){
		granimInstance.pause();
	}
	if(is_cleared){
		document.getElementById("href-clear").className = "choise";
	}
	document.getElementById("href-pause").className = "choise";
}

function gradient_clear(){
	clear_choise();
	document.getElementById("href-clear").className = "choise";
	if(granimInstance){
		is_cleared=true;
		granimInstance.clear();
	}
	icon_play_pause = document.getElementById("status_play");
	icon_play_pause.classList.add("icon-pause");
	icon_play_pause.classList.remove("icon-play");
	document.getElementById("href-pause").className = "choise";
}
