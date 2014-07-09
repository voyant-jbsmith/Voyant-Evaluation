/*jshint asi:true, laxcomma: true */
/* REFER TO: http://emberjs.com/guides/testing/test-helpers/  for help in creating testing helpers */

import { test, moduleFor } from 'ember-qunit';
import startApp from '../helpers/start-app';

var first_item_on_dashboard = 'div.dashboard_item:nth-of-type(1)'    // jquery selector
    ,test_element = 'div.test_element'  // jquery selector
    ,test_element_text_equals = 'dashboard'  // string
    

module('. Integration: first test',{
    setup: function(){
        window.Blocks = window.Blocks || startApp()
        window.Blocks.reset()
    }
})

test('starting app',function(){
    expect(1)
    visit('dashboard')
    //click(first_item_on_dashboard)
    // MAKE ASSERTIONS HERE
    andThen(function() {
        equal(find(test_element).text(), test_element_text_equals)
    })
})