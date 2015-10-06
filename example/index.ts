/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
'use-strict';

import {
  Widget, attachWidget
} from 'phosphor-widget';

import {
  GridPanel, DraggableGridPanel, Spec
} from '../lib/index';

import './index.css';


function createContent(name: string): Widget {
  var widget = new Widget();
  var content = (Math.random() + '')
    .substr(2, 10).split('')
    .map(i => String.fromCharCode(65 + (+i))).join('');
  widget.addClass('content');
  widget.addClass(name);
  widget.node.innerHTML = content;
  return widget;
}


function main(): void {
  var r1 = createContent('red');
  var g1 = createContent('green');
  var b1 = createContent('blue');
  var y1 = createContent('yellow');

  var r2 = createContent('red');
  var g2 = createContent('green');
  var b2 = createContent('blue');
  var y2 = createContent('yellow');

  DraggableGridPanel.setRow(r1, 0);
  DraggableGridPanel.setColumn(r1, 0);

  DraggableGridPanel.setRow(g1, 1);
  DraggableGridPanel.setColumn(g1, 0);

  DraggableGridPanel.setRow(b1, 2);
  DraggableGridPanel.setColumn(b1, 0);

  DraggableGridPanel.setRow(y1, 0);
  DraggableGridPanel.setColumn(y1, 1);
  DraggableGridPanel.setRowSpan(y1, 2);
  DraggableGridPanel.setColumnSpan(y1, 3);

  DraggableGridPanel.setRow(r2, 2);
  DraggableGridPanel.setColumn(r2, 1);

  DraggableGridPanel.setRow(g2, 2);
  DraggableGridPanel.setColumn(g2, 2);

  DraggableGridPanel.setRow(b2, 0);
  DraggableGridPanel.setColumn(b2, 4);
  DraggableGridPanel.setRowSpan(b2, 3);

  DraggableGridPanel.setRow(y2, 2);
  DraggableGridPanel.setColumn(y2, 3);

  var panel = new DraggableGridPanel();
  panel.id = 'main';

  panel.rowSpecs = [
    new Spec({ minSize: 50, sizeBasis: 300 }),
    new Spec({ minSize: 50, sizeBasis: 150 }),
    new Spec({ stretch: 0, sizeBasis: 200, minSize: 50 })
  ];

  panel.columnSpecs = [
    new Spec({ stretch: 0, sizeBasis: 200, minSize: 50 }),
    new Spec({ minSize: 50 }),
    new Spec({ minSize: 50 }),
    new Spec({ minSize: 50 }),
    new Spec({ minSize: 50 })
  ];

  panel.children = [r1, g1, b1, y1, r2, g2, b2, y2];

  attachWidget(panel, document.body);

  window.onresize = () => panel.update();
}


window.onload = main;
