var mime_samples = [
  { 'mime': 'application/javascript', 'samples': [
    { 'url': 'https://rezijiser.herokuapp.com/', 'dir': '_m0/0', 'linked': 2, 'len': 92 },
    { 'url': 'https://rezijiser.herokuapp.com/web/sfi9876', 'dir': '_m0/1', 'linked': 2, 'len': 100 },
    { 'url': 'https://rezijiser.herokuapp.com/web/main.78ec11b84d6d2795.js/', 'dir': '_m0/2', 'linked': 2, 'len': 400000 },
    { 'url': 'https://rezijiser.herokuapp.com/web/polyfills.87df756f58462f56.js/', 'dir': '_m0/3', 'linked': 2, 'len': 41221 },
    { 'url': 'https://rezijiser.herokuapp.com/web/runtime.69a02324bc8880e7.js/', 'dir': '_m0/4', 'linked': 2, 'len': 5496 } ]
  },
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'https://rezijiser.herokuapp.com/web/', 'dir': '_m1/0', 'linked': 2, 'len': 2292 } ]
  },
  { 'mime': 'image/x-ms-bmp', 'samples': [
    { 'url': 'https://rezijiser.herokuapp.com/web/assets/icons/favicon.ico/', 'dir': '_m2/0', 'linked': 2, 'len': 3902 } ]
  },
  { 'mime': 'text/css', 'samples': [
    { 'url': 'https://rezijiser.herokuapp.com/web/styles.6d5325a4741fdffe.css/', 'dir': '_m3/0', 'linked': 2, 'len': 281281 } ]
  }
];

var issue_samples = [
  { 'severity': 1, 'type': 20101, 'samples': [
    { 'url': 'https://rezijiser.herokuapp.com/', 'extra': 'XSS injection', 'sid': '0', 'dir': '_i0/0' },
    { 'url': 'https://rezijiser.herokuapp.com/web/', 'extra': 'XSS injection', 'sid': '0', 'dir': '_i0/1' },
    { 'url': 'https://rezijiser.herokuapp.com/web/assets/icons/', 'extra': 'XSS injection', 'sid': '0', 'dir': '_i0/2' },
    { 'url': 'https://rezijiser.herokuapp.com/web/assets/icons/favicon.ico/', 'extra': 'XSS injection', 'sid': '0', 'dir': '_i0/3' },
    { 'url': 'https://rezijiser.herokuapp.com/web/main.78ec11b84d6d2795.js/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i0/4' },
    { 'url': 'https://rezijiser.herokuapp.com/web/main.78ec11b84d6d2795.js/i', 'extra': 'XSS injection', 'sid': '0', 'dir': '_i0/5' },
    { 'url': 'https://rezijiser.herokuapp.com/web/main.78ec11b84d6d2795.js/i?t.residualClasses:t.residualStyles;null!=a', 'extra': 'XSS injection', 'sid': '0', 'dir': '_i0/6' },
    { 'url': 'https://rezijiser.herokuapp.com/web/main.78ec11b84d6d2795.js/i?t.residualClasses:t.residualStyles;null!=a', 'extra': 'XSS injection', 'sid': '0', 'dir': '_i0/7' },
    { 'url': 'https://rezijiser.herokuapp.com/web/main.78ec11b84d6d2795.js/r', 'extra': 'XSS injection', 'sid': '0', 'dir': '_i0/8' },
    { 'url': 'https://rezijiser.herokuapp.com/web/main.78ec11b84d6d2795.js/r?t%20=r', 'extra': 'XSS injection', 'sid': '0', 'dir': '_i0/9' },
    { 'url': 'https://rezijiser.herokuapp.com/web/polyfills.87df756f58462f56.js/', 'extra': 'XSS injection', 'sid': '0', 'dir': '_i0/10' },
    { 'url': 'https://rezijiser.herokuapp.com/web/runtime.69a02324bc8880e7.js/', 'extra': 'XSS injection', 'sid': '0', 'dir': '_i0/11' },
    { 'url': 'https://rezijiser.herokuapp.com/web/styles.6d5325a4741fdffe.css/', 'extra': 'XSS injection', 'sid': '0', 'dir': '_i0/12' },
    { 'url': 'https://rezijiser.herokuapp.com/web/', 'extra': 'XSS injection', 'sid': '0', 'dir': '_i0/13' },
    { 'url': 'https://rezijiser.herokuapp.com/web/assets/', 'extra': 'XSS injection', 'sid': '0', 'dir': '_i0/14' },
    { 'url': 'https://rezijiser.herokuapp.com/web/assets/icons/', 'extra': 'XSS injection', 'sid': '0', 'dir': '_i0/15' },
    { 'url': 'https://rezijiser.herokuapp.com/web/main.78ec11b84d6d2795.js/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i0/16' } ]
  },
  { 'severity': 0, 'type': 10901, 'samples': [
    { 'url': 'https://rezijiser.herokuapp.com/web/main.78ec11b84d6d2795.js/', 'extra': '', 'sid': '0', 'dir': '_i1/0' },
    { 'url': 'https://rezijiser.herokuapp.com/web/polyfills.87df756f58462f56.js/', 'extra': '', 'sid': '0', 'dir': '_i1/1' },
    { 'url': 'https://rezijiser.herokuapp.com/web/runtime.69a02324bc8880e7.js/', 'extra': '', 'sid': '0', 'dir': '_i1/2' },
    { 'url': 'https://rezijiser.herokuapp.com/web/styles.6d5325a4741fdffe.css/', 'extra': '', 'sid': '0', 'dir': '_i1/3' },
    { 'url': 'https://rezijiser.herokuapp.com/web/main.78ec11b84d6d2795.js/', 'extra': '', 'sid': '0', 'dir': '_i1/4' } ]
  },
  { 'severity': 0, 'type': 10803, 'samples': [
    { 'url': 'https://rezijiser.herokuapp.com/', 'extra': '', 'sid': '0', 'dir': '_i2/0' },
    { 'url': 'https://rezijiser.herokuapp.com/web/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i2/1' },
    { 'url': 'https://rezijiser.herokuapp.com/web/assets/', 'extra': '', 'sid': '0', 'dir': '_i2/2' },
    { 'url': 'https://rezijiser.herokuapp.com/web/assets/icons/', 'extra': '', 'sid': '0', 'dir': '_i2/3' },
    { 'url': 'https://rezijiser.herokuapp.com/web/assets/icons/favicon.ico/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i2/4' },
    { 'url': 'https://rezijiser.herokuapp.com/web/main.78ec11b84d6d2795.js/', 'extra': '', 'sid': '0', 'dir': '_i2/5' },
    { 'url': 'https://rezijiser.herokuapp.com/web/main.78ec11b84d6d2795.js/i', 'extra': '', 'sid': '0', 'dir': '_i2/6' },
    { 'url': 'https://rezijiser.herokuapp.com/web/main.78ec11b84d6d2795.js/i?t.residualClasses:t.residualStyles;null!=a', 'extra': '', 'sid': '0', 'dir': '_i2/7' },
    { 'url': 'https://rezijiser.herokuapp.com/web/main.78ec11b84d6d2795.js/i?t.residualClasses:t.residualStyles;null!=a', 'extra': '', 'sid': '0', 'dir': '_i2/8' },
    { 'url': 'https://rezijiser.herokuapp.com/web/main.78ec11b84d6d2795.js/r', 'extra': '', 'sid': '0', 'dir': '_i2/9' },
    { 'url': 'https://rezijiser.herokuapp.com/web/main.78ec11b84d6d2795.js/r?t%20=r', 'extra': '', 'sid': '0', 'dir': '_i2/10' },
    { 'url': 'https://rezijiser.herokuapp.com/web/polyfills.87df756f58462f56.js/', 'extra': '', 'sid': '0', 'dir': '_i2/11' },
    { 'url': 'https://rezijiser.herokuapp.com/web/runtime.69a02324bc8880e7.js/', 'extra': '', 'sid': '0', 'dir': '_i2/12' },
    { 'url': 'https://rezijiser.herokuapp.com/web/styles.6d5325a4741fdffe.css/', 'extra': '', 'sid': '0', 'dir': '_i2/13' },
    { 'url': 'https://rezijiser.herokuapp.com/web/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i2/14' },
    { 'url': 'https://rezijiser.herokuapp.com/web/assets/', 'extra': '', 'sid': '0', 'dir': '_i2/15' },
    { 'url': 'https://rezijiser.herokuapp.com/web/assets/icons/', 'extra': '', 'sid': '0', 'dir': '_i2/16' },
    { 'url': 'https://rezijiser.herokuapp.com/web/main.78ec11b84d6d2795.js/', 'extra': '', 'sid': '0', 'dir': '_i2/17' } ]
  },
  { 'severity': 0, 'type': 10403, 'samples': [
    { 'url': 'https://rezijiser.herokuapp.com/web/./', 'extra': '', 'sid': '0', 'dir': '_i3/0' },
    { 'url': 'https://rezijiser.herokuapp.com/web/assets/./', 'extra': '', 'sid': '0', 'dir': '_i3/1' },
    { 'url': 'https://rezijiser.herokuapp.com/web/assets/icons/./', 'extra': '', 'sid': '0', 'dir': '_i3/2' },
    { 'url': 'https://rezijiser.herokuapp.com/web/assets/icons/favicon.ico/./', 'extra': '', 'sid': '0', 'dir': '_i3/3' },
    { 'url': 'https://rezijiser.herokuapp.com/web/polyfills.87df756f58462f56.js/./', 'extra': '', 'sid': '0', 'dir': '_i3/4' },
    { 'url': 'https://rezijiser.herokuapp.com/web/runtime.69a02324bc8880e7.js/./', 'extra': '', 'sid': '0', 'dir': '_i3/5' },
    { 'url': 'https://rezijiser.herokuapp.com/web/styles.6d5325a4741fdffe.css/./', 'extra': '', 'sid': '0', 'dir': '_i3/6' },
    { 'url': 'https://rezijiser.herokuapp.com/web/./', 'extra': '', 'sid': '0', 'dir': '_i3/7' },
    { 'url': 'https://rezijiser.herokuapp.com/web/assets/./', 'extra': '', 'sid': '0', 'dir': '_i3/8' },
    { 'url': 'https://rezijiser.herokuapp.com/web/assets/icons/./', 'extra': '', 'sid': '0', 'dir': '_i3/9' } ]
  },
  { 'severity': 0, 'type': 10402, 'samples': [
    { 'url': 'https://rezijiser.herokuapp.com/', 'extra': '', 'sid': '0', 'dir': '_i4/0' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'https://rezijiser.herokuapp.com/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i5/0' },
    { 'url': 'https://rezijiser.herokuapp.com/web/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i5/1' },
    { 'url': 'https://rezijiser.herokuapp.com/web/assets/icons/favicon.ico/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i5/2' },
    { 'url': 'https://rezijiser.herokuapp.com/web/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i5/3' } ]
  },
  { 'severity': 0, 'type': 10204, 'samples': [
    { 'url': 'https://rezijiser.herokuapp.com/', 'extra': 'X-Content-Type-Options', 'sid': '0', 'dir': '_i6/0' },
    { 'url': 'https://rezijiser.herokuapp.com/', 'extra': 'X-Xss-Protection', 'sid': '0', 'dir': '_i6/1' },
    { 'url': 'https://rezijiser.herokuapp.com/', 'extra': 'X-Frame-Options', 'sid': '0', 'dir': '_i6/2' } ]
  },
  { 'severity': 0, 'type': 10203, 'samples': [
    { 'url': 'https://rezijiser.herokuapp.com/', 'extra': '1.1 vegur', 'sid': '0', 'dir': '_i7/0' },
    { 'url': 'https://rezijiser.herokuapp.com/web/', 'extra': '1.1 vegur', 'sid': '0', 'dir': '_i7/1' },
    { 'url': 'https://rezijiser.herokuapp.com/web/assets/icons/favicon.ico/', 'extra': '1.1 vegur', 'sid': '0', 'dir': '_i7/2' },
    { 'url': 'https://rezijiser.herokuapp.com/web/main.78ec11b84d6d2795.js/', 'extra': '1.1 vegur', 'sid': '0', 'dir': '_i7/3' },
    { 'url': 'https://rezijiser.herokuapp.com/web/polyfills.87df756f58462f56.js/', 'extra': '1.1 vegur', 'sid': '0', 'dir': '_i7/4' },
    { 'url': 'https://rezijiser.herokuapp.com/web/runtime.69a02324bc8880e7.js/', 'extra': '1.1 vegur', 'sid': '0', 'dir': '_i7/5' },
    { 'url': 'https://rezijiser.herokuapp.com/web/styles.6d5325a4741fdffe.css/', 'extra': '1.1 vegur', 'sid': '0', 'dir': '_i7/6' },
    { 'url': 'https://rezijiser.herokuapp.com/web/', 'extra': '1.1 vegur', 'sid': '0', 'dir': '_i7/7' },
    { 'url': 'https://rezijiser.herokuapp.com/web/main.78ec11b84d6d2795.js/', 'extra': '1.1 vegur', 'sid': '0', 'dir': '_i7/8' } ]
  },
  { 'severity': 0, 'type': 10202, 'samples': [
    { 'url': 'https://rezijiser.herokuapp.com/', 'extra': 'Cowboy', 'sid': '0', 'dir': '_i8/0' } ]
  },
  { 'severity': 0, 'type': 10101, 'samples': [
    { 'url': 'https://rezijiser.herokuapp.com/', 'extra': '/C=US/O=Amazon/OU=Server CA 1B/CN=Amazon', 'sid': '0', 'dir': '_i9/0' } ]
  }
];

