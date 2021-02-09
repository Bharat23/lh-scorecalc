var n,u,i,t,o={},f=[],e=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c(n,l){for(var u in l){ n[u]=l[u]; }return n}function s(n){var l=n.parentNode;l&&l.removeChild(n);}function a(n,l,u){var i,t,r,o=arguments,f={};for(r in l){ "key"==r?i=l[r]:"ref"==r?t=l[r]:f[r]=l[r]; }if(arguments.length>3){ for(u=[u],r=3;r<arguments.length;r++){ u.push(o[r]); } }if(null!=u&&(f.children=u),"function"==typeof n&&null!=n.defaultProps){ for(r in n.defaultProps){ void 0===f[r]&&(f[r]=n.defaultProps[r]); } }return v(n,f,i,t,null)}function v(l,u,i,t,r){var o={type:l,props:u,key:i,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++n.__v:r};return null!=n.vnode&&n.vnode(o),o}function h(){return {current:null}}function y(n){return n.children}function p(n,l){this.props=n,this.context=l;}function d(n,l){if(null==l){ return n.__?d(n.__,n.__.__k.indexOf(n)+1):null; }for(var u;l<n.__k.length;l++){ if(null!=(u=n.__k[l])&&null!=u.__e){ return u.__e; } }return "function"==typeof n.type?d(n):null}function _(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++){ if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break} }return _(n)}}function k(l){(!l.__d&&(l.__d=!0)&&u.push(l)&&!m.__r++||t!==n.debounceRendering)&&((t=n.debounceRendering)||i)(m);}function m(){for(var n;m.__r=u.length;){ n=u.sort(function(n,l){return n.__v.__b-l.__v.__b}),u=[],n.some(function(n){var l,u,i,t,r,o;n.__d&&(r=(t=(l=n).__v).__e,(o=l.__P)&&(u=[],(i=c({},t)).__v=t.__v+1,T(o,t,i,l.__n,void 0!==o.ownerSVGElement,null!=t.__h?[r]:null,u,null==r?d(t):r,t.__h),j(u,t),t.__e!=r&&_(t)));}); }}function b(n,l,u,i,t,r,e,c,s,a){var h,p,_,k,m,b,w,A=i&&i.__k||f,P=A.length;for(u.__k=[],h=0;h<l.length;h++){ if(null!=(k=u.__k[h]=null==(k=l[h])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k?v(null,k,null,null,k):Array.isArray(k)?v(y,{children:k},null,null,null):k.__b>0?v(k.type,k.props,k.key,null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(_=A[h])||_&&k.key==_.key&&k.type===_.type){ A[h]=void 0; }else { for(p=0;p<P;p++){if((_=A[p])&&k.key==_.key&&k.type===_.type){A[p]=void 0;break}_=null;} }T(n,k,_=_||o,t,r,e,c,s,a),m=k.__e,(p=k.ref)&&_.ref!=p&&(w||(w=[]),_.ref&&w.push(_.ref,null,k),w.push(p,k.__c||m,k)),null!=m?(null==b&&(b=m),"function"==typeof k.type&&null!=k.__k&&k.__k===_.__k?k.__d=s=g(k,s,n):s=x(n,k,_,A,m,s),a||"option"!==u.type?"function"==typeof u.type&&(u.__d=s):n.value=""):s&&_.__e==s&&s.parentNode!=n&&(s=d(_));} }for(u.__e=b,h=P;h--;){ null!=A[h]&&("function"==typeof u.type&&null!=A[h].__e&&A[h].__e==u.__d&&(u.__d=d(i,h+1)),L(A[h],A[h])); }if(w){ for(h=0;h<w.length;h++){ I(w[h],w[++h],w[++h]); } }}function g(n,l,u){var i,t;for(i=0;i<n.__k.length;i++){ (t=n.__k[i])&&(t.__=n,l="function"==typeof t.type?g(t,l,u):x(u,t,t,n.__k,t.__e,l)); }return l}function x(n,l,u,i,t,r){var o,f,e;if(void 0!==l.__d){ o=l.__d,l.__d=void 0; }else if(null==u||t!=r||null==t.parentNode){ n:if(null==r||r.parentNode!==n){ n.appendChild(t),o=null; }else {for(f=r,e=0;(f=f.nextSibling)&&e<i.length;e+=2){ if(f==t){ break n; } }n.insertBefore(t,r),o=r;} }return void 0!==o?o:t.nextSibling}function A(n,l,u,i,t){var r;for(r in u){ "children"===r||"key"===r||r in l||C(n,r,null,u[r],i); }for(r in l){ t&&"function"!=typeof l[r]||"children"===r||"key"===r||"value"===r||"checked"===r||u[r]===l[r]||C(n,r,l[r],u[r],i); }}function P(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||e.test(l)?u:u+"px";}function C(n,l,u,i,t){var r;n:if("style"===l){ if("string"==typeof u){ n.style.cssText=u; }else {if("string"==typeof i&&(n.style.cssText=i=""),i){ for(l in i){ u&&l in u||P(n.style,l,""); } }if(u){ for(l in u){ i&&u[l]===i[l]||P(n.style,l,u[l]); } }} }else if("o"===l[0]&&"n"===l[1]){ r=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+r]=u,u?i||n.addEventListener(l,r?H:$,r):n.removeEventListener(l,r?H:$,r); }else if("dangerouslySetInnerHTML"!==l){if(t){ l=l.replace(/xlink[H:h]/,"h").replace(/sName$/,"s"); }else if("href"!==l&&"list"!==l&&"form"!==l&&"download"!==l&&l in n){ try{n[l]=null==u?"":u;break n}catch(n$1){} }"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l));}}function $(l){this.l[l.type+!1](n.event?n.event(l):l);}function H(l){this.l[l.type+!0](n.event?n.event(l):l);}function T(l,u,i,t,r,o,f,e,s){var a,v,h,d,_,k,m,g,w,x,A,P=u.type;if(void 0!==u.constructor){ return null; }null!=i.__h&&(s=i.__h,e=u.__e=i.__e,u.__h=null,o=[e]),(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(g=u.props,w=(a=P.contextType)&&t[a.__c],x=a?w?w.props.value:a.__:t,i.__c?m=(v=u.__c=i.__c).__=v.__E:("prototype"in P&&P.prototype.render?u.__c=v=new P(g,x):(u.__c=v=new p(g,x),v.constructor=P,v.render=M),w&&w.sub(v),v.props=g,v.state||(v.state={}),v.context=x,v.__n=t,h=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=P.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=c({},v.__s)),c(v.__s,P.getDerivedStateFromProps(g,v.__s))),d=v.props,_=v.state,h){ null==P.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&v.__h.push(v.componentDidMount); }else {if(null==P.getDerivedStateFromProps&&g!==d&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(g,x),!v.__e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(g,v.__s,x)||u.__v===i.__v){v.props=g,v.state=v.__s,u.__v!==i.__v&&(v.__d=!1),v.__v=u,u.__e=i.__e,u.__k=i.__k,v.__h.length&&f.push(v);break n}null!=v.componentWillUpdate&&v.componentWillUpdate(g,v.__s,x),null!=v.componentDidUpdate&&v.__h.push(function(){v.componentDidUpdate(d,_,k);});}v.context=x,v.props=g,v.state=v.__s,(a=n.__r)&&a(u),v.__d=!1,v.__v=u,v.__P=l,a=v.render(v.props,v.state,v.context),v.state=v.__s,null!=v.getChildContext&&(t=c(c({},t),v.getChildContext())),h||null==v.getSnapshotBeforeUpdate||(k=v.getSnapshotBeforeUpdate(d,_)),A=null!=a&&a.type===y&&null==a.key?a.props.children:a,b(l,Array.isArray(A)?A:[A],u,i,t,r,o,f,e,s),v.base=u.__e,u.__h=null,v.__h.length&&f.push(v),m&&(v.__E=v.__=null),v.__e=!1;}else { null==o&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=z(i.__e,u,i,t,r,o,f,s); }(a=n.diffed)&&a(u);}catch(l$1){u.__v=null,(s||null!=o)&&(u.__e=e,u.__h=!!s,o[o.indexOf(e)]=null),n.__e(l$1,u,i);}}function j(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u);});}catch(l$1){n.__e(l$1,u.__v);}});}function z(n,l,u,i,t,r,e,c){var a,v,h,y,p=u.props,d=l.props,_=l.type,k=0;if("svg"===_&&(t=!0),null!=r){ for(;k<r.length;k++){ if((a=r[k])&&(a===n||(_?a.localName==_:3==a.nodeType))){n=a,r[k]=null;break} } }if(null==n){if(null===_){ return document.createTextNode(d); }n=t?document.createElementNS("http://www.w3.org/2000/svg",_):document.createElement(_,d.is&&d),r=null,c=!1;}if(null===_){ p===d||c&&n.data===d||(n.data=d); }else {if(r=r&&f.slice.call(n.childNodes),v=(p=u.props||o).dangerouslySetInnerHTML,h=d.dangerouslySetInnerHTML,!c){if(null!=r){ for(p={},y=0;y<n.attributes.length;y++){ p[n.attributes[y].name]=n.attributes[y].value; } }(h||v)&&(h&&(v&&h.__html==v.__html||h.__html===n.innerHTML)||(n.innerHTML=h&&h.__html||""));}if(A(n,d,p,t,c),h){ l.__k=[]; }else if(k=l.props.children,b(n,Array.isArray(k)?k:[k],l,u,i,t&&"foreignObject"!==_,r,e,n.firstChild,c),null!=r){ for(k=r.length;k--;){ null!=r[k]&&s(r[k]); } }c||("value"in d&&void 0!==(k=d.value)&&(k!==n.value||"progress"===_&&!k)&&C(n,"value",k,p.value,!1),"checked"in d&&void 0!==(k=d.checked)&&k!==n.checked&&C(n,"checked",k,p.checked,!1));}return n}function I(l,u,i){try{"function"==typeof l?l(u):l.current=u;}catch(l$1){n.__e(l$1,i);}}function L(l,u,i){var t,r,o;if(n.unmount&&n.unmount(l),(t=l.ref)&&(t.current&&t.current!==l.__e||I(t,null,u)),i||"function"==typeof l.type||(i=null!=(r=l.__e)),l.__e=l.__d=void 0,null!=(t=l.__c)){if(t.componentWillUnmount){ try{t.componentWillUnmount();}catch(l$1){n.__e(l$1,u);} }t.base=t.__P=null;}if(t=l.__k){ for(o=0;o<t.length;o++){ t[o]&&L(t[o],u,i); } }null!=r&&s(r);}function M(n,l,u){return this.constructor(n,u)}function N(l,u,i){var t,r,e;n.__&&n.__(l,u),r=(t="function"==typeof i)?null:i&&i.__k||u.__k,e=[],T(u,l=(!t&&i||u).__k=a(y,null,[l]),r||o,o,void 0!==u.ownerSVGElement,!t&&i?[i]:r?null:u.firstChild?f.slice.call(u.childNodes):null,e,!t&&i?i:r?r.__e:u.firstChild,t),j(e,l);}n={__e:function(n,l){for(var u,i,t;l=l.__;){ if((u=l.__c)&&!u.__){ try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t){ return u.__E=u }}catch(l$1){n=l$1;} } }throw n},__v:0},p.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof n&&(n=n(c({},u),this.props)),n&&c(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),k(this));},p.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),k(this));},p.prototype.render=y,u=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,m.__r=0,0;

/**
 * Approximates the Gauss error function, the probability that a random variable
 * from the standard normal distribution lies within [-x, x]. Moved from
 * traceviewer.b.math.erf, based on Abramowitz and Stegun, formula 7.1.26.
 * @param {number} x
 * @return {number}
 */
function internalErf_(x) {
  // erf(-x) = -erf(x);
  var sign = x < 0 ? -1 : 1;
  x = Math.abs(x);

  var a1 = 0.254829592;
  var a2 = -0.284496736;
  var a3 = 1.421413741;
  var a4 = -1.453152027;
  var a5 = 1.061405429;
  var p = 0.3275911;
  var t = 1 / (1 + p * x);
  var y = t * (a1 + t * (a2 + t * (a3 + t * (a4 + t * a5))));
  return sign * (1 - y * Math.exp(-x * x));
}

/**
 * Creates a log-normal distribution and finds the complementary
 * quantile (1-percentile) of that distribution at value. All
 * arguments should be in the same units (e.g. milliseconds).
 *
 * @param {{median: number, podr?: number, p10?: number}} curve
 * @param {number} value
 * @return The complement of the quantile at value.
 * @customfunction
 */
function QUANTILE_AT_VALUE(ref, value) {
  var median = ref.median;
  var podr = ref.podr;
  var p10 = ref.p10;

  if (!podr) {
    podr = derivePodrFromP10(median, p10);
  }

  var location = Math.log(median);

  // The "podr" value specified the location of the smaller of the positive
  // roots of the third derivative of the log-normal CDF. Calculate the shape
  // parameter in terms of that value and the median.
  // See https://www.desmos.com/calculator/2t1ugwykrl
  var logRatio = Math.log(podr / median);
  var shape = Math.sqrt(1 - 3 * logRatio - Math.sqrt((logRatio - 3) * (logRatio - 3) - 8)) / 2;

  var standardizedX = (Math.log(value) - location) / (Math.SQRT2 * shape);
  return (1 - internalErf_(standardizedX)) / 2;
}

/**
 * Approximates the inverse error function. Based on Winitzki, "A handy
 * approximation for the error function and its inverse"
 * @param {number} x
 * @return {number}
 */
function internalErfInv_(x) {
  // erfinv(-x) = -erfinv(x);
  var sign = x < 0 ? -1 : 1;
  var a = 0.147;

  var log1x = Math.log(1 - x*x);
  var p1 = 2 / (Math.PI * a) + log1x / 2;
  var sqrtP1Log = Math.sqrt(p1 * p1 - (log1x / a));
  return sign * Math.sqrt(sqrtP1Log - p1);
}

/**
 * Calculates the value at the given quantile. Median, podr, and
 * expected value should all be in the same units (e.g. milliseconds).
 * quantile should be within [0,1].
 *
 * @param {{median: number, podr?: number, p10?: number}} curve
 * @return The value at this quantile.
 * @customfunction
 */
function VALUE_AT_QUANTILE(ref, quantile) {
  var median = ref.median;
  var podr = ref.podr;
  var p10 = ref.p10;

  if (!podr) {
    podr = derivePodrFromP10(median, p10);
  }

  var location = Math.log(median);
  var logRatio = Math.log(podr / median);
  var shape = Math.sqrt(1 - 3 * logRatio - Math.sqrt((logRatio - 3) * (logRatio - 3) - 8)) / 2;

  return Math.exp(location + shape * Math.SQRT2 * internalErfInv_(1 - 2 * quantile));
}

// https://www.desmos.com/calculator/oqlvmezbze
function derivePodrFromP10(median, p10) {
  var u = Math.log(median);
  var shape = Math.abs(Math.log(p10) - u) / (Math.SQRT2 * 0.9061938024368232);
  var inner1 = -3 * shape - Math.sqrt(4 + shape * shape);
  var podr = Math.exp(u + shape/2 * inner1);
  return podr;
}

// blingjs
var $$1 = document.querySelector.bind(document);
document.querySelectorAll.bind(document);

Element.prototype.$ = Element.prototype.querySelector;
Element.prototype.$$ = Element.prototype.querySelectorAll;

var NBSP = '\xa0';
var numberFormatter = new Intl.NumberFormat();

// thx Lighthouse's util.js
function arithmeticMean(items) {
  items = items.filter(function (item) { return item.weight > 0; });
  var results = items.reduce(
    function (result, item) {
      var score = item.result.score;
      var weight = item.weight;
      return {
        weight: result.weight + weight,
        sum: result.sum + score * weight,
      };
    },
    {weight: 0, sum: 0}
  );
  return results.sum / results.weight || 0;
}

function calculateRating(score) {
	var RATINGS = {
		PASS: {label: 'pass', minScore: 0.9},
		AVERAGE: {label: 'average', minScore: 0.5},
		FAIL: {label: 'fail'},
	};

  var rating = RATINGS.FAIL.label;
  if (score >= RATINGS.PASS.minScore) {
    rating = RATINGS.PASS.label;
  } else if (score >= RATINGS.AVERAGE.minScore) {
    rating = RATINGS.AVERAGE.label;
  }
  return rating;
}

var metrics = {
  FCP: {auditId: 'first-contentful-paint', name: 'First Contentful Paint'},
  SI: {auditId: 'speed-index', name: 'Speed Index'},
  LCP: {auditId: 'largest-contentful-paint', name: 'Largest Contentful Paint'},
  TTI: {auditId: 'interactive', name: 'Time to Interactive'},
  TBT: {auditId: 'total-blocking-time', name: 'Total Blocking Time'},
  CLS: {auditId: 'cumulative-layout-shift', name: 'Cumulative Layout Shift', units: 'unitless'},
  FMP: {auditId: 'first-meaningful-paint', name: 'First Meaningful Paint'},
  FCI: {auditId: 'first-cpu-idle', name: 'First CPU Idle'},
};

var curves = {
  v8: {
    mobile: {
      FCP: {weight: 0.15, median: 2350, p10: 1386.5},
      SI: {weight: 0.15, median: 3200, p10: 1856},
      LCP: {weight: 0.25, median: 2800, p10: 1568},
      TTI: {weight: 0.15, median: 5350, p10: 2934.177778},
      TBT: {weight: 0.25, median: 500, p10: 225},
      CLS: {weight: 0.05, median: 0.25, p10: 0.1},
    },
    desktop: {
      FCP: {weight: 0.15, median: 1600, p10: 934},
      SI: {weight: 0.15, median: 2300, p10: 1311},
      LCP: {weight: 0.25, median: 2400, p10: 1200},
      TTI: {weight: 0.15, median: 4500, p10: 2468},
      TBT: {weight: 0.25, median: 350, p10: 150},
      CLS: {weight: 0.05, median: 0.25, p10: 0.1},
    },
  },
  v6: {
    mobile: {
      FCP: {weight: 0.15, median: 4000, p10: 2336},
      SI: {weight: 0.15, median: 5800, p10: 3387},
      LCP: {weight: 0.25, median: 4000, p10: 2500},
      TTI: {weight: 0.15, median: 7300, p10: 3785},
      TBT: {weight: 0.25, median: 600, p10: 287},
      CLS: {weight: 0.05, median: 0.25, p10: 0.1},
    },
    desktop: {
      FCP: {weight: 0.15, median: 1600, p10: 934},
      SI: {weight: 0.15, median: 2300, p10: 1311},
      LCP: {weight: 0.25, median: 2400, p10: 1200},
      TTI: {weight: 0.15, median: 4500, p10: 2468},
      TBT: {weight: 0.25, median: 350, p10: 150},
      CLS: {weight: 0.05, median: 0.25, p10: 0.1},
    },
  },
  v5: {
    FCP: {weight: 0.2, median: 4000, podr: 2000},
    SI: {weight: 0.26666, median: 5800, podr: 2900},
    FMP: {weight: 0.066666, median: 4000, podr: 2000},
    TTI: {weight: 0.33333, median: 7300, podr: 2900},
    FCI: {weight: 0.133333, median: 6500, podr: 2900},
  },
};

/**
 * @param {Record<string, {weight: number, median: number, podr: number}>} curves
 */
function makeScoringGuide(curves) {
  var scoringGuide = {};
  for (var [key, curve] of Object.entries(curves)) {
    scoringGuide[key] = Object.assign({}, metrics[key], curve);
  }
  return scoringGuide;
}

var scoringGuides = {
  // v7 scoring is identical to v6
  v8: {
    mobile: makeScoringGuide(curves.v8.mobile),
    desktop: makeScoringGuide(curves.v6.desktop),
  },
  v7: {
    mobile: makeScoringGuide(curves.v6.mobile),
    desktop: makeScoringGuide(curves.v6.desktop),
  },
  v6: {
    mobile: makeScoringGuide(curves.v6.mobile),
    desktop: makeScoringGuide(curves.v6.desktop),
  },
  v5: {
    mobile: makeScoringGuide(curves.v5),
    desktop: makeScoringGuide(curves.v5),
  },
};

function updateGauge(wrapper, category) {
  _setPerfGaugeExplodey(wrapper, category);
}

function _determineTrig(sizeSVG, percent, strokeWidth) {
  strokeWidth = strokeWidth || sizeSVG / 32;

  var radiusInner = sizeSVG / strokeWidth;
  var strokeGap = 0.5 * strokeWidth;
  var radiusOuter = radiusInner + strokeGap + strokeWidth;

  var circumferenceInner = 2 * Math.PI * radiusInner;
  // arc length we need to subtract
  // for very small strokeWidth:radius ratios this is ≈ strokeWidth
  // angle = acute angle of isosceles △ with 2 edges equal to radius & 3rd equal to strokeWidth
  // angle formula given by law of cosines
  var endDiffInner = Math.acos(1 - 0.5 * Math.pow((0.5 * strokeWidth) / radiusInner, 2)) * radiusInner;

  var circumferenceOuter = 2 * Math.PI * radiusOuter;
  var endDiffOuter = Math.acos(1 - 0.5 * Math.pow((0.5 * strokeWidth) / radiusOuter, 2)) * radiusOuter;

  return {
    radiusInner: radiusInner,
    radiusOuter: radiusOuter,
    circumferenceInner: circumferenceInner,
    circumferenceOuter: circumferenceOuter,
    getArcLength: function (_) { return Math.max(0, +(percent * circumferenceInner - 2 * endDiffInner).toFixed(4)); },
    // isButt case is for metricArcHoverTarget
    getMetricArcLength: function (weightingPct, isButt) {
      // TODO: this math isn't perfect butt it's very close.
      var linecapFactor = isButt ? 0 : 2 * endDiffOuter;
      return Math.max(0, +(weightingPct * circumferenceOuter - strokeGap - linecapFactor).toFixed(4));
    },
    endDiffInner: endDiffInner,
    endDiffOuter: endDiffOuter,
    strokeWidth: strokeWidth,
    strokeGap: strokeGap,
  };
}

/**
 * @param {HTMLAnchorElement} wrapper
 * @param {LH.ReportResult.Category} category
 */
function _setPerfGaugeExplodey(wrapper, category) {
  var sizeSVG = 128;
  var offsetSVG = -0.5 * sizeSVG;

  var percent = Number(category.score);
  var ref = _determineTrig(sizeSVG, percent);
  var radiusInner = ref.radiusInner;
  var radiusOuter = ref.radiusOuter;
  var circumferenceInner = ref.circumferenceInner;
  var circumferenceOuter = ref.circumferenceOuter;
  var getArcLength = ref.getArcLength;
  var getMetricArcLength = ref.getMetricArcLength;
  var endDiffInner = ref.endDiffInner;
  var endDiffOuter = ref.endDiffOuter;
  var strokeWidth = ref.strokeWidth;
  var strokeGap = ref.strokeGap;

  var SVG = wrapper.querySelector('.lh-gauge');
  var NS_URI = 'http://www.w3.org/2000/svg';

  SVG.setAttribute('viewBox', [offsetSVG, offsetSVG, sizeSVG, sizeSVG].join(' '));
  SVG.style.setProperty('--stroke-width', (strokeWidth + "px"));
  SVG.style.setProperty('--circle-meas', 2 * Math.PI.toFixed(4));

  var groupOuter = wrapper.querySelector('.lh-gauge__outer');
  var groupInner = wrapper.querySelector('.lh-gauge__inner');
  var cover = groupOuter.querySelector('.cover');
  var gaugeArc = groupInner.querySelector('.lh-gauge__arc');
  var gaugePerc = groupInner.querySelector('.lh-gauge__percentage');

  groupOuter.style.setProperty('--scale-initial', radiusInner / radiusOuter);
  groupOuter.style.setProperty('--radius', (radiusOuter + "px"));
  cover.style.setProperty('--radius', ((0.5 * (radiusInner + radiusOuter)) + "px"));
  cover.setAttribute('stroke-width', strokeGap);
  SVG.style.setProperty('--radius', (radiusInner + "px"));

  gaugeArc.setAttribute('stroke-dasharray', ((getArcLength()) + " " + ((circumferenceInner - getArcLength()).toFixed(4))));
  gaugeArc.setAttribute('stroke-dashoffset', 0.25 * circumferenceInner - endDiffInner);

  gaugePerc.textContent = Math.round(percent * 100);

  var radiusTextOuter = radiusOuter + strokeWidth;
  var radiusTextInner = radiusOuter - strokeWidth;

  var metrics = category.auditRefs.filter(function (r) { return r.group === 'metrics' && r.weight; });
  var totalWeight = metrics.reduce(function (sum, each) { return (sum += each.weight); }, 0);
  var offsetAdder = 0.25 * circumferenceOuter - endDiffOuter - 0.5 * strokeGap;
  var angleAdder = -0.5 * Math.PI;

  // Extra hack on top of the HACK for element reuse below. Delete any metric elems that aren't needed anymore (happens when the same gauge goes from v5 to v6)
  groupOuter.querySelectorAll('.metric').forEach(function (metricElem) {
    var classNamesToRetain = metrics.map(function (metric) { return ("metric--" + (metric.id)); });
    var match = classNamesToRetain.find(function (selector) { return metricElem.classList.contains(selector); });
    if (!match) { metricElem.remove(); }
  });

  metrics.forEach(function (metric, i) {
    // TODO(porting to real LHR..): in scorecalc we dont use the real audit ID just the acronym.
    var alias = metric.id;

    // Hack
    var needsDomPopulation = !groupOuter.querySelector((".metric--" + alias));

    // HACK:This isn't ideal but it was quick. Create element during initialization or reuse existing during updates
    var metricGroup = groupOuter.querySelector((".metric--" + alias)) || document.createElementNS(NS_URI, 'g');
    var metricArcMax = groupOuter.querySelector((".metric--" + alias + " .lh-gauge--faded")) || document.createElementNS(NS_URI, 'circle');
    var metricArc = groupOuter.querySelector((".metric--" + alias + " .lh-gauge--miniarc")) || document.createElementNS(NS_URI, 'circle');
    var metricArcHoverTarget = groupOuter.querySelector((".metric--" + alias + " .lh-gauge-hover")) || document.createElementNS(NS_URI, 'circle');
    var metricLabel = groupOuter.querySelector((".metric--" + alias + " .metric__label")) || document.createElementNS(NS_URI, 'text');
    var metricValue = groupOuter.querySelector((".metric--" + alias + " .metric__value")) || document.createElementNS(NS_URI, 'text');

    metricGroup.classList.add('metric', ("metric--" + alias));
    metricArcMax.classList.add('lh-gauge__arc', 'lh-gauge__arc--metric', 'lh-gauge--faded');
    metricArc.classList.add('lh-gauge__arc', 'lh-gauge__arc--metric', 'lh-gauge--miniarc');
    metricArcHoverTarget.classList.add('lh-gauge__arc', 'lh-gauge__arc--metric', 'lh-gauge--faded', 'lh-gauge-hover');

    var weightingPct = metric.weight / totalWeight;
    var metricLengthMax = getMetricArcLength(weightingPct);
    var metricPercent = metric.result.score * weightingPct;
    var metricLength = getMetricArcLength(metricPercent);
    var metricOffset = weightingPct * circumferenceOuter;
    var metricHoverLength = getMetricArcLength(weightingPct, true);

    metricGroup.style.setProperty('--metric-color', ("var(--palette-" + i + ")"));
    metricGroup.style.setProperty('--metric-offset', ("" + offsetAdder));
    metricGroup.style.setProperty('--i', i);

    metricArcMax.setAttribute('stroke-dasharray', (metricLengthMax + " " + (circumferenceOuter - metricLengthMax)));
    metricArc.style.setProperty('--metric-array', (metricLength + " " + (circumferenceOuter - metricLength)));
    metricArcHoverTarget.setAttribute('stroke-dasharray', (metricHoverLength + " " + (circumferenceOuter - metricHoverLength - endDiffOuter)));

    metricLabel.classList.add('metric__label');
    metricValue.classList.add('metric__value');
    metricLabel.textContent = alias;
    metricValue.textContent = "+" + (Math.round(metricPercent * 100));

    var midAngle = angleAdder + weightingPct * Math.PI;
    var cos = Math.cos(midAngle);
    var sin = Math.sin(midAngle);

    // only set non-default alignments
    switch (true) {
      case cos > 0:
        metricValue.setAttribute('text-anchor', 'end');
        break;
      case cos < 0:
        metricLabel.setAttribute('text-anchor', 'end');
        break;
      case cos === 0:
        metricLabel.setAttribute('text-anchor', 'middle');
        metricValue.setAttribute('text-anchor', 'middle');
        break;
    }

    switch (true) {
      case sin > 0:
        metricLabel.setAttribute('dominant-baseline', 'hanging');
        break;
      case sin < 0:
        metricValue.setAttribute('dominant-baseline', 'hanging');
        break;
      case sin === 0:
        metricLabel.setAttribute('dominant-baseline', 'middle');
        metricValue.setAttribute('dominant-baseline', 'middle');
        break;
    }

    metricLabel.setAttribute('x', (radiusTextOuter * cos).toFixed(2));
    metricLabel.setAttribute('y', (radiusTextOuter * sin).toFixed(2));
    metricValue.setAttribute('x', (radiusTextInner * cos).toFixed(2));
    metricValue.setAttribute('y', (radiusTextInner * sin).toFixed(2));

    if (needsDomPopulation) {
      metricGroup.appendChild(metricArcMax);
      metricGroup.appendChild(metricArc);
      metricGroup.appendChild(metricArcHoverTarget);
      metricGroup.appendChild(metricLabel);
      metricGroup.appendChild(metricValue);
      groupOuter.appendChild(metricGroup);
    }

    offsetAdder -= metricOffset;
    angleAdder += weightingPct * 2 * Math.PI;
  });

  // Hack. Not ideal.
  if (SVG.dataset.listenersSetup) { return; }
  SVG.dataset.listenersSetup = true;

  // peekGauge(SVG);

  /*
    wrapper.state-expanded: gauge is exploded
    wrapper.state-highlight: gauge is exploded and one of the metrics is being highlighted
    metric.metric-highlight: highlight this particular metric
  */
  SVG.addEventListener('mouseover', function (e) {
    // if hovering on the SVG and its expanded, get rid of everything
    if (e.target === SVG && wrapper.classList.contains('state--expanded')) {
      // paul: not sure why we want to remove this.. seems like we want to keep it expanded...
      SVG.classList.remove('state--expanded');

      if (SVG.classList.contains('state--highlight')) {
        SVG.classList.remove('state--highlight');
        SVG.querySelector('.metric--highlight').classList.remove('metric--highlight');
      }
      return;
    }

    var parent = e.target.parentNode;

    // if hovering on a metric, highlight that one.
    // TODO: The hover target is a little small. ideally it's thicker.
    if (parent && parent.classList && parent.classList.contains('metric')) {
      // match the bg color of the gauge during a metric highlight
      wrapper.style.setProperty('--color-highlight', ("var(--palette-" + (parent.style.getPropertyValue('--i')) + ")"));

      if (!SVG.classList.contains('state--highlight')) {
        SVG.classList.add('state--highlight');
        parent.classList.add('metric--highlight');
      } else {
        var highlighted = SVG.querySelector('.metric--highlight');

        if (highlighted && parent !== highlighted) {
          highlighted.classList.remove('metric--highlight');
          parent.classList.add('metric--highlight');
        }
      }
    }
  });

  // clear on mouselave even if mousemove didn't catch it.
  SVG.addEventListener('mouseleave', function (e) {
    SVG.classList.remove('state--highlight');
    var mh = SVG.querySelector('.metric--highlight');
    mh && mh.classList.remove('metric--highlight');
  });
}

var params = new URLSearchParams(location.hash.substr(1));

function determineMinMax(metricScoring) {
  var valueAtScore100 = VALUE_AT_QUANTILE(metricScoring, 0.995);
  var valueAtScore5 = VALUE_AT_QUANTILE(metricScoring, 0.05);

  var min = Math.floor(valueAtScore100 / 1000) * 1000;
  var max = Math.ceil(valueAtScore5 / 1000) * 1000;
  var step = 10;

  // Special handling for CLS
  if (metricScoring.units === 'unitless') {
    min = 0;
    max = Math.ceil(valueAtScore5 * 100) / 100;
    step = 0.01;
  }

  return {
    min: min,
    max: max,
    step: step,
  };
}

/**
 * @param {string} version
 */
function getMajorVersion(version) {
  return version.split('.')[0];
}

var Metric = /*@__PURE__*/(function (Component) {
  function Metric () {
    Component.apply(this, arguments);
  }

  if ( Component ) Metric.__proto__ = Component;
  Metric.prototype = Object.create( Component && Component.prototype );
  Metric.prototype.constructor = Metric;

  Metric.prototype.onValueChange = function onValueChange (e) {
    var obj;

    var ref = this.props;
    var id = ref.id;

    this.props.app.setState({
      metricValues: Object.assign({}, this.props.app.state.metricValues,
        ( obj = {}, obj[id] = e.target.valueAsNumber, obj )),
    });
  };

  Metric.prototype.onScoreChange = function onScoreChange (e) {
    var obj;

    var ref = this.props;
    var id = ref.id;
    var metricScoring = ref.metricScoring;

    var score = e.target.valueAsNumber;
    var computedValue = VALUE_AT_QUANTILE(metricScoring, score / 100);

    // Clamp because we can end up with Infinity
    var ref$1 = determineMinMax(metricScoring);
    var min = ref$1.min;
    var max = ref$1.max;
    computedValue = Math.max(Math.min(computedValue, max), min);

    if (metricScoring.units !== 'unitless') {
      computedValue = Math.round(computedValue);
    }

    this.props.app.setState({
      metricValues: Object.assign({}, this.props.app.state.metricValues,
        ( obj = {}, obj[id] = computedValue, obj )),
    });
  };

  Metric.prototype.render = function render (ref) {
    var this$1 = this;
    var id = ref.id;
    var value = ref.value;
    var score = ref.score;
    var weightMax = ref.weightMax;
    var metricScoring = ref.metricScoring;

    var ref$1 = determineMinMax(metricScoring);
    var min = ref$1.min;
    var max = ref$1.max;
    var step = ref$1.step;
    var weight = metricScoring.weight;
    var valueFormatted = metricScoring.units === 'unitless' ?
      value.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) :
      // TODO: Use https://github.com/tc39/proposal-unified-intl-numberformat#i-units when Safari/FF support it
      ("" + (numberFormatter.format(value)) + NBSP + "ms");
    var weightFormatted = (weight * 100).toLocaleString(undefined, {maximumFractionDigits: 1});

    return a( 'tr', { class: ("lh-metric--" + (calculateRating(score / 100))) },
      a( 'td', null,
        a( 'span', { class: "lh-metric__score-icon" })
      ),
      a( 'td', null, (id + " (" + (metricScoring.name) + ")") ),
      a( 'td', null,
        a( 'input', { type: "range", min: min, value: value, max: max, step: step, class: (id + " metric-value"), onInput: function (e) { return this$1.onValueChange(e); } }),
        a( 'output', { class: "${id} value-output" }, valueFormatted)
      ),
      a( 'td', null ),

      a( 'td', null,
        a( 'input', { type: "range", class: (id + " metric-score"), style: ("width: " + (weight / weightMax * 100) + "%"), value: score, onInput: function (e) { return this$1.onScoreChange(e); } }),
        a( 'output', { class: (id + " score-output") }, score)
      ),

      a( 'td', null,
        a( 'span', { class: (id + " weight-text") }, weightFormatted, "%")
      )
    )
  };

  return Metric;
}(p));

var Gauge = /*@__PURE__*/(function (Component) {
  function Gauge(props) {
    Component.call(this, props);
    this.ref = h();
  }

  if ( Component ) Gauge.__proto__ = Component;
  Gauge.prototype = Object.create( Component && Component.prototype );
  Gauge.prototype.constructor = Gauge;

  Gauge.prototype.refreshGauge = function refreshGauge () {
    updateGauge(this.ref.current, {
      title: 'Performance',
      auditRefs: this.props.auditRefs,
      id: 'performance',
      score: this.props.score,
    });
  };

  Gauge.prototype.componentDidMount = function componentDidMount () {
    this.refreshGauge();
  };

  Gauge.prototype.componentDidUpdate = function componentDidUpdate () {
    this.refreshGauge();
  };

  Gauge.prototype.render = function render (ref) {
    var score = ref.score;

    return (
      a( 'div', { ref: this.ref, class: ("lh-gauge__wrapper lh-gauge__wrapper--" + (calculateRating(score))) },
        a( 'div', { class: 'lh-gauge__svg-wrapper' },
          a( 'svg', { class: 'lh-gauge state--expanded' },
            a( 'g', { class: 'lh-gauge__inner' },
              a( 'circle', { class: 'lh-gauge__bg' }),
              a( 'circle', { class: 'lh-gauge__base lh-gauge--faded' }),
              a( 'circle', { class: 'lh-gauge__arc' }),
              a( 'text', { class: 'lh-gauge__percentage' })
            ),
            a( 'g', { class: 'lh-gauge__outer' },
              a( 'circle', { class: 'cover' })
            )
          )
        )
      )
    );
  };

  return Gauge;
}(p));

var ScoringGuide = /*@__PURE__*/(function (Component) {
  function ScoringGuide () {
    Component.apply(this, arguments);
  }

  if ( Component ) ScoringGuide.__proto__ = Component;
  ScoringGuide.prototype = Object.create( Component && Component.prototype );
  ScoringGuide.prototype.constructor = ScoringGuide;

  ScoringGuide.prototype.render = function render (ref) {
    var app = ref.app;
    var name = ref.name;
    var values = ref.values;
    var scoring = ref.scoring;

    // Make sure weights total to 1
    var weights = Object.values(scoring).map(function (metricScoring) { return metricScoring.weight; });
    var weightSum = weights.reduce(function (agg, val) { return (agg += val); });
    var weightMax = Math.max.apply(Math, Object.values(weights));
    console.assert(weightSum > 0.999 && weightSum < 1.0001); // lol rounding is hard.

    var metricsData = Object.keys(scoring).map(function (id) {
      var metricScoring = scoring[id];
      return {
        id: id,
        metricScoring: metricScoring,
        value: values[id],
        score: Math.round(QUANTILE_AT_VALUE(metricScoring, values[id]) * 100),
      };
    });

    var auditRefs = metricsData.map(function (metric) {
      return {
        id: metric.id,
        weight: metric.metricScoring.weight,
        group: 'metrics',
        result: {
          score: metric.score / 100,
        },
      };
    });

    var score = arithmeticMean(auditRefs);

    var title = a( 'h2', null, name );
    if (name === 'v6') {
      title = a( 'h2', null, "latest", a( 'br', null ), a( 'i', null, a( 'a', { href: "https://github.com/GoogleChrome/lighthouse/releases/" }, "v6, v7") ) );
    }

    return a( 'form', { class: "wrapper" },
      title,

      a( 'table', null,
        a( 'thead', null,
          a( 'tr', null,
            a( 'th', { class: "th--metric", colspan: "2" }),
            a( 'th', { class: "th--value" }, "Value"),
            a( 'th', { class: "th--spacer" }),
            a( 'th', { class: "th--score" }, "Metric Score"),
            a( 'th', { class: "th--weight" }, "Weighting")
          )
        ),
        a( 'tbody', null,
          metricsData.map(function (metric) {
            return a( Metric, Object.assign({}, { app: app, weightMax: weightMax, metricScoring: metric.metricScoring }, metric))
          })
        )
      ),

      a( 'div', { class: "perfscore" },
        a( Gauge, { score: score, auditRefs: auditRefs })
      )
    )
  };

  return ScoringGuide;
}(p));

var debounce = function (callback, time, interval) {
    if ( time === void 0 ) time = 250;

    return (function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    clearTimeout(interval);
    interval = setTimeout(function () { return callback.apply(void 0, args); }, time);
  });
};

var App = /*@__PURE__*/(function (Component) {
  function App(props) {
    Component.call(this, props);
    this.state = getInitialState();
    this.onDeviceChange = this.onDeviceChange.bind(this);
    this.onVersionsChange = this.onVersionsChange.bind(this);
    // debounce to avoid flooding with new URLs
    this.debouncedUpdatePermalink = debounce(this.updatePermalink);
  }

  if ( Component ) App.__proto__ = Component;
  App.prototype = Object.create( Component && Component.prototype );
  App.prototype.constructor = App;

  App.prototype.updatePermalink = function updatePermalink (state) {
    var versions = state.versions;
    var device = state.device;
    var metricValues = state.metricValues;
    var url = new URL(location.href);
    var auditIdValuePairs = Object.entries(metricValues).map(function (ref) {
      var id = ref[0];
      var value = ref[1];

      return [id, value];
    });
    var params = new URLSearchParams(auditIdValuePairs);
    params.set('device', device);
    for (var version of versions) params.append('version', version);
    url.hash = params.toString();
    history.replaceState(state, '', url.toString());
  };

  App.prototype.componentDidUpdate = function componentDidUpdate () {
    this.debouncedUpdatePermalink(this.state);
  };

  App.prototype.onDeviceChange = function onDeviceChange (e) {
    this.setState({device: e.target.value});
  };

  App.prototype.onVersionsChange = function onVersionsChange (e) {
    this.setState({versions: e.target.value.split(',')});
  };

  App.prototype.normalizeVersions = function normalizeVersions (versions) {
    return versions.map(function (version) {
      if (parseInt(version) < 5) {
        throw new Error(("Unsupported Lighthouse version (" + version + ")"));
      }
      // In the future we might want a more generalized `version % 2 === 1` thing, but for now, hardcode the change.
      if (parseInt(version) === 7) { return 6..toString(); }
      return version.toString();
    }).sort().reverse();
  };

  App.prototype.render = function render () {
    var this$1 = this;

    var ref = this.state;
    var versions = ref.versions;
    var device = ref.device;
    var metricValues = ref.metricValues;

    var normalizedVersions = this.normalizeVersions(versions);

    var scoringGuideEls = normalizedVersions.map(function (version) {
      var key = "v" + version;
      return a( ScoringGuide, { app: this$1, name: key, values: metricValues, scoring: scoringGuides[key][device] });
    });
    return a( 'div', { class: "app" },
      a( 'div', { class: "controls wrapper" },
        a( 'label', null, "Device type: ", a( 'select', { name: "device", value: device, onChange: this.onDeviceChange },
            a( 'option', { value: "mobile" }, "Mobile"),
            a( 'option', { value: "desktop" }, "Desktop")
          )
        ),
        a( 'label', null, "Versions: ", a( 'select', { name: "versions", value: normalizedVersions.join(','), onChange: this.onVersionsChange },
            a( 'option', { value: "6,5" }, "show all"),
            a( 'option', { value: "6,8" }, "v6, v8"),
            a( 'option', { value: "8" }, "v8"),
            a( 'option', { value: "6" }, "v6, v7"),
            a( 'option', { value: "5" }, "v5")
          )
        )
      ),
      scoringGuideEls
    )
  };

  return App;
}(p));

function getInitialState() {
  var versions = params.has('version') ?
    params.getAll('version').map(getMajorVersion) :
    ['6'];

  // Default to mobile if it's not matching our known emulatedFormFactors. https://github.com/GoogleChrome/lighthouse/blob/master/types/externs.d.ts#:~:text=emulatedFormFactor
  var device = params.get('device');
  if (device && device !== 'mobile' && device !== 'desktop') {
    console.warn(("Invalid emulatedFormFactors value: " + device + ". Fallback to mobile scoring."));
    device = 'mobile';
  } else if (!device) {
    // Device not expressed in the params
    device = 'mobile';
  }

  // Set defaults as median.
  var metricValues = {};
  var metricScorings = Object.assign({}, scoringGuides.v6.desktop, scoringGuides.v5.desktop);
  for (var id in metricScorings) {
    metricValues[id] = metricScorings[id].median;
  }

  // Load from query string.
  for (var [id$1, metric] of Object.entries(metrics)) {
    var value = params.get(id$1) || params.get(metric.auditId);
    if (value === undefined) { continue; }
    metricValues[id$1] = Number(value);
  }

  return {
    versions: versions,
    device: device,
    metricValues: metricValues,
  };}

function main() {
  N(a( App, null ), $$1('#container'));
}

// just one call to main because i'm basic like that
main();
//# sourceMappingURL=calc.js.map
