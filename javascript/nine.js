RegExp

^([0-9]{10})$

^([a-z])$
^([a-zA-Z]+)$

^([a-zA-Z0-9]+)$

var a = "hii"
a.match("^([a-z])$")

var a = "hii"
a.match("^([a-z])$")
null
var a = "hii"
a.match("^([a-z]+)$")
(2) ["hii", "hii", index: 0, input: "hii", groups: undefined]
var a = "hii9"
a.match("^([a-z]+)$")
null
var a = "hii9"
a.match("^([a-z0-9]+)$")
(2) ["hii9", "hii9", index: 0, input: "hii9", groups: undefined]

var a = "a@a.com"
a.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-z]{2,5})$")

var a = "a@a.com"
a.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-z]{2,5})$")
(4) ["a@a.com", "a", "a", "com", index: 0, input: "a@a.com", groups: undefined]
var a = "a@acom"
a.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-z]{2,5})$")
(4) ["a@acom", "a", "a", "om", index: 0, input: "a@acom", groups: undefined]
var a = "a@acom."
a.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-z]{2,5})$")
null