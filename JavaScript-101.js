#!/usr/bin/env node

const workshopper = require('workshopper'),
      path        = require('path')

function fpath (f) {
    return path.join(__dirname, f)
}

workshopper({
    name        : 'JavaScript-101',
    title       : 'JavaScript-101',
    subtitle    : 'Practice your basic JavaScript skills',
    appDir      : __dirname,
    menuItems   : [],
    exerciseDir : fpath('./Lesson 1/')
})
