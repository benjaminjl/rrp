import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVarsProvider {

  constructor() {}

// -- Projects

  _projects: Array<any> = [
		
		{	id:1,
			title:'Normal Box',
			object:{objectId:2, objectName:'Normal Box', objectTexture:'normal.jpg'},
			topText:'This is a box',
			bottomText:'Boxes can be used for moving things from house to house.',
			author:'Mr. Smith',
			projectName:'BIO121'
		},

		{	id:2,
			title:'Color Box',
			object:{objectId: 3, objectName:'Color Box', objectTexture:'color.jpg'},
			topText:'This is another box',
			bottomText:'Boxes are used to store things.',
			author:'Mrs. Jones',
			projectName:'CHM141'
		}

	];

  setProjects(passed_Projects: Array<any>){
    this._projects = passed_Projects;
  }

  getProjects(){

		return this._projects;
		
	}
	



	_activeProject: any;

	setActiveProject(passed_activeProject: any){

		this._activeProject = passed_activeProject

	}

	getActiveProject(){

		return this._activeProject;
		
	}

}