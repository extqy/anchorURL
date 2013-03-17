// JavaScript Document

var anchorUrl = {
    thread: null,
    currentUrl: document.location.href,
    hasher:document.location.hash,
    time: 450,
    actionDefault:null, 
    paths: [],
    start: function () {
		if (this.hasher != "")
			this.checkUrl();
		this.run();
	},
	checkUrl: function()  {
	    path = this.hasher.match(/([\w+ \/ -]+)/g);
        if (path == null)
            return false;
        path = path[0];
        args_finish = [];
        args = this.hasher.match(/(\?){1}([\w+ = - &]*)/g);
        if (args != null) {
            
            args = args[0].replace('?', "").split('&');
            for(a in args) {
                b = args[a].split('=');
                args_finish[b[0]] = b[1];
            }
             
        }
        if (path.charAt(0) == '/')
            path = path.substr(1,path.length);
               
        if (path.charAt(path.length-1) == '/')
            path = path.substr(0,path.length-1);
                
		if (typeof(this.actionDefault) == "function")
            this.actionDefault(path, args_finish);
        
        if (typeof(this.paths[path]) == "function")
            this.paths[path](path, args_finish);
		
	},
    addPath: function (path, func) {
        if (typeof(path) == 'string' && typeof(func) == "function")
            this.paths[path] = func;
    },
	rmPath: function (path) {
		if (typeof(this.paths[path]) == 'function') this.paths[path] = null;
	},
	stop: function () {
		clearInterval(this.thread);
	},
	run: function () {
    		this.thread = setInterval( function() { 
			   if (anchorUrl.currentUrl !=document.location.href) {
				   anchorUrl.currentUrl = document.location.href;
				   anchorUrl.hasher = document.location.hash;
				   anchorUrl.checkUrl();
			   }
		   }, this.time );
		}

	};