!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t("object"==typeof exports?require("jquery"):jQuery)}(function(t){"use strict";function i(e,o){this.$element=t(e),this.options=t.extend({},i.DEFAULTS,t.isPlainObject(o)&&o),this.loading=!1,this.init()}var e="qor.publish",o="click."+e,n="shown.bs.modal",s="hidden.bs.modal";i.prototype={constructor:i,init:function(){this.options,this.$element;this.$modal=t(i.MODAL).appendTo("body"),this.bind()},bind:function(){this.$element.on(o,t.proxy(this.click,this)),this.$modal.on(n,function(){t(this).trigger("enable.qor.textviewer")}).on(s,function(){t(this).trigger("disable.qor.textviewer")})},unbind:function(){this.$element.off(o,this.click),this.$modal.off(n).off(s)},click:function(i){var e=this.options,o=t(i.target);if(o.is(e.toggleView)){if(i.preventDefault(),this.loading)return;this.loading=!0,this.$modal.find(".mdl-card__supporting-text").empty().load(o.data("url"),t.proxy(this.show,this))}else o.is(e.toggleCheck)&&(o.prop("disabled")||o.closest("table").find(":checkbox").not(o).click())},show:function(){this.loading=!1,this.$modal.qorModal("show")},destroy:function(){this.unbind(),this.$element.removeData(e)}},i.DEFAULTS={toggleView:".qor-action__view",toggleCheck:".qor-action__check-all"},i.MODAL='<div class="qor-modal fade" tabindex="-1" role="dialog" aria-hidden="true"><div class="mdl-card mdl-shadow--2dp" role="document"><div class="mdl-card__title mdl-card--border"><h2 class="mdl-card__title-text">Changes</h2></div><div class="mdl-card__supporting-text"></div><div class="mdl-card__actions mdl-card--border"><a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" data-dismiss="modal">Close</a></div><div class="mdl-card__menu"><button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect" data-dismiss="modal" aria-label="close"><i class="material-icons">close</i></button></div></div></div>',i.plugin=function(o){return this.each(function(){var n,s=t(this),d=s.data(e);d||s.data(e,d=new i(this,o)),"string"==typeof o&&t.isFunction(n=d[o])&&n.apply(d)})},t(function(){i.plugin.call(t(".qor-table"))})});