import jQuery from 'jquery';

class Remote {
	get(onDone){
		jQuery.getJSON( this.server + "tasks.json", onDone);
	}
}

let model = new.Remote;