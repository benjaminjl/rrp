import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';

import { BuildPage } from '../build/build';

import { GlobalVarsProvider } from '../../providers/global-vars';      // Custom provider that creates GlobalVarsProvider which is use for calling functions from the GlobalVarsProvider provider


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

container: any;
camera: any;
controls: any;
scene: any;
renderer: any;
mesh: any;
projects: any;

  constructor(
	  
	public navCtrl: NavController,
	public app: App,
	public globalVars: GlobalVarsProvider

) {}

ionViewDidLoad() {


	this.projects = this.globalVars.getProjects();

        
}

openBuildPage(){

	this.globalVars.setActiveProject(null);

	this.app.getRootNav().setRoot(BuildPage);

}

loadProject(passed_project: any){

	this.globalVars.setActiveProject(passed_project);

	this.app.getRootNav().setRoot(BuildPage);

}

}
