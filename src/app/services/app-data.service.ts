export class DataService {
  constructor() {}

  window = {
    'propertyFormat': {
      'bo_coverage': [{
        'browser': '',
        'covered': '',
        'version': ''
      }],
      'bo_description': '',
      'bo_display': '',
      'bo_examples': '',
      'bo_methods': [{
        'description': '',
        'name': '',
        'type': ''
      }],
      'bo_name': '',
      'bo_notes': '',
      'bo_parameters': [{
        'description': '',
        'name': '',
        'type': ''
      }],
      'bo_propertyType': '',
      'bo_see_also': [ '' ]
    },
    'window': {
      'alert': {
        'arguments': {
          'bo_description': 'The arguments object is a local variable available within all functions. You can refer to a function\'s arguments within the function by using the arguments object. This object contains an entry for each argument passed to the function, the first entry\'s index starting at 0.',
          'bo_display': '<span class=\'null\'>null</span>',
          'bo_name': 'arguments',
          'bo_propertyType': 'property'
        },
        'bo_coverage': [{
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
        'bo_description': 'The alert() method displays an alert box with a specified message and an OK button.<br/>An alert box is often used if you want to make sure information comes through to the user.',
        'bo_display': '<span class=\'pink\'>function</span> alert()',
        'bo_name': 'alert',
        'bo_notes': 'The alert dialog should be used for messages which do not require any response on the part of the user, other than the acknowledgement of the message.<br/>Dialog boxes are modal windows - they prevent the user from accessing the rest of the program\'s interface until the dialog box is closed. For this reason, you should not overuse any function that creates a dialog box (or modal window).<br/>Mozilla Chrome users (e.g. Firefox extensions) should use methods of nsIPromptService instead.<br/>Starting with Chrome 46.0 this method is blocked inside an <iframe> unless its sandbox attribute has the value allow-modal.<br/>The argument is now optional like required by the spec.',
        'bo_parameters': [{
          'description': 'Optional. Specifies the text to display in the alert box, or an object converted into a string and displayed',
          'name': 'message',
          'type': 'string'
        }],
        'bo_propertyType': 'function',
        'bo_see_also': [ '<a href=\'https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm\' target=\'_blank\'>confirm</a>', '<a href=\'https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt\' target=\'_blank\'>prompt</a>', 'For <a href=\'https://developer.mozilla.org/en-US/docs/Chrome\' target=\'_blank\'>Mozilla Chrome</a> see <a href=\'https://developer.mozilla.org/en-US/docs/XPCOM_Interface_Reference/nsIPromptService#alert()\' target=\'_blank\'>nsIPromptService.alert()<a/> and <a href=\'https://developer.mozilla.org/en-US/docs/XPCOM_Interface_Reference/nsIPromptService#alertCheck()\' target=\'_blank\'>nsIPromptService.alertCheck()</a>' ],
        'caller': {
          'bo_description': 'If the function f was invoked by the top level code, the value of f.caller is null, otherwise it\'s the function that called f.<br/>This property replaces the obsolete arguments.caller property of the arguments object.<br/>The special property __caller__, which returned the activation object of the caller thus allowing to reconstruct the stack, was removed for security reasons.',
          'bo_display': '<span class=\'null\'>null</span>',
          'bo_name': 'caller',
          'bo_notes': 'Note that in case of recursion, you can\'t reconstruct the call stack using this property.',
          'bo_propertyType': 'property'
        },
        'length': {
          'bo_description': 'length is a property of a function object, and indicates how many arguments the function expects, i.e. the number of formal parameters. This number excludes the rest parameter and only includes parameters before the first one with a default value. By contrast, arguments.length is local to a function and provides the number of arguments actually passed to the function.',
          'bo_display': '<span class=\'blue\'>0</span>',
          'bo_name': 'length',
          'bo_notes': 'The Function constructor is itself a Function object. Its length data property has a value of 1. The property attributes are: Writable: false, Enumerable: false, Configurable: true.<br/>The length property of the Function prototype object has a value of 0.',
          'bo_propertyType': 'property'
        },
        'name': {
          'bo_description': 'The name property returns the name of a function statement.',
          'bo_display': '\'<span class=\'red\'>alert</span>\'',
          'bo_name': 'name',
          'bo_notes': 'Functions created with the syntax new Function(...) or just Function(...) create Function objects and their name is \'anonymous\'.<br/>Variables and methods can infer the name of an anonymous function from its syntactic position (new in ECMAScript 2015).',
          'bo_propertyType': 'property'
        }
      },
      'applicationCache': {
        'bo_coverage': '?????',
        'bo_description': 'An OfflineResourceList object providing access to the offline resources for the window.',
        'bo_display': 'ApplicationCache',
        'bo_name': 'applicationCache',
        'bo_notes': '??????',
        'bo_parameters': [{
          'description': 'Optional. Specifies the text to display in the alert box, or an object converted into a string and displayed',
          'name': 'fake',
          'type': 'string'
        }, {
          'description': 'Optional. Specifies the text to display in the alert box, or an object converted into a string and displayed',
          'name': 'anotherFake',
          'type': 'string'
        }, {
          'description': 'Optional. Specifies the text to display in the alert box, or an object converted into a string and displayed',
          'name': 'BlahBlah',
          'type': 'string'
        }],
        'bo_propertyType': 'object',
        'bo_see_also': [ '??????', '???????' ],
        'oncached': {
          'bo_description': 'This eventhandler is called, after the downloading eventhandler is called, when all the resources in the manifest file have been downloaded. No more eventhandlers are called after this eventhandler.',
          'bo_display': '<span class=\'null\'>null</span>',
          'bo_name': 'oncached',
          'bo_propertyType': 'property'
        },
        'onchecking': {
          'bo_description': 'This eventhandler is called when the browser is downloading the manifest file for the first time or when it is downloading the manifest to check whether there has been an update. This eventhandler is always the first eventhandler that is called.',
          'bo_display': '<span class=\'null\'>null</span>',
          'bo_name': 'onchecking',
          'bo_propertyType': 'property'
        },
        'ondownloading': {
          'bo_description': 'This eventhandler is called, after the checking eventhandler is called, if the resources listed in the manifest file are being downloaded because either they have never been downloaded before or the manifest file was updated.',
          'bo_display': '<span class=\'null\'>null</span>',
          'bo_name': 'ondownloading',
          'bo_propertyType': 'property'
        },
        'onerror': {
          'bo_description': 'This eventhandler is called when there has been an error. There are a number of causes for this event including: an error while retrieving the manifest file, an error while retrieving resources listed in the manifest file, the manifest file was updated while the Application Cache was being updated. No more eventhandlers are called after this eventhandler.',
          'bo_display': '<span class=\'null\'>null</span>',
          'bo_name': 'onerror',
          'bo_propertyType': 'property'
        },
        'onnoupdate': {
          'bo_description': 'This eventhandler is called, after the checking eventhandler is called, if there has been no change to the manifest file. No more eventhandlers are called after this eventhandler.',
          'bo_display': '<span class=\'null\'>null</span>',
          'bo_name': 'onnoupdate',
          'bo_propertyType': 'property'
        },
        'onobsolete': {
          'bo_description': 'This eventhandler is called if the request for the manifest file returns a 404 Not Found or a 410 Gone status code. It is used to indicate that the manifest file cannot be found and the Application Cache will be deleted. No more eventhandlers are called after this eventhandler.',
          'bo_display': '<span class=\'null\'>null</span>',
          'bo_name': 'onobsolete',
          'bo_propertyType': 'property'
        },
        'onprogress': {
          'bo_description': 'This eventhandler is called after each file listed in the manifest file is downloaded. The event passed to this eventhandler is a ProgressEvent with addition properties total and loaded however this are not reliably implemented in all browser.This eventhandler is called, after the downloading eventhandler is called, when there has been an updated to an existing Application Cache and all the resources in the manifest file have been downloaded. No more eventhandlers are called after this eventhandler.',
          'bo_display': '<span class=\'null\'>null</span>',
          'bo_name': 'onprogress',
          'bo_propertyType': 'property'
        },
        'onupdateready': {
          'bo_description': 'This eventhandler is called, after the downloading eventhandler is called, when there has been an updated to an existing Application Cache and all the resources in the manifest file have been downloaded. No more eventhandlers are called after this eventhandler.',
          'bo_display': '<span class=\'null\'>null</span>',
          'bo_name': 'onupdateready',
          'bo_propertyType': 'property'
        },
        'status': {
          'bo_description': 'This indicates the current status value as an integer which can be decoded using any of the status constants.',
          'bo_display': '<span class=\'blue\'>0</span>',
          'bo_name': 'status',
          'bo_propertyType': 'property'
        }
      },
      'atob': {
        'arguments': {
          'bo_description': 'The arguments object is a local variable available within all functions. You can refer to a function\'s arguments within the function by using the arguments object. This object contains an entry for each argument passed to the function, the first entry\'s index starting at 0.',
          'bo_display': '<span class=\'null\'>null</span>',
          'bo_name': 'arguments',
          'bo_propertyType': 'property'
        },
        'bo_coverage': [{
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
        'bo_description': 'The atob() method decodes a base-64 encoded string.<br/>This method decodes a string of data which has been encoded by the btoa() method.',
        'bo_display': '<span class=\'pink\'>function</span> atob()',
        'bo_name': 'atob',
        'bo_parameters': [{
          'description': 'Required. The string which has been encoded by the btoa() method',
          'name': 'encodedStr',
          'type': 'string'
        }],
        'bo_propertyType': 'function',
        'caller': {
          'bo_description': 'If the function f was invoked by the top level code, the value of f.caller is null, otherwise it\'s the function that called f.<br/>This property replaces the obsolete arguments.caller property of the arguments object.<br/>The special property __caller__, which returned the activation object of the caller thus allowing to reconstruct the stack, was removed for security reasons.',
          'bo_display': '<span class=\'null\'>null</span>',
          'bo_name': 'caller',
          'bo_notes': 'Note that in case of recursion, you can\'t reconstruct the call stack using this property.',
          'bo_propertyType': 'property'
        },
        'length': {
          'bo_description': 'length is a property of a function object, and indicates how many arguments the function expects, i.e. the number of formal parameters. This number excludes the rest parameter and only includes parameters before the first one with a default value. By contrast, arguments.length is local to a function and provides the number of arguments actually passed to the function.',
          'bo_display': '<span class=\'blue\'>1</span>',
          'bo_name': 'length',
          'bo_notes': 'The Function constructor is itself a Function object. Its length data property has a value of 1. The property attributes are: Writable: false, Enumerable: false, Configurable: true.<br/>The length property of the Function prototype object has a value of 0.',
          'bo_propertyType': 'property'
        },
        'name': {
          'bo_description': 'The name property returns the name of a function statement.',
          'bo_display': '\'<span class=\'red\'>atob</span>\'',
          'bo_name': 'name',
          'bo_notes': 'Functions created with the syntax new Function(...) or just Function(...) create Function objects and their name is \'anonymous\'.<br/>Variables and methods can infer the name of an anonymous function from its syntactic position (new in ECMAScript 2015).',
          'bo_propertyType': 'property'
        }
      },
      'blur': {
        'arguments': {
          'bo_description': 'The arguments object is a local variable available within all functions. You can refer to a function\'s arguments within the function by using the arguments object. This object contains an entry for each argument passed to the function, the first entry\'s index starting at 0.',
          'bo_display': '<span class=\'null\'>null</span>',
          'bo_name': 'arguments',
          'bo_propertyType': 'property'
        },
        'bo_coverage': [{
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
        'bo_description': 'The blur() method removes focus from the current window.',
        'bo_display': '<span class=\'pink\'>function</span> ()',
        'bo_examples': 'window.blur()',
        'bo_name': 'blur',
        'bo_notes': 'This method makes a request to bring the current window to the background. It may not work as you expect in all browsers, due to different user settings.',
        'bo_parameters': [{
          'description': '',
          'name': 'none',
          'type': ''
        }],
        'bo_propertyType': 'function',
        'caller': {
          'bo_description': 'If the function f was invoked by the top level code, the value of f.caller is null, otherwise it\'s the function that called f.<br/>This property replaces the obsolete arguments.caller property of the arguments object.<br/>The special property __caller__, which returned the activation object of the caller thus allowing to reconstruct the stack, was removed for security reasons.',
          'bo_display': '<span class=\'null\'>null</span>',
          'bo_name': 'caller',
          'bo_notes': 'Note that in case of recursion, you can\'t reconstruct the call stack using this property.',
          'bo_propertyType': 'property'
        },
        'length': {
          'bo_description': 'length is a property of a function object, and indicates how many arguments the function expects, i.e. the number of formal parameters. This number excludes the rest parameter and only includes parameters before the first one with a default value. By contrast, arguments.length is local to a function and provides the number of arguments actually passed to the function.',
          'bo_display': '<span class=\'blue\'>0</span>',
          'bo_name': 'length',
          'bo_notes': 'The Function constructor is itself a Function object. Its length data property has a value of 1. The property attributes are: Writable: false, Enumerable: false, Configurable: true.<br/>The length property of the Function prototype object has a value of 0.',
          'bo_propertyType': 'property'
        },
        'name': {
          'bo_description': 'The name property returns the name of a function statement.',
          'bo_display': '\'\'',
          'bo_name': 'name',
          'bo_notes': 'Functions created with the syntax new Function(...) or just Function(...) create Function objects and their name is \'anonymous\'.<br/>Variables and methods can infer the name of an anonymous function from its syntactic position (new in ECMAScript 2015).',
          'bo_propertyType': 'property'
        }
      },
      'bo_description': 'The window object represents an open window in a browser.<br/>If a document contain frames (<iframe> tags), the browser creates one window object for the HTML document, and one additional window object for each frame.',
      'bo_display': '{<span class=\'pink\'>stop</span>: function, <span class=\'pink\'>open</span>: function, <span class=\'pink\'>alert</span>: function, <span class=\'pink\'>confirm</span>: function, <span class=\'pink\'>prompt</span>: function…}',
      'bo_name': 'Window',
      'bo_notes': 'There is no public standard that applies to the Window object, but all major browsers support it.',
      'bo_propertyType': 'object',
      'btoa': {
        'arguments': {
          'bo_description': 'The arguments object is a local variable available within all functions. You can refer to a function\'s arguments within the function by using the arguments object. This object contains an entry for each argument passed to the function, the first entry\'s index starting at 0.',
          'bo_display': '<span class=\'null\'>null</span>',
          'bo_name': 'arguments',
          'bo_propertyType': 'property'
        },
        'bo_coverage': [{
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
        'bo_description': 'The btoa() method encodes a string in base-64.<br/>This method uses the \'A-Z\', \'a-z\', \'0-9\', \'+\', \'/\' and \'=\' characters to encode the string.',
        'bo_display': '<span class=\'pink\'>function</span> btoa()',
        'bo_examples': '<span class=\'blue\'>var</span> str = <span class=\'red\'>\'Hello World!\'</span>;<br/><span class=\'blue\'>var</span> enc = window.btoa(str);<br/><span class=\'blue\'>var</span> res = <span class=\'red\'>\'Encoded String: \'</span> + enc;',
        'bo_name': 'btoa',
        'bo_parameters': [{
          'description': 'Required. The string to be encoded.',
          'name': 'str',
          'type': 'string'
        }],
        'bo_propertyType': 'function',
        'caller': {
          'bo_description': 'If the function f was invoked by the top level code, the value of f.caller is null, otherwise it\'s the function that called f.<br/>This property replaces the obsolete arguments.caller property of the arguments object.<br/>The special property __caller__, which returned the activation object of the caller thus allowing to reconstruct the stack, was removed for security reasons.',
          'bo_display': '<span class=\'null\'>null</span>',
          'bo_name': 'caller',
          'bo_notes': 'Note that in case of recursion, you can\'t reconstruct the call stack using this property.',
          'bo_propertyType': 'property'
        },
        'length': {
          'bo_description': 'length is a property of a function object, and indicates how many arguments the function expects, i.e. the number of formal parameters. This number excludes the rest parameter and only includes parameters before the first one with a default value. By contrast, arguments.length is local to a function and provides the number of arguments actually passed to the function.',
          'bo_display': '<span class=\'blue\'>1</span>',
          'bo_name': 'length',
          'bo_notes': 'The Function constructor is itself a Function object. Its length data property has a value of 1. The property attributes are: Writable: false, Enumerable: false, Configurable: true.<br/>The length property of the Function prototype object has a value of 0.',
          'bo_propertyType': 'property'
        },
        'name': {
          'bo_description': 'The name property returns the name of a function statement.',
          'bo_display': '\'<span class=\'red\'>btoa</span>\'',
          'bo_name': 'name',
          'bo_notes': 'Functions created with the syntax new Function(...) or just Function(...) create Function objects and their name is \'anonymous\'.<br/>Variables and methods can infer the name of an anonymous function from its syntactic position (new in ECMAScript 2015).',
          'bo_propertyType': 'property'
        }
      },
      'caches': {
        'CacheStorage': {
          'bo_description': 'The CacheStorage interface represents the storage for Cache objects. It provides a master directory of all the named caches that a ServiceWorker, other type of worker or window scope can access (you don\'t have to use it with service workers, even though that is the spec that defines it) and maintains a mapping of string names to corresponding Cache objects.<br/>CacheStorage also exposes CacheStorage.open() and CacheStorage.match(). Use CacheStorage.open() to obtain a Cache instance. Use CacheStorage.match() to check if a given Request is a key in any of the Cache objects that the CacheStorage object tracks.<br/>You can access CacheStorage through the global caches property.',
          'bo_display': 'CacheStorage',
          'bo_name': '_proto_',
          'bo_propertyType': 'object',
          'delete': {
            'arguments': {
              'bo_description': 'Finds the Cache object matching the cacheName, and if found, deletes the Cache object and returns a Promise that resolves to true. If no Cache object is found, it returns false.',
              'bo_display': '<span class=\'null\'>null</span>',
              'bo_name': 'arguments',
              'bo_propertyType': 'property'
            },
            'bo_description': 'The delete() method removes focus from the current window.',
            'bo_display': '<span class=\'pink\'>function</span> delete()',
            'bo_name': 'delete',
            'bo_propertyType': 'function',
            'caller': {
              'bo_description': 'If the function f was invoked by the top level code, the value of f.caller is null, otherwise it\'s the function that called f.<br/>This property replaces the obsolete arguments.caller property of the arguments object.<br/>The special property __caller__, which returned the activation object of the caller thus allowing to reconstruct the stack, was removed for security reasons.',
              'bo_display': '<span class=\'null\'>null</span>',
              'bo_name': 'caller',
              'bo_notes': 'Note that in case of recursion, you can\'t reconstruct the call stack using this property.',
              'bo_propertyType': 'property'
            },
            'length': {
              'bo_description': 'length is a property of a function object, and indicates how many arguments the function expects, i.e. the number of formal parameters. This number excludes the rest parameter and only includes parameters before the first one with a default value. By contrast, arguments.length is local to a function and provides the number of arguments actually passed to the function.',
              'bo_display': '<span class=\'blue\'>0</span>',
              'bo_name': 'length',
              'bo_notes': 'The Function constructor is itself a Function object. Its length data property has a value of 1. The property attributes are: Writable: false, Enumerable: false, Configurable: true.<br/>The length property of the Function prototype object has a value of 0.',
              'bo_propertyType': 'property'
            },
            'name': {
              'bo_description': 'The name property returns the name of a function statement.',
              'bo_display': '\'delete\'',
              'bo_name': 'name',
              'bo_notes': 'Functions created with the syntax new Function(...) or just Function(...) create Function objects and their name is \'anonymous\'.<br/>Variables and methods can infer the name of an anonymous function from its syntactic position (new in ECMAScript 2015).',
              'bo_propertyType': 'property'
            }
          },
          'has': {
            'arguments': {
              'bo_description': 'Finds the Cache object matching the cacheName, and if found, deletes the Cache object and returns a Promise that resolves to true. If no Cache object is found, it returns false.',
              'bo_display': '<span class=\'null\'>null</span>',
              'bo_name': 'arguments',
              'bo_propertyType': 'property'
            },
            'bo_description': 'Returns a Promise that resolves to true if a Cache object matching the cacheName exists.',
            'bo_display': '<span class=\'pink\'>function</span> has()',
            'bo_name': 'has',
            'bo_propertyType': 'function',
            'caller': {
              'bo_description': 'If the function f was invoked by the top level code, the value of f.caller is null, otherwise it\'s the function that called f.<br/>This property replaces the obsolete arguments.caller property of the arguments object.<br/>The special property __caller__, which returned the activation object of the caller thus allowing to reconstruct the stack, was removed for security reasons.',
              'bo_display': '<span class=\'null\'>null</span>',
              'bo_name': 'caller',
              'bo_notes': 'Note that in case of recursion, you can\'t reconstruct the call stack using this property.',
              'bo_propertyType': 'property'
            },
            'length': {
              'bo_description': 'length is a property of a function object, and indicates how many arguments the function expects, i.e. the number of formal parameters. This number excludes the rest parameter and only includes parameters before the first one with a default value. By contrast, arguments.length is local to a function and provides the number of arguments actually passed to the function.',
              'bo_display': '<span class=\'blue\'>0</span>',
              'bo_name': 'length',
              'bo_notes': 'The Function constructor is itself a Function object. Its length data property has a value of 1. The property attributes are: Writable: false, Enumerable: false, Configurable: true.<br/>The length property of the Function prototype object has a value of 0.',
              'bo_propertyType': 'property'
            },
            'name': {
              'bo_description': 'The name property returns the name of a function statement.',
              'bo_display': '\'has\'',
              'bo_name': 'name',
              'bo_notes': 'Functions created with the syntax new Function(...) or just Function(...) create Function objects and their name is \'anonymous\'.<br/>Variables and methods can infer the name of an anonymous function from its syntactic position (new in ECMAScript 2015).',
              'bo_propertyType': 'property'
            }
          },
          'keys': {
            'arguments': {
              'bo_description': 'Finds the Cache object matching the cacheName, and if found, deletes the Cache object and returns a Promise that resolves to true. If no Cache object is found, it returns false.',
              'bo_display': '<span class=\'null\'>null</span>',
              'bo_name': 'arguments',
              'bo_propertyType': 'property'
            },
            'bo_description': 'Returns a Promise that will resolve with an array containing strings corresponding to all of the named Cache objects tracked by the CacheStorage. Use this method to iterate over a list of all the Cache objects.',
            'bo_display': '<span class=\'pink\'>function</span> keys()',
            'bo_name': 'keys',
            'bo_propertyType': 'function',
            'caller': {
              'bo_description': 'If the function f was invoked by the top level code, the value of f.caller is null, otherwise it\'s the function that called f.<br/>This property replaces the obsolete arguments.caller property of the arguments object.<br/>The special property __caller__, which returned the activation object of the caller thus allowing to reconstruct the stack, was removed for security reasons.',
              'bo_display': '<span class=\'null\'>null</span>',
              'bo_name': 'caller',
              'bo_notes': 'Note that in case of recursion, you can\'t reconstruct the call stack using this property.',
              'bo_propertyType': 'property'
            },
            'length': {
              'bo_description': 'length is a property of a function object, and indicates how many arguments the function expects, i.e. the number of formal parameters. This number excludes the rest parameter and only includes parameters before the first one with a default value. By contrast, arguments.length is local to a function and provides the number of arguments actually passed to the function.',
              'bo_display': '<span class=\'blue\'>0</span>',
              'bo_name': 'length',
              'bo_notes': 'The Function constructor is itself a Function object. Its length data property has a value of 1. The property attributes are: Writable: false, Enumerable: false, Configurable: true.<br/>The length property of the Function prototype object has a value of 0.',
              'bo_propertyType': 'property'
            },
            'name': {
              'bo_description': 'The name property returns the name of a function statement.',
              'bo_display': '\'keys\'',
              'bo_name': 'name',
              'bo_notes': 'Functions created with the syntax new Function(...) or just Function(...) create Function objects and their name is \'anonymous\'.<br/>Variables and methods can infer the name of an anonymous function from its syntactic position (new in ECMAScript 2015).',
              'bo_propertyType': 'property'
            }
          },
          'match': {
            'arguments': {
              'bo_description': 'Finds the Cache object matching the cacheName, and if found, deletes the Cache object and returns a Promise that resolves to true. If no Cache object is found, it returns false.',
              'bo_display': '<span class=\'null\'>null</span>',
              'bo_name': 'arguments',
              'bo_propertyType': 'property'
            },
            'bo_description': 'Checks if a given Request is a key in any of the Cache objects that the CacheStorage object tracks and returns a Promise that resolves to that match.',
            'bo_display': '<span class=\'pink\'>function</span> match()',
            'bo_name': 'match',
            'bo_propertyType': 'function',
            'caller': {
              'bo_description': 'If the function f was invoked by the top level code, the value of f.caller is null, otherwise it\'s the function that called f.<br/>This property replaces the obsolete arguments.caller property of the arguments object.<br/>The special property __caller__, which returned the activation object of the caller thus allowing to reconstruct the stack, was removed for security reasons.',
              'bo_display': '<span class=\'null\'>null</span>',
              'bo_name': 'caller',
              'bo_notes': 'Note that in case of recursion, you can\'t reconstruct the call stack using this property.',
              'bo_propertyType': 'property'
            },
            'length': {
              'bo_description': 'length is a property of a function object, and indicates how many arguments the function expects, i.e. the number of formal parameters. This number excludes the rest parameter and only includes parameters before the first one with a default value. By contrast, arguments.length is local to a function and provides the number of arguments actually passed to the function.',
              'bo_display': '<span class=\'blue\'>0</span>',
              'bo_name': 'length',
              'bo_notes': 'The Function constructor is itself a Function object. Its length data property has a value of 1. The property attributes are: Writable: false, Enumerable: false, Configurable: true.<br/>The length property of the Function prototype object has a value of 0.',
              'bo_propertyType': 'property'
            },
            'name': {
              'bo_description': 'The name property returns the name of a function statement.',
              'bo_display': '\'match\'',
              'bo_name': 'name',
              'bo_notes': 'Functions created with the syntax new Function(...) or just Function(...) create Function objects and their name is \'anonymous\'.<br/>Variables and methods can infer the name of an anonymous function from its syntactic position (new in ECMAScript 2015).',
              'bo_propertyType': 'property'
            }
          },
          'open': {
            'arguments': {
              'bo_description': 'Finds the Cache object matching the cacheName, and if found, deletes the Cache object and returns a Promise that resolves to true. If no Cache object is found, it returns false.',
              'bo_display': '<span class=\'null\'>null</span>',
              'bo_name': 'arguments',
              'bo_propertyType': 'property'
            },
            'bo_description': 'Returns a Promise that resolves to the Cache object matching the cacheName (a new cache is created if it doesn\'t exist.)',
            'bo_display': '<span class=\'pink\'>function</span> open()',
            'bo_name': 'open',
            'bo_propertyType': 'function',
            'caller': {
              'bo_description': 'If the function f was invoked by the top level code, the value of f.caller is null, otherwise it\'s the function that called f.<br/>This property replaces the obsolete arguments.caller property of the arguments object.<br/>The special property __caller__, which returned the activation object of the caller thus allowing to reconstruct the stack, was removed for security reasons.',
              'bo_display': '<span class=\'null\'>null</span>',
              'bo_name': 'caller',
              'bo_notes': 'Note that in case of recursion, you can\'t reconstruct the call stack using this property.',
              'bo_propertyType': 'property'
            },
            'length': {
              'bo_description': 'length is a property of a function object, and indicates how many arguments the function expects, i.e. the number of formal parameters. This number excludes the rest parameter and only includes parameters before the first one with a default value. By contrast, arguments.length is local to a function and provides the number of arguments actually passed to the function.',
              'bo_display': '<span class=\'blue\'>0</span>',
              'bo_name': 'length',
              'bo_notes': 'The Function constructor is itself a Function object. Its length data property has a value of 1. The property attributes are: Writable: false, Enumerable: false, Configurable: true.<br/>The length property of the Function prototype object has a value of 0.',
              'bo_propertyType': 'property'
            },
            'name': {
              'bo_description': 'The name property returns the name of a function statement.',
              'bo_display': '\'open\'',
              'bo_name': 'name',
              'bo_notes': 'Functions created with the syntax new Function(...) or just Function(...) create Function objects and their name is \'anonymous\'.<br/>Variables and methods can infer the name of an anonymous function from its syntactic position (new in ECMAScript 2015).',
              'bo_propertyType': 'property'
            }
          }
        },
        'bo_description': 'The CacheStorage interface represents the storage for Cache objects. It provides a master directory of all the named caches that a ServiceWorker, other type of worker or window scope can access (you don\'t have to use it with service workers, even though that is the spec that defines it) and maintains a mapping of string names to corresponding Cache objects.<br/>CacheStorage also exposes CacheStorage.open() and CacheStorage.match(). Use CacheStorage.open() to obtain a Cache instance. Use CacheStorage.match() to check if a given Request is a key in any of the Cache objects that the CacheStorage object tracks.<br/>You can access CacheStorage through the global caches property.',
        'bo_display': 'CacheStorage',
        'bo_name': 'caches',
        'bo_propertyType': 'object'
      },
      'cancelAnimationFrame': {
        '__zone_symbol__OriginalDelegate': {
          'arguments': {
            'bo_description': 'Finds the Cache object matching the cacheName, and if found, deletes the Cache object and returns a Promise that resolves to true. If no Cache object is found, it returns false.',
            'bo_display': '<span class=\'null\'>null</span>',
            'bo_name': 'arguments',
            'bo_propertyType': 'property'
          },
          'bo_description': '????????????',
          'bo_display': '<span class=\'pink\'>function</span> cancelAnimationFrame()',
          'bo_name': '__zone_symbol__OriginalDelegate',
          'bo_propertyType': 'function',
          'caller': {
            'bo_description': 'If the function f was invoked by the top level code, the value of f.caller is null, otherwise it\'s the function that called f.<br/>This property replaces the obsolete arguments.caller property of the arguments object.<br/>The special property __caller__, which returned the activation object of the caller thus allowing to reconstruct the stack, was removed for security reasons.',
            'bo_display': '<span class=\'null\'>null</span>',
            'bo_name': 'caller',
            'bo_notes': 'Note that in case of recursion, you can\'t reconstruct the call stack using this property.',
            'bo_propertyType': 'property'
          },
          'length': {
            'bo_description': 'length is a property of a function object, and indicates how many arguments the function expects, i.e. the number of formal parameters. This number excludes the rest parameter and only includes parameters before the first one with a default value. By contrast, arguments.length is local to a function and provides the number of arguments actually passed to the function.',
            'bo_display': '<span class=\'blue\'>1</span>',
            'bo_name': 'length',
            'bo_notes': 'The Function constructor is itself a Function object. Its length data property has a value of 1. The property attributes are: Writable: false, Enumerable: false, Configurable: true.<br/>The length property of the Function prototype object has a value of 0.',
            'bo_propertyType': 'property'
          },
          'name': {
            'bo_description': 'The name property returns the name of a function statement.',
            'bo_display': '\'cancelAnimationFrame\'',
            'bo_name': 'name',
            'bo_notes': 'Functions created with the syntax new Function(...) or just Function(...) create Function objects and their name is \'anonymous\'.<br/>Variables and methods can infer the name of an anonymous function from its syntactic position (new in ECMAScript 2015).',
            'bo_propertyType': 'property'
          }
        },
        'arguments': {
          'bo_description': 'Finds the Cache object matching the cacheName, and if found, deletes the Cache object and returns a Promise that resolves to true. If no Cache object is found, it returns false.',
          'bo_display': '<span class=\'null\'>null</span>',
          'bo_name': 'arguments',
          'bo_propertyType': 'property'
        },
        'bo_coverage': [{
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
        'bo_description': 'Cancels an animation frame request previously scheduled through a call to window.requestAnimationFrame().',
        'bo_display': '<span class=\'pink\'>function</span> cancelAnimationFrame()',
        'bo_name': 'cancelAnimationFrame',
        'bo_propertyType': 'function',
        'caller': {
          'bo_description': 'If the function f was invoked by the top level code, the value of f.caller is null, otherwise it\'s the function that called f.<br/>This property replaces the obsolete arguments.caller property of the arguments object.<br/>The special property __caller__, which returned the activation object of the caller thus allowing to reconstruct the stack, was removed for security reasons.',
          'bo_display': '<span class=\'null\'>null</span>',
          'bo_name': 'caller',
          'bo_notes': 'Note that in case of recursion, you can\'t reconstruct the call stack using this property.',
          'bo_propertyType': 'property'
        },
        'length': {
          'bo_description': 'length is a property of a function object, and indicates how many arguments the function expects, i.e. the number of formal parameters. This number excludes the rest parameter and only includes parameters before the first one with a default value. By contrast, arguments.length is local to a function and provides the number of arguments actually passed to the function.',
          'bo_display': '<span class=\'blue\'>0</span>',
          'bo_name': 'length',
          'bo_notes': 'The Function constructor is itself a Function object. Its length data property has a value of 1. The property attributes are: Writable: false, Enumerable: false, Configurable: true.<br/>The length property of the Function prototype object has a value of 0.',
          'bo_propertyType': 'property'
        },
        'name': {
          'bo_description': 'The name property returns the name of a function statement.',
          'bo_display': '\'\'',
          'bo_name': 'name',
          'bo_notes': 'Functions created with the syntax new Function(...) or just Function(...) create Function objects and their name is \'anonymous\'.<br/>Variables and methods can infer the name of an anonymous function from its syntactic position (new in ECMAScript 2015).',
          'bo_propertyType': 'property'
        }
      }
    }
  };
}
