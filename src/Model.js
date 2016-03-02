import jQuery from 'jquery';

class Remote {

	get(onDone){
		jQuery.getJSON( this.server + "tasks.json", onDone);
	}


	post(task, onDone, onFail) {

	let data = JSON.stringify({ task: task });

	let request = {
      	type: "POST",
      	url: this.server + "tasks.json",
      	data: data,
      	contentType: "application/json",
      	dataType: "json"
    };

    jQuery.ajax( request ).done(onDone).fail(onFail);
	}
}

let model = new.Remote;