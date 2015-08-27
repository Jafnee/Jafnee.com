(function (window, document) {

    var sidebar = document.getElementById('side-bar'),
        expandicon = document.getElementById('expandicon'),
        menuLink = document.getElementById('menuLink');

    function toggleClass(element, className) {
        var classes = element.className.split(/\s+/),
            length = classes.length,
            i = 0;

        for(; i < length; i++) {
          if (classes[i] === className) {
            classes.splice(i, 1);
            break;
          }
        }
        // The className is not found
        if (length === classes.length) {
            classes.push(className);
        }

        element.className = classes.join(' ');
    }

    menuLink.onclick = function (e) {
        var active = 'active';

        e.preventDefault();
        toggleClass(menuLink, active);
        toggleClass(sidebar, active);

        var burger = "fa fa-bars fa-2x"
        var left = "fa fa-arrow-left fa-2x"
        if ( sidebar.className.match(/(?:^|\s)active(?!\S)/) ) {
            expandicon.className = left;
        } else {
            expandicon.className = burger;
        }
    };

}(this, this.document));
