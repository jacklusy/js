"use strict";
let X = prompt ("enter job title.");
let Y = prompt ("enter geographic location.");
let Z = prompt ("enter partner's name.");
let N = prompt ("enter number of children.");

function h (X , Y, Z ,N)
{
    console.log(`You will be a ${X} in ${Y}, and married to ${Z} with ${N} kids.`);
}
h(X , Y, Z ,N);

