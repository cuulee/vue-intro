const hintDirective = require('./directives/hint');
const introDirective = require('./directives/intro');

/**
 * @return {boolean}
 */
const VueIntro = function(Vue, options) {
    
    // Check the plugin is not already installed.
    if (this.installed) {
        return false;
    }

    // Extend Vue with the global intro config.
    Vue.prototype.$intro = {
        _defaultOptions: options
    };

    // Register the directives.
    Vue.directive('hint', hintDirective);
    Vue.directive('intro', introDirective);
};

// Automatically install the plugin if Vue is available globally.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueIntro);
}

module.exports = VueIntro;
