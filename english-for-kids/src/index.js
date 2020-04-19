import Controller from './controller/Controller';
import View from './view/View';
import Model from './model/Model';

new Controller(new View(), new Model('train'));
