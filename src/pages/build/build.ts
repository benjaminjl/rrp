import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';

import * as THREE from 'three';

import { HomePage } from '../home/home';

import { GlobalVarsProvider } from '../../providers/global-vars';      // Custom provider that creates GlobalVarsProvider which is use for calling functions from the GlobalVarsProvider provider

@Component({
  selector: 'page-build',
  templateUrl: 'build.html'
})
export class BuildPage {

container: any;
camera: any;
controls: any;
scene: any;
renderer: any;
mesh: any;
objects: any;
projects: any;
animationId: any;

title: any;
object: any;
objectName: any;
topText: any;
bottomText:any;
author: any;
projectName: any;

activeProject: any;

  constructor(
	  
	public navCtrl: NavController,
	public app: App,
	public globalVars: GlobalVarsProvider

) {}

ionViewDidLoad() {

	this.projects = this.globalVars.getProjects();

	this.objects = [

		{	objectId:1,
			objectName:'Crate Box',
			objectTexture: 'crate.gif'
		},

		{	objectId:2,
			objectName:'Normal Box',
			objectTexture:'normal.jpg'
		},
	
		{	objectId:3,
			objectName:'Color Box',
			objectTexture:'color.jpg'
		}

	];

	this.container = document.getElementById("div-container");

	this.camera = new THREE.PerspectiveCamera( 70, this.container.clientWidth / this.container.clientHeight, 1, 1000 );
	this.camera.position.z = 400;

	this.scene = new THREE.Scene();
	this.scene.background = new THREE.Color( 0x4f465a )	

	this.renderer = new THREE.WebGLRenderer();
	this.renderer.setPixelRatio( window.devicePixelRatio );
	this.renderer.setSize( this.container.clientWidth, this.container.clientHeight );
	this.renderer.render( this.scene, this.camera );

	this.container.appendChild( this.renderer.domElement );

	this.activeProject = this.globalVars.getActiveProject();

	if (this.activeProject !== null)
	{
		this.loadProject();

	}
}

animate = () => {

	this.animationId = requestAnimationFrame( this.animate );
	this.mesh.rotation.x += 0.005;
	this.mesh.rotation.y += 0.01;
	this.renderer.render( this.scene, this.camera );

}

openHomePage(){

	this.app.getRootNav().setRoot(HomePage)

}

saveProject(){

	this.projects.push(
	{	id:3,
		title:this.title,
		object:this.object,
		topText:this.topText,
		bottomText:this.bottomText,
		author:this.author,
		projectName:this.projectName
	});

	this.globalVars.setProjects(this.projects);

	console.log(this.projects);

	this.app.getRootNav().setRoot(HomePage);
}

updateProject(){

	console.log(this.activeProject.id)

	for ( var i = 0; i < this.projects.length - 1; i++){

		if (this.projects[i].id === this.activeProject.id){

			this.projects[i] = {	id:3,
				title:this.title,
				object:this.object,
				topText:this.topText,
				bottomText:this.bottomText,
				author:this.author,
				projectName:this.projectName
			};

		}

	}

	this.globalVars.setProjects(this.projects);

	console.log(this.projects)

	this.app.getRootNav().setRoot(HomePage);

}

updateObject(passed_object){

	if (this.animationId !== null) 
        cancelAnimationFrame(this.animationId);

	this.object = passed_object;
	this.objectName = this.object.objectName;

	while(this.scene.children.length > 0){					// Clear all objects from scene first in order to add new object - BJL 071817 -
		
			this.scene.remove(this.scene.children[0]);
		
	}

	var texture = new THREE.TextureLoader().load( '../../assets/textures/' + this.object.objectTexture );
	var geometry = new THREE.BoxGeometry( 100, 100, 100 );
	var material = new THREE.MeshBasicMaterial( { map: texture } );
	this.mesh = new THREE.Mesh( geometry, material );
	this.scene.add( this.mesh );

	this.animate();

}

loadProject(){

	this.title = this.activeProject.title;
	this.object = this.activeProject.object;
		this.updateObject(this.activeProject.object);
	this.topText = this.activeProject.topText;
	this.bottomText =this.activeProject.bottomText;
	this.author = this.activeProject.author;
	this.projectName = this.activeProject.projectName;


}

}
