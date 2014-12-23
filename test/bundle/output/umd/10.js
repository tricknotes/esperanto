(function (global, factory) {

	'use strict';

	if (typeof define === 'function' && define.amd) {
		// export as AMD
		define(['exports'], factory);
	} else if (typeof module !== 'undefined' && module.exports && typeof require === 'function') {
		// node/browserify
		factory(exports);
	} else {
		// browser global
		global.myModule = {};
		factory(global.myModule);
	}

}(typeof window !== 'undefined' ? window : this, function (exports) {

	'use strict';

	class main__Foo {
		constructor( str ) {
			this.str = str;
		}

		toString() {
			return this.str;
		}
	}
	var main__default = main__Foo;

	exports['default'] = main__default;

}));