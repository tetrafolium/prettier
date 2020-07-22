var a = [ true, false ];
function foo(x) {}

for (var i = 0; i < 3; i++) {
  foo(a[i]);
}
for (var k in a) {
  foo(a[k]); // k is a string, which shouldn't be used for array access
}

var b = (null : ?{[key: string]: string});
for (var j in b) {
  foo(b[j]);
}

var c;
for (var m in (c = b)) {
  foo(c[m]);
}

var d;
for (var n in (d = a)) {
  foo(d[n]); // d is a string, which shouldn't be used for array access
}

for (var x in undefined) {
  foo(x); // unreachable
}

for (var x in null) {
  foo(x); // unreachable
}

for (var y in this) {
  // regression test to make sure `in this` doesn't fatal. it's currently
  // allowed, even though we can't actually enumerate all the keys on `this`.
}
