(function () {
    'use strict';
    var pages = window.pages = {};

    pages.home = function () {
        return '<div id="main"><header><div id="logo"><div id="logo_text"></div></div><nav><div id="menu_container"></div></nav></header><div id="site_content"><div class="content"><section class="identification"><form><p><label for="firstname">Entre ton prénom :</label><br/><input type="text" name="firstname" id="firstname"/></p><p><input type="radio" name="level" id="primaire" value="primaire" /><label for="primaire">Je suis en primaire</label><br/><input type="radio" name="level" id="college" value="college" /><label for="college">Je suis au collège</label></p><input type="submit" value="Commencer" class="btn"/></form></section></div></div><footer></footer></div><p>&nbsp;</p>';
    };

    pages.themes = function (profile) {
        return '<div id="main">    <header>      <div id="logo">        <div id="logo_text">        </div>      </div>      <nav>        <div id="menu_container">' + profile.get('name') + ' (' + profile.get('level') + ')</div><div class="disconnect">Se déconnecter</div>      </nav>    </header>    <div id="site_content">      <div class="content">              <h1>Choisissez un thème</h1>        <div id="content_box">        <div class="box">L\'appareil respiratoire</div>            <div class="box">L\'appareil digestif</div>            <div class="box">Les os du corps humain</div>        </div>        <div id="content_box">        <div class="box">L\'appareil respiratoire</div>            <div class="box">L\'appareil digestif</div>            <div class="box">Les os du corps humain</div>        </div>        <div id="evaluation">            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>        </div>      </div>    </div>        <footer>    </footer>      </div>  <p>&nbsp;</p>';
    };
}());
