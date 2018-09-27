(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"dogs_atlas_", frames: [[0,0,4831,2548],[5435,0,600,529],[5856,933,261,311],[4470,2550,892,579],[5364,2124,600,529],[4833,2124,451,412],[4833,1593,600,529],[5751,1246,287,242],[4833,1062,600,529],[5435,1133,314,253],[3576,2550,892,579],[2682,2550,892,579],[1788,2550,892,579],[894,2550,892,579],[4833,531,600,529],[6037,0,230,377],[5856,531,400,400],[5435,531,419,600],[0,2550,892,579],[4833,0,600,529]]}
];


// symbols:



(lib.background = function() {
	this.spriteSheet = ss["dogs_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.borderbub = function() {
	this.spriteSheet = ss["dogs_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.borderpic = function() {
	this.spriteSheet = ss["dogs_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.calm = function() {
	this.spriteSheet = ss["dogs_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.dalmatibub = function() {
	this.spriteSheet = ss["dogs_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.dalmatii = function() {
	this.spriteSheet = ss["dogs_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.germanbub = function() {
	this.spriteSheet = ss["dogs_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.germansheperd = function() {
	this.spriteSheet = ss["dogs_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.goldenbub = function() {
	this.spriteSheet = ss["dogs_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.goldenretriver = function() {
	this.spriteSheet = ss["dogs_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.kids = function() {
	this.spriteSheet = ss["dogs_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.loyal = function() {
	this.spriteSheet = ss["dogs_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.nohair = function() {
	this.spriteSheet = ss["dogs_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.refresh = function() {
	this.spriteSheet = ss["dogs_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.rotbub = function() {
	this.spriteSheet = ss["dogs_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.rotvailerr = function() {
	this.spriteSheet = ss["dogs_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.shitzuu = function() {
	this.spriteSheet = ss["dogs_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.woodenSign = function() {
	this.spriteSheet = ss["dogs_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.work = function() {
	this.spriteSheet = ss["dogs_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.yorkshirebub = function() {
	this.spriteSheet = ss["dogs_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.workcloud = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.work();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,892,579);


(lib.shitzusign = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.yorkshirebub();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.265,0.265);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,159,140.2);


(lib.shitzu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shitzuu();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.146,0.146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.3,58.3);


(lib.rules = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.woodenSign();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.288,0.288);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120.6,172.7);


(lib.rotvailersign = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rotbub();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.312,0.312);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,186.9,164.8);


(lib.rotvailer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rotvailerr();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.254,0.254);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.4,95.7);


(lib.loyalcloud = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.loyal();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.096,0.096);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85.6,55.6);


(lib.haircloud = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.nohair();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.115,0.115);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102.3,66.4);


(lib.goldensign = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.goldenbub();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.294,0.294);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,176.2,155.4);


(lib.golden = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.goldenretriver();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.235,0.235);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,73.8,59.5);


(lib.germansign = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.germanbub();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.283,0.283);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,170.1,150);


(lib.german = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.germansheperd();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.36,0.36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,103.4,87.2);


(lib.dalmatisign = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dalmatibub();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.295,0.295);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,176.8,155.9);


(lib.dalmati = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dalmatii();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.127,0.127);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57.4,52.5);


(lib.cloudkid = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.kids();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.103,0.103);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,92,59.7);


(lib.calmcloud = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.calm();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.122,0.122);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,108.9,70.7);


(lib.bordersign = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.borderbub();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.275,0.275);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,165.1,145.6);


(lib.border = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.borderpic();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.342,0.342);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,89.3,106.4);


(lib.all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.refresh();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.139,0.139);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,123.8,80.4);


// stage content:
(lib.dogs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		stage.enableMouseOver(24);
		
		//reset
		
		self.allcloud.addEventListener("click", clickall);
		
		function clickall() {
		
			self.border.visible = true;
			self.golden.visible = true;
			self.york.visible = true;
			self.german.visible = true;
			self.dal.visible = true;
			self.rot.visible = true;
			self.workcloud.alpha = 1;
			self.calmcloud.alpha = 1;
			self.kidscloud.alpha = 1;
			self.haircloud.alpha = 1;
			self.loyalcloud.alpha = 1;
		
		}
		
		
		//borderinfo
		
		self.border.addEventListener("mouseover", overToBord);
		self.border.addEventListener("mouseout", outToBord);
		
		function overToBord() {
		
			self.borderinfo.visible = true;
		
		}
		
		
		function outToBord() {
			self.borderinfo.visible = false;
		
		}
		
		//german info
		
		self.german.addEventListener("mouseover", overToGerman);
		self.german.addEventListener("mouseout", outToGerman);
		
		function overToGerman() {
		
			self.germaninfo.visible = true;
		
		}
		
		
		function outToGerman() {
			self.germaninfo.visible = false;
		
		}
		
		//york info
		
		self.york.addEventListener("mouseover", overToYork);
		self.york.addEventListener("mouseout", outToYork);
		
		function overToYork() {
		
			self.yorkinfo.visible = true;
		
		}
		
		
		function outToYork() {
			self.yorkinfo.visible = false;
		
		}
		
		//dalmati info
		
		self.dal.addEventListener("mouseover", overToDal);
		self.dal.addEventListener("mouseout", outToDal);
		
		function overToDal() {
		
			self.dalinfo.visible = true;
		
		}
		
		
		function outToDal() {
			self.dalinfo.visible = false;
		
		}
		
		//rotvailer info
		
		self.rot.addEventListener("mouseover", overToRot);
		self.rot.addEventListener("mouseout", outToRot);
		
		function overToRot() {
		
			self.rotinfo.visible = true;
		
		}
		
		
		function outToRot() {
			self.rotinfo.visible = false;
		
		}
		
		//golden retriver info
		
		self.golden.addEventListener("mouseover", overToGold);
		self.golden.addEventListener("mouseout", outToGold);
		
		function overToGold() {
		
			self.goldeninfo.visible = true;
		
		}
		
		
		function outToGold() {
			self.goldeninfo.visible = false;
		
		}
		
		//alpha
		
		
		function cloudalpha() {
			self.workcloud.alpha = 0.5;
			self.calmcloud.alpha = 0.5;
			self.kidscloud.alpha = 0.5;
			self.haircloud.alpha = 0.5;
			self.loyalcloud.alpha = 0.5;
		
		}
		
		
		//cloudawork
		
		
		self.workcloud.addEventListener("click", clickwork);
		
		function clickwork() {
		
			cloudalpha();
			self.workcloud.alpha = 1;
			self.golden.visible = false;
			self.dal.visible = false;
			self.york.visible = false;
		
		
		}
		
		//calm cloud
		
		self.calmcloud.addEventListener("click", clickCalm);
		
		function clickCalm() {
		
			cloudalpha();
			self.calmcloud.alpha = 1;
			self.golden.visible = true;
			self.dal.visible = false;
			self.border.visible = false;
			self.rot.visible = true;
			self.york.visible = true;
			self.german.visible = true;
		
		}
		
		
		//kids cloud
		
		self.kidscloud.addEventListener("click", clickKids);
		
		function clickKids() {
		
			cloudalpha();
			self.kidscloud.alpha = 1;
			self.golden.visible = true;
			self.dal.visible = true;
			self.border.visible = true;
			self.rot.visible = true;
			self.york.visible = false;
			self.german.visible = true;
		
		}
		
		//haircloud
		self.haircloud.addEventListener("click", clickHair);
		
		function clickHair() {
		
			cloudalpha();
			self.haircloud.alpha = 1;
			self.golden.visible = false;
			self.dal.visible = true;
			self.border.visible = false;
			self.rot.visible = true;
			self.york.visible = false;
			self.german.visible = false;
		
		}
		
		//loyal cloud
		
		self.loyalcloud.addEventListener("click", clickLoyal);
		
		function clickLoyal() {
		
			cloudalpha();
			self.loyalcloud.alpha = 1;
			self.golden.visible = true;
			self.dal.visible = true;
			self.border.visible = true;
			self.rot.visible = true;
			self.york.visible = true;
			self.german.visible = true;
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// golden
	this.goldeninfo = new lib.goldensign();
	this.goldeninfo.parent = this;
	this.goldeninfo.setTransform(296,222.6,1,1,0,0,0,88,77.7);
	this.goldeninfo.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.goldeninfo).wait(1));

	// rotvailer
	this.rotinfo = new lib.rotvailersign();
	this.rotinfo.parent = this;
	this.rotinfo.setTransform(244.2,242.5,1,1,0,0,0,93.5,82.4);
	this.rotinfo.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.rotinfo).wait(1));

	// dalmati
	this.dalinfo = new lib.dalmatisign();
	this.dalinfo.parent = this;
	this.dalinfo.setTransform(187.5,242.2,1,1,0,0,0,88.4,78);
	this.dalinfo.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.dalinfo).wait(1));

	// yorkshire
	this.yorkinfo = new lib.shitzusign();
	this.yorkinfo.parent = this;
	this.yorkinfo.setTransform(128.5,296.6,1,1,0,0,0,79.5,70);
	this.yorkinfo.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.yorkinfo).wait(1));

	// german
	this.germaninfo = new lib.germansign();
	this.germaninfo.parent = this;
	this.germaninfo.setTransform(153.4,212.8,1,1,0,0,0,85,75);
	this.germaninfo.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.germaninfo).wait(1));

	// border
	this.borderinfo = new lib.bordersign();
	this.borderinfo.parent = this;
	this.borderinfo.setTransform(91.2,278,1,1,0,0,0,82.5,72.8);
	this.borderinfo.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.borderinfo).wait(1));

	// clouds
	this.allcloud = new lib.all();
	this.allcloud.parent = this;
	this.allcloud.setTransform(418.2,107.2);
	new cjs.ButtonHelper(this.allcloud, 0, 1, 1);

	this.workcloud = new lib.workcloud();
	this.workcloud.parent = this;
	this.workcloud.setTransform(379,110.9,0.093,0.093,0,0,0,445.9,289.5);
	new cjs.ButtonHelper(this.workcloud, 0, 1, 1);

	this.calmcloud = new lib.calmcloud();
	this.calmcloud.parent = this;
	this.calmcloud.setTransform(252.4,128.6,0.923,0.923);
	new cjs.ButtonHelper(this.calmcloud, 0, 1, 1);

	this.kidscloud = new lib.cloudkid();
	this.kidscloud.parent = this;
	this.kidscloud.setTransform(196.8,62.3);
	new cjs.ButtonHelper(this.kidscloud, 0, 1, 1);

	this.haircloud = new lib.haircloud();
	this.haircloud.parent = this;
	this.haircloud.setTransform(97.6,107.2);
	new cjs.ButtonHelper(this.haircloud, 0, 1, 1);

	this.loyalcloud = new lib.loyalcloud();
	this.loyalcloud.parent = this;
	this.loyalcloud.setTransform(12,56.5);
	new cjs.ButtonHelper(this.loyalcloud, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.loyalcloud},{t:this.haircloud},{t:this.kidscloud},{t:this.calmcloud},{t:this.workcloud},{t:this.allcloud}]}).wait(1));

	// title
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAsBcIAAhxIgBgSQgBgHgEgFQgEgEgHgCQgHgCgKAAIgjAAIgNAAIgMgBIgLgCIgMgEIAEgMIAFgNIAMADIALACIALABIANAAIAhAAQAKAAALADQAKACAJAHQAIAGAFAMQAFAMAAATIAAB0gAhGBcIAAg2IAAgNIAAgMIACgKIACgLIAPACIAOACIgCAKIgBAKIgBAKIAAANIAAA1g");
	this.shape.setTransform(432.6,38.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhRBdIAEgdIAEgWIADgSIADgPIACgPIADgRIABgPIgEgLIgGgMIgKgQIAGgDIAGgEIAGgDIAIgFIAHAJIAFAIIADAHIAEAHIAOgMIANgIIAOgGIAQgCQAYAAAOAMQAPAMAGAYIACARIAAAVIABAUIgBASIAAAWIgBASIgBAIIgBAJIhTAAIAAgaIA4AAIABgHIAAgJIAAgOIAAgYIAAgMIAAgNIgCgMIgBgJIgEgMIgGgJQgEgDgFgCQgFgCgHAAQgHAAgIACIgLAHIgNAJIgLALIgFAhIgFAZIgDAVIgDARIgDAPIgCAPg");
	this.shape_1.setTransform(412,38.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AANBcIAAiXIgoAAIgOAAIgLgBIgLgCIgNgEIAFgMIAEgNIANADIAKACIALABIANAAIBhAAIAAAaIgjAAIAACXg");
	this.shape_2.setTransform(392.2,38.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAkBcIAAhxIgBgSQgCgHgEgFQgEgEgHgCQgGgCgLAAIgRAAIgNAAIgMgBIgLgCIgMgEIAEgMIAEgNIANADIAKACIAMABIANAAIAPAAQAKAAALADQAKACAJAHQAIAGAGAMQAEAMAAATIAAB0g");
	this.shape_3.setTransform(373.6,38.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AABAvIABgJIACgKIABgKIAAgPIAAgbIgmAAIAAgaIBDAAIAAA2IAAAPIgBAMIgBAKIgCAKg");
	this.shape_4.setTransform(358.7,35.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAhB3IAAjNIguAAIgOAAIgMgBIgKgCIgNgEIAEgMIAFgNIANADIAKACIALABIAOAAIA/AAIADAJIABAHIABAGIAAAFIAADMg");
	this.shape_5.setTransform(343.8,41.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgcBhIAmgrIALgNIAIgMIAGgPQACgHAAgJIAAgnIhmAAIAAhKIAdAAIAAAwIBiAAIACAJIACAHIAAAGIAAAFIAAAlQAAAUgIARQgIATgQARIgpAvg");
	this.shape_6.setTransform(316.6,37);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhSBdIAGgdIADgWIADgSIADgPIACgPIADgRIABgPIgEgLIgGgMIgKgQIAGgDIAGgEIAGgDIAIgFIAHAJIAFAIIADAHIAEAHIAOgMIANgIIAOgGIAQgCQAYAAAOAMQAPAMAFAYIADARIAAAVIABAUIgBASIAAAWIgBASIgBAIIgBAJIhTAAIAAgaIA4AAIAAgHIABgJIAAgOIAAgYIAAgMIgBgNIgBgMIgBgJIgEgMIgGgJQgEgDgFgCQgFgCgHAAQgHAAgIACIgLAHIgNAJIgLALIgGAhIgEAZIgDAVIgDARIgDAPIgCAPg");
	this.shape_7.setTransform(297.1,38.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgkgJQgFAGgDAIIgDASIgBATIAAAUIAAAMIAAAQIgeAAIAAgLIAAgNIAAgPIABgPIACgXIAEgRIAIgPIAKgOIgKgQIgHgMIgFgNIgDgLIAOgFIANgEIACAEIABAEIAEALIAGAMIAJAOIAMASIAGAHIAGAHIAIAKIAOAOIAAABIAKgIIAHgLIAFgMIAFgOIADgOIAEgNIgZgFIAEgYIAwAJIABAWIgFASIgEASIgHASIgHAOIgJALIgMAMIAoAwIgVASg");
	this.shape_8.setTransform(276.8,39.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhSBdIAGgdIADgWIADgSIADgPIACgPIADgRIABgPIgEgLIgGgMIgKgQIAGgDIAGgEIAGgDIAIgFIAHAJIAFAIIADAHIAEAHIAOgMIANgIIAOgGIARgCQAXAAAOAMQAPAMAFAYIADARIAAAVIABAUIgBASIAAAWIgBASIgBAIIgBAJIhTAAIAAgaIA4AAIAAgHIABgJIAAgOIAAgYIAAgMIgBgNIgBgMIgBgJIgEgMIgGgJQgEgDgFgCQgFgCgHAAQgHAAgIACIgLAHIgNAJIgLALIgGAhIgDAZIgEAVIgDARIgCAPIgDAPg");
	this.shape_9.setTransform(256.1,38.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAYByIgNgSIgJgSIhOi4IAbgMIAuBsIAJgHIAJgIIAIgKIAIgOIAIgRIAIgTIgcgIIAIgaIAyAPQABALgBAMIgLAZIgNAZIgKAQIgLALIgMAIIgNAJIAPAlIAGAPIAFAJIAEAIIAEAFIAEAGIAGAGIgWAVg");
	this.shape_10.setTransform(235.8,41.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAsBcIAAhxIgBgSQgBgHgEgFQgEgEgHgCQgHgCgKAAIgjAAIgNAAIgMgBIgLgCIgMgEIAEgMIAFgNIAMADIALACIALABIANAAIAhAAQAKAAALADQAKACAJAHQAIAGAFAMQAFAMAAATIAAB0gAhGBcIAAg2IAAgNIAAgMIACgKIACgLIAPACIAOACIgCAKIgBAKIgBAKIAAANIAAA1g");
	this.shape_11.setTransform(206.5,38.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhRBdIAEgdIAEgWIADgSIADgPIACgPIADgRIABgPIgDgLIgHgMIgKgQIAGgDIAFgEIAHgDIAIgFIAHAJIAEAIIAEAHIAEAHIAOgMIANgIIAOgGIAQgCQAXAAAQAMQAOAMAGAYIABARIABAVIAAAUIAAASIgBAWIAAASIgBAIIgBAJIhTAAIAAgaIA4AAIABgHIAAgJIAAgOIAAgYIAAgMIAAgNIgBgMIgCgJIgEgMIgGgJQgEgDgFgCQgFgCgHAAQgHAAgIACIgMAHIgMAJIgLALIgFAhIgFAZIgDAVIgCARIgEAPIgCAPg");
	this.shape_12.setTransform(185.8,38.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AA4BcIAAhxIgCgSQgBgHgEgFQgDgEgHgCQgGgCgLAAIghAAQgJANgDAQQgFAQAAARQAAANADAOIAFAZIAGATIgBAJIgBAJIhEAAIAAgaIAlAAQgFgQgDgPQgCgPgBgPQAAgQAEgQQAFgQAJgQIgIgBIgIgBIgJgCIgJgDIAFgMIAEgNIANADIALACIALABIAMAAIAsAAQALAAALADQAKACAJAHQAHAGAGAMQAFAMAAATIAAB0g");
	this.shape_13.setTransform(164.7,38.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAxBcIAAhxIgBgSQgCgIgEgEQgEgEgGgCQgHgCgKAAIgoAAIgFAPIgDANIgBAOIAAANIAABgIgdAAIAAheIAAgQIABgOIADgNIAFgPIgLgCIgNgEIAFgMIAEgNIANADIAKACIALABIAOAAIApAAQALAAAKADQALACAIAHQAIAGAGAMQAFALAAASIAAB2g");
	this.shape_14.setTransform(144.5,38.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AABAvIABgJIACgKIABgKIAAgPIAAgbIgmAAIAAgaIBDAAIAAA2IAAAPIgBAMIgBAKIgCAKg");
	this.shape_15.setTransform(128.6,35.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgcBhIAmgrIALgNIAIgMIAGgPQACgHAAgJIAAgnIhmAAIAAhKIAdAAIAAAwIBiAAIACAJIACAHIAAAGIAAAFIAAAlQAAAUgIARQgIATgQARIgpAvg");
	this.shape_16.setTransform(114.3,37);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1,1,1).p("A0HAAMAoPAAA");
	this.shape_17.setTransform(274.6,55.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// dogs
	this.rot = new lib.rotvailer();
	this.rot.parent = this;
	this.rot.setTransform(288.8,297);
	new cjs.ButtonHelper(this.rot, 0, 1, 1);

	this.golden = new lib.golden();
	this.golden.parent = this;
	this.golden.setTransform(344.4,282.9);
	new cjs.ButtonHelper(this.golden, 0, 1, 1);

	this.dal = new lib.dalmati();
	this.dal.parent = this;
	this.dal.setTransform(208,298.3);
	new cjs.ButtonHelper(this.dal, 0, 1, 1);

	this.york = new lib.shitzu();
	this.york.parent = this;
	this.york.setTransform(143.3,341);
	new cjs.ButtonHelper(this.york, 0, 1, 1);

	this.german = new lib.german();
	this.german.parent = this;
	this.german.setTransform(76.9,262.3);
	new cjs.ButtonHelper(this.german, 0, 1, 1);

	this.border = new lib.border();
	this.border.parent = this;
	this.border.setTransform(17.4,307.4);
	new cjs.ButtonHelper(this.border, 0, 1, 1);

	this.instance = new lib.rules();
	this.instance.parent = this;
	this.instance.setTransform(428.3,226.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.border},{t:this.german},{t:this.york},{t:this.dal},{t:this.golden},{t:this.rot}]}).wait(1));

	// background
	this.instance_1 = new lib.background();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-71,0,0.157,0.157);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(204,200,758.3,413.8);
// library properties:
lib.properties = {
	id: '66E8BF3A0CF640B69DC6FC373C83A702',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/dogs_atlas_.png?1538041347762", id:"dogs_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['66E8BF3A0CF640B69DC6FC373C83A702'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;