"use strict";angular.module("ngLocale",[],["$provide",function(a){var b={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["am","pm"],DAY:["ରବିବାର","ସୋମବାର","ମଙ୍ଗଳବାର","ବୁଧବାର","ଗୁରୁବାର","ଶୁକ୍ରବାର","ଶନିବାର"],MONTH:["ଜାନୁଆରୀ","ଫେବ୍ରୁୟାରୀ","ମାର୍ଚ୍ଚ","ଅପ୍ରେଲ","ମେ","ଜୁନ","ଜୁଲାଇ","ଅଗଷ୍ଟ","ସେପ୍ଟେମ୍ବର","ଅକ୍ଟୋବର","ନଭେମ୍ବର","ଡିସେମ୍ବର"],SHORTDAY:["ରବି","ସୋମ","ମଙ୍ଗଳ","ବୁଧ","ଗୁରୁ","ଶୁକ୍ର","ଶନି"],SHORTMONTH:["ଜାନୁଆରୀ","ଫେବ୍ରୁୟାରୀ","ମାର୍ଚ୍ଚ","ଅପ୍ରେଲ","ମେ","ଜୁନ","ଜୁଲାଇ","ଅଗଷ୍ଟ","ସେପ୍ଟେମ୍ବର","ଅକ୍ଟୋବର","ନଭେମ୍ବର","ଡିସେମ୍ବର"],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",mediumDate:"d MMM y",mediumTime:"h:mm:ss a","short":"d-M-yy h:mm a",shortDate:"d-M-yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"₹",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:2,lgSize:3,macFrac:0,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:2,lgSize:3,macFrac:0,maxFrac:2,minFrac:2,minInt:1,negPre:"¤ -",negSuf:"",posPre:"¤ ",posSuf:""}]},id:"or-in",pluralCat:function(a){return 1==a?b.ONE:b.OTHER}})}]);