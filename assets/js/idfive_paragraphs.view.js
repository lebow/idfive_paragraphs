/**
 * @file
 * Defines the behavior of the custom idfive media entity browser view.
 * Extends defailt media entity browser for custom view
 */

/**
 * Attaches the behavior of the media entity browser view.
 */
Drupal.behaviors.mediaEntityBrowserView = {
    attach(context, settings) {
        once('idfive-paragraphs-views-click', '.views-row', context)
            .forEach(function(el){
                el.addEventListener('click', function () {
                    const row = this;
                    const input = row.querySelector('.views-field-entity-browser-select input');

                    input.checked = !input.checked;
                    row.classList.toggle('checked');
                })
            });
    }
};
