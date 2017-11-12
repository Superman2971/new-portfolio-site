export class DataService {
  constructor() {}

  about = {
    'ig_description': 'The window object represents an open window in a browser.<br/>If a document contain frames (<iframe> tags), the browser creates one window object for the HTML document, and one additional window object for each frame.',
    'ig_display': '{<span class=\'pink\'>stop</span>: website, <span class=\'pink\'>open</span>: website, <span class=\'pink\'>alert</span>: website, <span class=\'pink\'>confirm</span>: website, <span class=\'pink\'>prompt</span>: website…}',
    'ig_name': 'About',
    'ig_notes': 'There is no public standard that applies to the Window object, but all major browsers support it.',
    'ig_propertyType': 'object',
    'atob': {
      'arguments': {
        'ig_description': 'The arguments object is a local variable available within all functions. You can refer to a function\'s arguments within the function by using the arguments object. This object contains an entry for each argument passed to the function, the first entry\'s index starting at 0.',
        'ig_display': '<span class=\'null\'>null</span>',
        'ig_name': 'arguments',
        'ig_propertyType': 'property'
      },
      'ig_coverage': [{
        'browser': 'Chrome',
        'covered': 'Yes',
        'version': ''
      }, {
        'browser': 'IE',
        'covered': 'Yes',
        'version': '10.0'
      }, {
        'browser': 'Firefox',
        'covered': 'Yes',
        'version': '1.0'
      }, {
        'browser': 'Safari',
        'covered': 'Yes',
        'version': ''
      }, {
        'browser': 'Opera',
        'covered': 'Yes',
        'version': ''
      }],
      'ig_description': 'The atob() method decodes a base-64 encoded string.<br/>This method decodes a string of data which has been encoded by the btoa() method.',
      'ig_display': '<span class=\'pink\'>website</span> atob()',
      'ig_name': 'atob',
      'ig_parameters': [{
        'description': 'Required. The string which has been encoded by the btoa() method',
        'name': 'encodedStr',
        'type': 'string'
      }],
      'ig_propertyType': 'website',
      'caller': {
        'ig_description': 'If the function f was invoked by the top level code, the value of f.caller is null, otherwise it\'s the function that called f.<br/>This property replaces the obsolete arguments.caller property of the arguments object.<br/>The special property __caller__, which returned the activation object of the caller thus allowing to reconstruct the stack, was removed for security reasons.',
        'ig_display': '<span class=\'null\'>null</span>',
        'ig_name': 'caller',
        'ig_notes': 'Note that in case of recursion, you can\'t reconstruct the call stack using this property.',
        'ig_propertyType': 'property'
      },
      'length': {
        'ig_description': 'length is a property of a function object, and indicates how many arguments the function expects, i.e. the number of formal parameters. This number excludes the rest parameter and only includes parameters before the first one with a default value. By contrast, arguments.length is local to a function and provides the number of arguments actually passed to the function.',
        'ig_display': '<span class=\'blue\'>1</span>',
        'ig_name': 'length',
        'ig_notes': 'The Function constructor is itself a Function object. Its length data property has a value of 1. The property attributes are: Writable: false, Enumerable: false, Configurable: true.<br/>The length property of the Function prototype object has a value of 0.',
        'ig_propertyType': 'property'
      },
      'name': {
        'ig_description': 'The name property returns the name of a function statement.',
        'ig_display': '\'<span class=\'red\'>atob</span>\'',
        'ig_name': 'name',
        'ig_notes': 'Functions created with the syntax new Function(...) or just Function(...) create Function objects and their name is \'anonymous\'.<br/>Variables and methods can infer the name of an anonymous function from its syntactic position (new in ECMAScript 2015).',
        'ig_propertyType': 'property'
      }
    },
    'blur': {
      'arguments': {
        'ig_description': 'The arguments object is a local variable available within all functions. You can refer to a function\'s arguments within the function by using the arguments object. This object contains an entry for each argument passed to the function, the first entry\'s index starting at 0.',
        'ig_display': '<span class=\'null\'>null</span>',
        'ig_name': 'arguments',
        'ig_propertyType': 'property'
      },
      'ig_coverage': [{
        'browser': 'Chrome',
        'covered': 'Yes',
        'version': ''
      }, {
        'browser': 'IE',
        'covered': 'Yes',
        'version': ''
      }, {
        'browser': 'Firefox',
        'covered': 'Yes',
        'version': ''
      }, {
        'browser': 'Safari',
        'covered': 'Yes',
        'version': ''
      }, {
        'browser': 'Opera',
        'covered': 'Yes',
        'version': ''
      }],
      'ig_description': 'The blur() method removes focus from the current window.',
      'ig_display': '<span class=\'pink\'>website</span> ()',
      'ig_examples': 'window.blur()',
      'ig_name': 'blur',
      'ig_notes': 'This method makes a request to bring the current window to the background. It may not work as you expect in all browsers, due to different user settings.',
      'ig_parameters': [{
        'description': '',
        'name': 'none',
        'type': ''
      }],
      'ig_propertyType': 'website',
      'caller': {
        'ig_description': 'If the function f was invoked by the top level code, the value of f.caller is null, otherwise it\'s the function that called f.<br/>This property replaces the obsolete arguments.caller property of the arguments object.<br/>The special property __caller__, which returned the activation object of the caller thus allowing to reconstruct the stack, was removed for security reasons.',
        'ig_display': '<span class=\'null\'>null</span>',
        'ig_name': 'caller',
        'ig_notes': 'Note that in case of recursion, you can\'t reconstruct the call stack using this property.',
        'ig_propertyType': 'property'
      },
      'length': {
        'ig_description': 'length is a property of a function object, and indicates how many arguments the function expects, i.e. the number of formal parameters. This number excludes the rest parameter and only includes parameters before the first one with a default value. By contrast, arguments.length is local to a function and provides the number of arguments actually passed to the function.',
        'ig_display': '<span class=\'blue\'>0</span>',
        'ig_name': 'length',
        'ig_notes': 'The Function constructor is itself a Function object. Its length data property has a value of 1. The property attributes are: Writable: false, Enumerable: false, Configurable: true.<br/>The length property of the Function prototype object has a value of 0.',
        'ig_propertyType': 'property'
      },
      'name': {
        'ig_description': 'The name property returns the name of a function statement.',
        'ig_display': '\'\'',
        'ig_name': 'name',
        'ig_notes': 'Functions created with the syntax new Function(...) or just Function(...) create Function objects and their name is \'anonymous\'.<br/>Variables and methods can infer the name of an anonymous function from its syntactic position (new in ECMAScript 2015).',
        'ig_propertyType': 'property'
      }
    },
    'btoa': {
      'arguments': {
        'ig_description': 'The arguments object is a local variable available within all functions. You can refer to a function\'s arguments within the function by using the arguments object. This object contains an entry for each argument passed to the function, the first entry\'s index starting at 0.',
        'ig_display': '<span class=\'null\'>null</span>',
        'ig_name': 'arguments',
        'ig_propertyType': 'property'
      },
      'ig_coverage': [{
        'browser': 'Chrome',
        'covered': 'Yes',
        'version': ''
      }, {
        'browser': 'IE',
        'covered': 'Yes',
        'version': '10.0'
      }, {
        'browser': 'Firefox',
        'covered': 'Yes',
        'version': '1.0'
      }, {
        'browser': 'Safari',
        'covered': 'Yes',
        'version': ''
      }, {
        'browser': 'Opera',
        'covered': 'Yes',
        'version': ''
      }],
      'ig_description': 'The btoa() method encodes a string in base-64.<br/>This method uses the \'A-Z\', \'a-z\', \'0-9\', \'+\', \'/\' and \'=\' characters to encode the string.',
      'ig_display': '<span class=\'pink\'>website</span> btoa()',
      'ig_examples': '<span class=\'blue\'>var</span> str = <span class=\'red\'>\'Hello World!\'</span>;<br/><span class=\'blue\'>var</span> enc = window.btoa(str);<br/><span class=\'blue\'>var</span> res = <span class=\'red\'>\'Encoded String: \'</span> + enc;',
      'ig_name': 'btoa',
      'ig_parameters': [{
        'description': 'Required. The string to be encoded.',
        'name': 'str',
        'type': 'string'
      }],
      'ig_propertyType': 'website',
      'caller': {
        'ig_description': 'If the function f was invoked by the top level code, the value of f.caller is null, otherwise it\'s the function that called f.<br/>This property replaces the obsolete arguments.caller property of the arguments object.<br/>The special property __caller__, which returned the activation object of the caller thus allowing to reconstruct the stack, was removed for security reasons.',
        'ig_display': '<span class=\'null\'>null</span>',
        'ig_name': 'caller',
        'ig_notes': 'Note that in case of recursion, you can\'t reconstruct the call stack using this property.',
        'ig_propertyType': 'property'
      },
      'length': {
        'ig_description': 'length is a property of a function object, and indicates how many arguments the function expects, i.e. the number of formal parameters. This number excludes the rest parameter and only includes parameters before the first one with a default value. By contrast, arguments.length is local to a function and provides the number of arguments actually passed to the function.',
        'ig_display': '<span class=\'blue\'>1</span>',
        'ig_name': 'length',
        'ig_notes': 'The Function constructor is itself a Function object. Its length data property has a value of 1. The property attributes are: Writable: false, Enumerable: false, Configurable: true.<br/>The length property of the Function prototype object has a value of 0.',
        'ig_propertyType': 'property'
      },
      'name': {
        'ig_description': 'The name property returns the name of a function statement.',
        'ig_display': '\'<span class=\'red\'>btoa</span>\'',
        'ig_name': 'name',
        'ig_notes': 'Functions created with the syntax new Function(...) or just Function(...) create Function objects and their name is \'anonymous\'.<br/>Variables and methods can infer the name of an anonymous function from its syntactic position (new in ECMAScript 2015).',
        'ig_propertyType': 'property'
      }
    },
    'caches': {
      'CacheStorage': {
        'ig_description': 'The CacheStorage interface represents the storage for Cache objects. It provides a master directory of all the named caches that a ServiceWorker, other type of worker or window scope can access (you don\'t have to use it with service workers, even though that is the spec that defines it) and maintains a mapping of string names to corresponding Cache objects.<br/>CacheStorage also exposes CacheStorage.open() and CacheStorage.match(). Use CacheStorage.open() to obtain a Cache instance. Use CacheStorage.match() to check if a given Request is a key in any of the Cache objects that the CacheStorage object tracks.<br/>You can access CacheStorage through the global caches property.',
        'ig_display': 'CacheStorage',
        'ig_name': '_proto_',
        'ig_propertyType': 'object',
        'delete': {
          'arguments': {
            'ig_description': 'Finds the Cache object matching the cacheName, and if found, deletes the Cache object and returns a Promise that resolves to true. If no Cache object is found, it returns false.',
            'ig_display': '<span class=\'null\'>null</span>',
            'ig_name': 'arguments',
            'ig_propertyType': 'property'
          },
          'ig_description': 'The delete() method removes focus from the current window.',
          'ig_display': '<span class=\'pink\'>website</span> delete()',
          'ig_name': 'delete',
          'ig_propertyType': 'website',
          'caller': {
            'ig_description': 'If the function f was invoked by the top level code, the value of f.caller is null, otherwise it\'s the function that called f.<br/>This property replaces the obsolete arguments.caller property of the arguments object.<br/>The special property __caller__, which returned the activation object of the caller thus allowing to reconstruct the stack, was removed for security reasons.',
            'ig_display': '<span class=\'null\'>null</span>',
            'ig_name': 'caller',
            'ig_notes': 'Note that in case of recursion, you can\'t reconstruct the call stack using this property.',
            'ig_propertyType': 'property'
          },
          'length': {
            'ig_description': 'length is a property of a function object, and indicates how many arguments the function expects, i.e. the number of formal parameters. This number excludes the rest parameter and only includes parameters before the first one with a default value. By contrast, arguments.length is local to a function and provides the number of arguments actually passed to the function.',
            'ig_display': '<span class=\'blue\'>0</span>',
            'ig_name': 'length',
            'ig_notes': 'The Function constructor is itself a Function object. Its length data property has a value of 1. The property attributes are: Writable: false, Enumerable: false, Configurable: true.<br/>The length property of the Function prototype object has a value of 0.',
            'ig_propertyType': 'property'
          },
          'name': {
            'ig_description': 'The name property returns the name of a function statement.',
            'ig_display': '\'delete\'',
            'ig_name': 'name',
            'ig_notes': 'Functions created with the syntax new Function(...) or just Function(...) create Function objects and their name is \'anonymous\'.<br/>Variables and methods can infer the name of an anonymous function from its syntactic position (new in ECMAScript 2015).',
            'ig_propertyType': 'property'
          }
        },
        'has': {
          'arguments': {
            'ig_description': 'Finds the Cache object matching the cacheName, and if found, deletes the Cache object and returns a Promise that resolves to true. If no Cache object is found, it returns false.',
            'ig_display': '<span class=\'null\'>null</span>',
            'ig_name': 'arguments',
            'ig_propertyType': 'property'
          },
          'ig_description': 'Returns a Promise that resolves to true if a Cache object matching the cacheName exists.',
          'ig_display': '<span class=\'pink\'>website</span> has()',
          'ig_name': 'has',
          'ig_propertyType': 'website',
          'caller': {
            'ig_description': 'If the function f was invoked by the top level code, the value of f.caller is null, otherwise it\'s the function that called f.<br/>This property replaces the obsolete arguments.caller property of the arguments object.<br/>The special property __caller__, which returned the activation object of the caller thus allowing to reconstruct the stack, was removed for security reasons.',
            'ig_display': '<span class=\'null\'>null</span>',
            'ig_name': 'caller',
            'ig_notes': 'Note that in case of recursion, you can\'t reconstruct the call stack using this property.',
            'ig_propertyType': 'property'
          },
          'length': {
            'ig_description': 'length is a property of a function object, and indicates how many arguments the function expects, i.e. the number of formal parameters. This number excludes the rest parameter and only includes parameters before the first one with a default value. By contrast, arguments.length is local to a function and provides the number of arguments actually passed to the function.',
            'ig_display': '<span class=\'blue\'>0</span>',
            'ig_name': 'length',
            'ig_notes': 'The Function constructor is itself a Function object. Its length data property has a value of 1. The property attributes are: Writable: false, Enumerable: false, Configurable: true.<br/>The length property of the Function prototype object has a value of 0.',
            'ig_propertyType': 'property'
          },
          'name': {
            'ig_description': 'The name property returns the name of a function statement.',
            'ig_display': '\'has\'',
            'ig_name': 'name',
            'ig_notes': 'Functions created with the syntax new Function(...) or just Function(...) create Function objects and their name is \'anonymous\'.<br/>Variables and methods can infer the name of an anonymous function from its syntactic position (new in ECMAScript 2015).',
            'ig_propertyType': 'property'
          }
        },
        'keys': {
          'arguments': {
            'ig_description': 'Finds the Cache object matching the cacheName, and if found, deletes the Cache object and returns a Promise that resolves to true. If no Cache object is found, it returns false.',
            'ig_display': '<span class=\'null\'>null</span>',
            'ig_name': 'arguments',
            'ig_propertyType': 'property'
          },
          'ig_description': 'Returns a Promise that will resolve with an array containing strings corresponding to all of the named Cache objects tracked by the CacheStorage. Use this method to iterate over a list of all the Cache objects.',
          'ig_display': '<span class=\'pink\'>website</span> keys()',
          'ig_name': 'keys',
          'ig_propertyType': 'website',
          'caller': {
            'ig_description': 'If the function f was invoked by the top level code, the value of f.caller is null, otherwise it\'s the function that called f.<br/>This property replaces the obsolete arguments.caller property of the arguments object.<br/>The special property __caller__, which returned the activation object of the caller thus allowing to reconstruct the stack, was removed for security reasons.',
            'ig_display': '<span class=\'null\'>null</span>',
            'ig_name': 'caller',
            'ig_notes': 'Note that in case of recursion, you can\'t reconstruct the call stack using this property.',
            'ig_propertyType': 'property'
          },
          'length': {
            'ig_description': 'length is a property of a function object, and indicates how many arguments the function expects, i.e. the number of formal parameters. This number excludes the rest parameter and only includes parameters before the first one with a default value. By contrast, arguments.length is local to a function and provides the number of arguments actually passed to the function.',
            'ig_display': '<span class=\'blue\'>0</span>',
            'ig_name': 'length',
            'ig_notes': 'The Function constructor is itself a Function object. Its length data property has a value of 1. The property attributes are: Writable: false, Enumerable: false, Configurable: true.<br/>The length property of the Function prototype object has a value of 0.',
            'ig_propertyType': 'property'
          },
          'name': {
            'ig_description': 'The name property returns the name of a function statement.',
            'ig_display': '\'keys\'',
            'ig_name': 'name',
            'ig_notes': 'Functions created with the syntax new Function(...) or just Function(...) create Function objects and their name is \'anonymous\'.<br/>Variables and methods can infer the name of an anonymous function from its syntactic position (new in ECMAScript 2015).',
            'ig_propertyType': 'property'
          }
        },
        'match': {
          'arguments': {
            'ig_description': 'Finds the Cache object matching the cacheName, and if found, deletes the Cache object and returns a Promise that resolves to true. If no Cache object is found, it returns false.',
            'ig_display': '<span class=\'null\'>null</span>',
            'ig_name': 'arguments',
            'ig_propertyType': 'property'
          },
          'ig_description': 'Checks if a given Request is a key in any of the Cache objects that the CacheStorage object tracks and returns a Promise that resolves to that match.',
          'ig_display': '<span class=\'pink\'>website</span> match()',
          'ig_name': 'match',
          'ig_propertyType': 'website',
          'caller': {
            'ig_description': 'If the function f was invoked by the top level code, the value of f.caller is null, otherwise it\'s the function that called f.<br/>This property replaces the obsolete arguments.caller property of the arguments object.<br/>The special property __caller__, which returned the activation object of the caller thus allowing to reconstruct the stack, was removed for security reasons.',
            'ig_display': '<span class=\'null\'>null</span>',
            'ig_name': 'caller',
            'ig_notes': 'Note that in case of recursion, you can\'t reconstruct the call stack using this property.',
            'ig_propertyType': 'property'
          },
          'length': {
            'ig_description': 'length is a property of a function object, and indicates how many arguments the function expects, i.e. the number of formal parameters. This number excludes the rest parameter and only includes parameters before the first one with a default value. By contrast, arguments.length is local to a function and provides the number of arguments actually passed to the function.',
            'ig_display': '<span class=\'blue\'>0</span>',
            'ig_name': 'length',
            'ig_notes': 'The Function constructor is itself a Function object. Its length data property has a value of 1. The property attributes are: Writable: false, Enumerable: false, Configurable: true.<br/>The length property of the Function prototype object has a value of 0.',
            'ig_propertyType': 'property'
          },
          'name': {
            'ig_description': 'The name property returns the name of a function statement.',
            'ig_display': '\'match\'',
            'ig_name': 'name',
            'ig_notes': 'Functions created with the syntax new Function(...) or just Function(...) create Function objects and their name is \'anonymous\'.<br/>Variables and methods can infer the name of an anonymous function from its syntactic position (new in ECMAScript 2015).',
            'ig_propertyType': 'property'
          }
        },
        'open': {
          'arguments': {
            'ig_description': 'Finds the Cache object matching the cacheName, and if found, deletes the Cache object and returns a Promise that resolves to true. If no Cache object is found, it returns false.',
            'ig_display': '<span class=\'null\'>null</span>',
            'ig_name': 'arguments',
            'ig_propertyType': 'property'
          },
          'ig_description': 'Returns a Promise that resolves to the Cache object matching the cacheName (a new cache is created if it doesn\'t exist.)',
          'ig_display': '<span class=\'pink\'>website</span> open()',
          'ig_name': 'open',
          'ig_propertyType': 'website',
          'caller': {
            'ig_description': 'If the function f was invoked by the top level code, the value of f.caller is null, otherwise it\'s the function that called f.<br/>This property replaces the obsolete arguments.caller property of the arguments object.<br/>The special property __caller__, which returned the activation object of the caller thus allowing to reconstruct the stack, was removed for security reasons.',
            'ig_display': '<span class=\'null\'>null</span>',
            'ig_name': 'caller',
            'ig_notes': 'Note that in case of recursion, you can\'t reconstruct the call stack using this property.',
            'ig_propertyType': 'property'
          },
          'length': {
            'ig_description': 'length is a property of a function object, and indicates how many arguments the function expects, i.e. the number of formal parameters. This number excludes the rest parameter and only includes parameters before the first one with a default value. By contrast, arguments.length is local to a function and provides the number of arguments actually passed to the function.',
            'ig_display': '<span class=\'blue\'>0</span>',
            'ig_name': 'length',
            'ig_notes': 'The Function constructor is itself a Function object. Its length data property has a value of 1. The property attributes are: Writable: false, Enumerable: false, Configurable: true.<br/>The length property of the Function prototype object has a value of 0.',
            'ig_propertyType': 'property'
          },
          'name': {
            'ig_description': 'The name property returns the name of a function statement.',
            'ig_display': '\'open\'',
            'ig_name': 'name',
            'ig_notes': 'Functions created with the syntax new Function(...) or just Function(...) create Function objects and their name is \'anonymous\'.<br/>Variables and methods can infer the name of an anonymous function from its syntactic position (new in ECMAScript 2015).',
            'ig_propertyType': 'property'
          }
        }
      },
      'ig_description': 'The CacheStorage interface represents the storage for Cache objects. It provides a master directory of all the named caches that a ServiceWorker, other type of worker or window scope can access (you don\'t have to use it with service workers, even though that is the spec that defines it) and maintains a mapping of string names to corresponding Cache objects.<br/>CacheStorage also exposes CacheStorage.open() and CacheStorage.match(). Use CacheStorage.open() to obtain a Cache instance. Use CacheStorage.match() to check if a given Request is a key in any of the Cache objects that the CacheStorage object tracks.<br/>You can access CacheStorage through the global caches property.',
      'ig_display': 'CacheStorage',
      'ig_name': 'caches',
      'ig_propertyType': 'object'
    },
    'cancelAnimationFrame': {
      '__zone_symbol__OriginalDelegate': {
        'arguments': {
          'ig_description': 'Finds the Cache object matching the cacheName, and if found, deletes the Cache object and returns a Promise that resolves to true. If no Cache object is found, it returns false.',
          'ig_display': '<span class=\'null\'>null</span>',
          'ig_name': 'arguments',
          'ig_propertyType': 'property'
        },
        'ig_description': '????????????',
        'ig_display': '<span class=\'pink\'>website</span> cancelAnimationFrame()',
        'ig_name': '__zone_symbol__OriginalDelegate',
        'ig_propertyType': 'website',
        'caller': {
          'ig_description': 'If the function f was invoked by the top level code, the value of f.caller is null, otherwise it\'s the function that called f.<br/>This property replaces the obsolete arguments.caller property of the arguments object.<br/>The special property __caller__, which returned the activation object of the caller thus allowing to reconstruct the stack, was removed for security reasons.',
          'ig_display': '<span class=\'null\'>null</span>',
          'ig_name': 'caller',
          'ig_notes': 'Note that in case of recursion, you can\'t reconstruct the call stack using this property.',
          'ig_propertyType': 'property'
        },
        'length': {
          'ig_description': 'length is a property of a function object, and indicates how many arguments the function expects, i.e. the number of formal parameters. This number excludes the rest parameter and only includes parameters before the first one with a default value. By contrast, arguments.length is local to a function and provides the number of arguments actually passed to the function.',
          'ig_display': '<span class=\'blue\'>1</span>',
          'ig_name': 'length',
          'ig_notes': 'The Function constructor is itself a Function object. Its length data property has a value of 1. The property attributes are: Writable: false, Enumerable: false, Configurable: true.<br/>The length property of the Function prototype object has a value of 0.',
          'ig_propertyType': 'property'
        },
        'name': {
          'ig_description': 'The name property returns the name of a function statement.',
          'ig_display': '\'cancelAnimationFrame\'',
          'ig_name': 'name',
          'ig_notes': 'Functions created with the syntax new Function(...) or just Function(...) create Function objects and their name is \'anonymous\'.<br/>Variables and methods can infer the name of an anonymous function from its syntactic position (new in ECMAScript 2015).',
          'ig_propertyType': 'property'
        }
      },
      'arguments': {
        'ig_description': 'Finds the Cache object matching the cacheName, and if found, deletes the Cache object and returns a Promise that resolves to true. If no Cache object is found, it returns false.',
        'ig_display': '<span class=\'null\'>null</span>',
        'ig_name': 'arguments',
        'ig_propertyType': 'property'
      },
      'ig_coverage': [{
        'browser': 'Chrome',
        'covered': 'Yes',
        'version': '21.0'
      }, {
        'browser': 'IE',
        'covered': 'Yes',
        'version': '10.0'
      }, {
        'browser': 'Edge',
        'covered': 'Yes',
        'version': ''
      }, {
        'browser': 'Firefox',
        'covered': 'Yes',
        'version': '11.0'
      }, {
        'browser': 'Safari',
        'covered': 'Yes',
        'version': '6.0'
      }, {
        'browser': 'Opera',
        'covered': 'Yes',
        'version': '15.0'
      }],
      'ig_description': 'Cancels an animation frame request previously scheduled through a call to window.requestAnimationFrame().',
      'ig_display': '<span class=\'pink\'>website</span> cancelAnimationFrame()',
      'ig_name': 'cancelAnimationFrame',
      'ig_propertyType': 'website',
      'caller': {
        'ig_description': 'If the function f was invoked by the top level code, the value of f.caller is null, otherwise it\'s the function that called f.<br/>This property replaces the obsolete arguments.caller property of the arguments object.<br/>The special property __caller__, which returned the activation object of the caller thus allowing to reconstruct the stack, was removed for security reasons.',
        'ig_display': '<span class=\'null\'>null</span>',
        'ig_name': 'caller',
        'ig_notes': 'Note that in case of recursion, you can\'t reconstruct the call stack using this property.',
        'ig_propertyType': 'property'
      },
      'length': {
        'ig_description': 'length is a property of a function object, and indicates how many arguments the function expects, i.e. the number of formal parameters. This number excludes the rest parameter and only includes parameters before the first one with a default value. By contrast, arguments.length is local to a function and provides the number of arguments actually passed to the function.',
        'ig_display': '<span class=\'blue\'>0</span>',
        'ig_name': 'length',
        'ig_notes': 'The Function constructor is itself a Function object. Its length data property has a value of 1. The property attributes are: Writable: false, Enumerable: false, Configurable: true.<br/>The length property of the Function prototype object has a value of 0.',
        'ig_propertyType': 'property'
      },
      'name': {
        'ig_description': 'The name property returns the name of a function statement.',
        'ig_display': '\'\'',
        'ig_name': 'name',
        'ig_notes': 'Functions created with the syntax new Function(...) or just Function(...) create Function objects and their name is \'anonymous\'.<br/>Variables and methods can infer the name of an anonymous function from its syntactic position (new in ECMAScript 2015).',
        'ig_propertyType': 'property'
      }
    }
  };

  projects = {
    'ig_description': 'Recent Projects',
    'ig_display': '{<span class=\'pink\'>sample</span>: website, <span class=\'pink\'>Other</span>: website…}',
    'ig_name': 'Projects',
    'ig_propertyType': 'object',
    'first': {
      'ig_description': 'Fully developed the e-commerce platform. AngularJS, and blah blah blah stuff.',
      'ig_display': 'website <span class=\'pink\'>SupplyHub.com</span>',
      'ig_name': 'SupplyHub.com',
      'ig_propertyType': 'object',
      'technology': {
        'ig_display': '<span class=\'pink\'>Technology</span>',
        'ig_name': 'Includes',
        'ig_propertyType': 'object',
        'framework': {
          'ig_display': '<span class=\'blue\'>AngularJS</span>',
          'ig_name': 'framework',
          'ig_propertyType': 'property'
        }, 'language': {
          'ig_display': '<span class=\'blue\'>Javascript</span>',
          'ig_name': 'language',
          'ig_propertyType': 'property'
        }, 'testing': {
          'ig_display': '<span class=\'blue\'>Karma</span>, <span class=\'blue\'>Mocha</span>, <span class=\'blue\'>Other?</span>',
          'ig_name': 'testing',
          'ig_propertyType': 'property'
        }, 'etc': {
          'ig_display': '<span class=\'blue\'>etc.???</span>',
          'ig_name': 'etc',
          'ig_propertyType': 'property'
        }
      }
    }, 'second': {
      'ig_description': 'Sample Dashboard for Distributors using Angular 2',
      'ig_display': 'website <span class=\'pink\'>sh-dash-demo.bitballoon.com</span>',
      'ig_name': 'Dashboard Demo',
      'ig_propertyType': 'object',
      'technology': {
        'ig_display': '<span class=\'pink\'>Technology</span>',
        'ig_name': 'Includes',
        'ig_propertyType': 'object',
        'framework': {
          'ig_display': '<span class=\'blue\'>Angular 2.0</span>',
          'ig_name': 'framework',
          'ig_propertyType': 'property'
        }, 'language': {
          'ig_display': '<span class=\'blue\'>Typescript</span>',
          'ig_name': 'language',
          'ig_propertyType': 'property'
        }, 'taskRunner': {
          'ig_display': '<span class=\'blue\'>Angular CLI w/ webpack</span>',
          'ig_name': 'task runner',
          'ig_propertyType': 'property'
        }, 'charts': {
          'ig_display': '<span class=\'blue\'>Highcart.js</span>',
          'ig_name': 'charts',
          'ig_propertyType': 'property'
        }
      }
    }, 'tdirs': {
      'ig_description': 'Code Debt Correct by creating new Angular 4 SupplyHub.com',
      'ig_display': 'website <span class=\'pink\'>sh-front-end-demo.bitballoon.com</span>',
      'ig_name': 'Front-end Demo',
      'ig_propertyType': 'object',
      'technology': {
        'ig_display': '<span class=\'pink\'>Technology</span>',
        'ig_name': 'Includes',
        'ig_propertyType': 'object',
        'framework': {
          'ig_display': '<span class=\'blue\'>Angular 4.?</span>',
          'ig_name': 'framework',
          'ig_propertyType': 'property'
        }, 'language': {
          'ig_display': '<span class=\'blue\'>Typescript</span>',
          'ig_name': 'language',
          'ig_propertyType': 'property'
        }, 'taskRunner': {
          'ig_display': '<span class=\'blue\'>Angular CLI w/ customized webpack</span>',
          'ig_name': 'task runner',
          'ig_propertyType': 'property'
        }, 'http': {
          'ig_display': '<span class=\'blue\'>http async json open ????</span>',
          'ig_name': 'http integrations',
          'ig_propertyType': 'property'
        }
      }
    }
  };

  resume = {
    'ig_description': 'test description',
    'ig_display': 'link to PDF or links to page which displays info?',
    'ig_name': 'Resume',
    'ig_propertyType': 'object',
    'testing': {
      'ig_description': 'another test description',
      'ig_display': 'I dunno what to display',
      'ig_name': 'something',
      'ig_propertyType': 'property'
    }
  };

  contact = {
    'ig_description': 'SHOULD MAKE A FULL FORM APPEAR HERE FOR THEM TO EMAIL, MAYBE LINKS TO STUFF',
    'ig_display': 'email: <span class=\'blue\'>goldfarb.ian@gmail.com</span>',
    'ig_name': 'Contact Information',
    'ig_propertyType': 'property',
    'email': {
      'ig_display': '<span class=\'blue\'>goldfarb.ian@gmail.com</span>',
      'ig_name': 'email',
      'ig_propertyType': 'property',
    },
    'phone': {
      'ig_display': '<span class=\'blue\'>(541) 621-0655</span>',
      'ig_name': 'phone',
      'ig_propertyType': 'property',
    }
  };

  data = {
    ian: {
      'ig_display': 'Informational Object',
      'ig_name': 'Ian Goldfarb',
      'ig_propertyType': 'object',
      'about': this.about,
      'resume': this.resume,
      'projects': this.projects,
      'contact': this.contact
    }
  };

  // property = {
  //   'ig_coverage': [{
  //     'browser': '',
  //     'covered': '',
  //     'version': ''
  //   }],
  //   'ig_description': '',
  //   'ig_display': '',
  //   'ig_examples': '',
  //   'ig_methods': [{
  //     'description': '',
  //     'name': '',
  //     'type': ''
  //   }],
  //   'ig_name': '',
  //   'ig_notes': '',
  //   'ig_parameters': [{
  //     'description': '',
  //     'name': '',
  //     'type': ''
  //   }],
  //   'ig_propertyType': '',
  //   'ig_see_also': [ '' ]
  // }
}
