(function () {
    'use strict';
    var pages = window.pages = {};

    pages.home = function () {
        return '<div id="main"><header><div id="logo"><div id="logo_text"></div></div><nav><div id="menu_container"></div></nav></header><div id="site_content"><div class="content"><section class="identification"><form><p><label for="firstname">Entre ton prénom :</label><br/><input type="text" name="firstname" id="firstname"/></p><p><input type="radio" name="level" id="primaire" value="primaire" /><label for="primaire">Je suis en primaire</label><br/><input type="radio" name="level" id="college" value="college" /><label for="college">Je suis au collège</label></p><input type="submit" value="Commencer" class="btn"/></form></section></div></div><footer></footer></div><p>&nbsp;</p>';
    };

    pages.themes = function (profile) {
        return '<div id="main">    <header>      <div id="logo">        <div id="logo_text">          <!--<h1>MIF22</h1>          <h2>Logiciels éducatifs</h2>-->        </div>      </div>      <nav>        <div id="menu_container">' + profile.get('name') + ' (' + profile.get('level') + ')          <img src="images/home.png" style="margin:0 0 0 0;" class="back-home" alt="Retour à la page de thème">          <img src="images/logout.png" style="width:48px;height:48px;margin:0 0 8px 0;float:right;" class="disconnect" alt="Quitter l\'application"></div>        <!--<div class="disconnect">Se déconnecter</div>-->      </nav>    </header>    <div id="site_content">      <div class="content">        <h1>Choisissez un thème</h1>        <div id="colonne1" data-theme="Respiratoire">            <div class="box">L\'appareil respiratoire</div><br/>            <div class="small_box cours-btn">Apprendre</div>            <div class="small_box exos-btn">Tester mes connaissances</div>        </div>        <div id="colonne2" data-theme="Os">            <div class="box">Les os du corps humain</div><br/>            <div class="small_box cours-btn">Apprendre</div>            <div class="small_box exos-btn">Tester mes connaissances</div>        </div>        <div id="centre" data-theme="Digestif">            <div class="box">L\'appareil digestif</div><br/>            <div class="small_box cours-btn">Apprendre</div>            <div class="small_box exos-btn">Tester mes connaissances</div>        </div><br/>        <div id="evaluation">            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>        </div>      </div>    </div>        <footer>     <!-- <p>Copyright &copy; 2013</p>-->    </footer>      </div>  <p>&nbsp;</p>';
    };
    
    pages.coursOs = function (profile) {
      return '<div id="main">    <header>      <div id="logo">        <div id="logo_text">          <h1>SVT</h1>          <h2>Les os du corps humain</h2>        </div>      </div>      <nav>        <div id="menu_container">' + profile.get('name') + ' (' + profile.get('level') + ')          <img src="images/home.png" style="margin:0 0 0 0;" class="back-home" alt="Retour à la page de thème">          <img src="images/logout.png" style="width:48px;height:48px;margin:0 0 8px 0;float:right;" class="disconnect" alt="Quitter l\'application">        </div>      </nav>    </header>    <div id="site_content">      <div class="content">        <img class="img_right" src="images/os/squelette.jpg" alt="les os du corps humain">              <h1>Le squelette humain</h1>    <p>Notre corps peut bouger grâce aux os et aux muscles qui sont commandés par le cerveau.        L\'ensemble des os de notre corps s\'appelle le squelette.        Le corps humain possède 206 os.        Chacun de ces os a un nom.        Les os sont articulés entre eux.        Les os sont reliés entre eux par des ligaments.        Les muscles sont attachés aux os par des tendons.</p>        <h2>Le squelette est articulé</h2>        <p>Les os sont reliés entre eux par des ligaments.        C\'est pour cela qu\'on peut faire des mouvement.</p>                <h2>La colonne vertébrale</h2>        <p>Si tu passes ta main sur le milieu de dos d\'une autre personne, tu vas sentir quelque chose de dur :         C\'est la colonne vertébrale.La colonne vertébrale est souple.         Elle est constituée de petits os: les vertèbres<br/>    </p>        <p><img src="images/os/autre.gif" alt="les côtes, le sternum, la colonne vertébrale, les os du bassin"></p>        <h2>Quelques os :</h2>        <li>Main : ensemble d’os qui comprend cinq doigts et grâce auquel on peut saisir des objets.</li>        <li>Pied : ensemble d’os qui comprend cinq orteils et grâce auquel on peut marcher.</li>        <li>Tibia : gros os de la jambe situé entre le genou et le pied.</li>        <li>Omoplate : os plat large, en forme de triangle et situé dans le haut du dos.</li>        <li>Humérus : os du bras situé entre l’épaule et le coude.</li>        <li>Crâne : boîte arrondie qui recouvre et protège le cerveau.</li>             <li>Côtes : os au nombre de 24, courbés en forme d’arc <span class="link see-more" id="btn_texte" onclick="javascript:see_more(\'texte\');">Voir plus...</span></li>         <div id="texte" class="hidden" style="display:none">        <li>Mandibule : os qui forme la mâchoire inférieure et qui permet de mastiquer.</li>        <li>Péroné : os mince de la jambe situé entre le genou et le pied.</li>        <li>Sternum : os allongé situé au milieu de la poitrine.</li>        <li>Fémur : os le plus long du corps, situé entre le bassin et le genou.</li>        <li>Radius : os du bras situé entre le coude et le poignet et aligné avec le pouce.</li>        <li>Vertèbres : os du dos au nombre de 33 formant la colonne vertébrale, entre le crâne et le bassin.</li>        <li>Maxillaire : os dans lequel sont emboîtées les dents de la mâchoire supérieure.</li>        <li>Clavicule : os de l’épaule, mince, qui forme un C et qui s’articule avec le sternum et l’omoplate.</li>        <li>Os iliaque : grand os plat situé entre le dos et les jambes et qui forme le bassin.</li>        <li>Cubitus : os du bras situé entre le coude et le poignet et aligné avec le petit doigt de la main.</li>        </div>        <h4>Les os de la jambe</h4>        <p >Les os de la jambe s\'articulent en trois endroits: la hanche, le genou et la cheville.<br/></p>        <h4>Les os de la main</h4>        <p>Chaque doigt est composé de trois petits os.<br/></p>        <h4>Les os du pied</h4>        <p>Le Pied est un ensemble articulé de 26 os, plus les osselets inconstants (TARSE 7 os, METATARSE 5 os, PHALANGES 14 os)        </p>        <h4>Les os du bras</h4>                         <p>Les os du bras s\'articulent en trois endroits: l\'épaule, le coude et le poignet.<br/></p>        <h4>Les os de la tête</h4>              <p>La mâchoire inférieure est le seul os du crâne qui peut bouger.<br/></p><p><img src="images/os/jambe.gif" alt="les os de la jambe"><img src="images/os/bras.gif" alt="les os du bras"><img src="images/os/main.gif" alt="les os de la main"><br/><img src="images/os/pied.gif" alt="les os du pied"></p><img src="images/os/crane.gif" alt="les os de la tête">         </div>    </div>            <footer>           <!-- <p>Copyright &copy; 2013</p>-->    </footer>          </div>  <p>&nbsp;</p>    <script>  function see_more(id){        if(document.getElementById(id).style.display=="none")        {                document.getElementById(id).style.display="block";                document.getElementById(\'btn_\'+id).innerHTML=\'Cacher le texte\';        }        else        {                document.getElementById(id).style.display="none";                document.getElementById(\'btn_\'+id).innerHTML=\'Voir plus...\';        }        return true;   }   </script>';
    };
    
    pages.coursDigestif = function (profile){
      return '<div id="main">    <header>      <div id="logo">        <div id="logo_text">          <h1>SVT</h1>          <h2>L\'appareil digestif</h2>        </div>      </div>      <nav>        <div id="menu_container">' + profile.get('name') + ' (' + profile.get('level') + ')          <img src="images/home.png" style="margin:0 0 0 0;" class="back-home" alt="Retour à la page de thème">          <img src="images/logout.png" style="width:48px;height:48px;margin:0 0 8px 0;float:right;" class="disconnect" alt="Quitter l\'application"></div>      </nav>    </header>    <div id="site_content">      <div class="content">        <h1>La digestion</h1>         <p>Les nutriments utilisés par nos organes pour produire de l\'énergie proviennent des aliments que nous mangeons. ils sont transportés jusqu\'à eux par l\'intermédiaire du sang.        Quelles modifications subissent les aliments au cours de la digestion ? À quel niveau du tube digestif vont-ils gagner le sang afin d\'être disponibles pour tout l\'organisme ?</p>        <p><iframe style="width:420px;height:315px;margin-left:25%" src="http://www.youtube.com/embed/sL58faVGqvY" frameborder="0" allowfullscreen></iframe></p>        <h1>L\'appareil digestif</h1><p><img src="images/appareil_digestif/souris.png" alt="schema souris appareil digestif"></p>        <p>La dissection d\'une souris par la face ventrale, après incision de la peau et des muscles, permet d\'avoir accès à la cavité abdominale où se situent les intestins. Pour dégager la partie thoracique de l\'appareil digestif et observer l\'œsophage, il faut enlever la cage thoracique, la trachée et les poumons. Il ne reste plus ensuite qu\'à dérouler les intestins pour observer la continuité de cet appareil depuis la bouche jusqu\'à l\'anus.</p>        <h4>L\'appareil digestif comprend :</h4>        <ul>               <li>une bouche</li>          <li>un œsophage ou conduit, situé sous la trachée qui relie la bouche à l\'estomac</li>          <li>un estomac, poche à paroi musculaire et sécrétrice du suc gastrique</li>          <li>un intestin grêle relativement long</li>          <li>un gros intestin plus court que l\'intestin grêle et de plus gros diamètre, menant à l\'anus par lequel sont éliminées les matières fécales ou selles.</li>        </ul>        <p>L\'ensemble constitue le tube digestif. Sur ce tube, sont fixées des glandes annexes qui produisent des sécrétions ou sucs digestifs. Ainsi le foie sécrète la bile qui se déverse, par un canal, dans l\'intestin grêle. Le pancréas, situé sous le foie, sécrète le suc pancréatique qui se déverse aussi dans l\'intestin grêle. Les glandes salivaires produisent la salive qui se déverse dans la bouche.        <span class="link see-more" id="btn_texte" onclick="javascript:see_more(\'texte\');">Voir plus...</span></p>        <div id="texte" class="hidden" style="display:none">                  <p><img class="img_right" src="images/appareil_digestif/appareil_digestif.png" alt="schema appareil digestif homme"></p>                  <h1>Le trajet des aliments dans l\'appareil digestif de l\'homme</h1>          <p>Il arrive qu\'un médecin ordonne à un patient, qui a des troubles digestifs, de faire effectuer des radiographies de son appareil digestif. Pour cela, le patient doit ingérer une bouillie opaque aux rayons X. Le radiologue réalise ensuite plusieurs clichés, à intervalles variés, permettant de suivre la progression des aliments dans le tube digestif.</p>          <p>Dans le cas d\'un transit alimentaire normal, on constate qu\'aussitôt après l\'ingestion, la bouillie opaque passe dans l\'œsophage (par déglutition), où elle ne fait que transiter. Plus tard, l\'estomac s\'opacifie pendant environ cinq heures ; c\'est ensuite le tour de l\'intestin grêle, dans lequel les aliments séjournent environ six heures, puis du gros intestin.</p>          <p>Dans le gros intestin, on retrouve les excréments (ou selles) qui séjournent longtemps à l\'intérieur de cet organe, avant d\'être rejetés par l\'anus. </p>                </div>      </div>    </div>            <footer>           <!-- <p>Copyright &copy; 2013</p>-->    </footer>          </div>  <p>&nbsp;</p>    <script>  function see_more(id){        if(document.getElementById(id).style.display=="none")        {                document.getElementById(id).style.display="block";                document.getElementById(\'btn_\'+id).innerHTML=\'Cacher le texte\';        }        else        {                document.getElementById(id).style.display="none";                document.getElementById(\'btn_\'+id).innerHTML=\'Voir plus...\';        }        return true;   }   </script>';
    };
    
    pages.coursRespiratoire = function (profile){
      return '  <div id="main">    <header>      <div id="logo">        <div id="logo_text">          <h1>SVT</h1>          <h2>L\'appareil respiratoire</h2>        </div>      </div>      <nav>        <div id="menu_container"> ' + profile.get('name') + ' (' + profile.get('level') + ')                <img src="images/home.png" style="margin:0 0 0 0;" class="back-home" alt="Retour à la page de thème">          <img src="images/logout.png" style="width:48px;height:48px;margin:0 0 8px 0;float:right;" class="disconnect" alt="Quitter l\'application"></div>    </nav>    </header>    <div id="site_content">      <div class="content">        <h1>Organisation et histologie de l\'appareil respiratoire</h1>        <p>        Nos cellules doivent recevoir en permanence et en quantité adéquate des molécules de dioxygène (O2) pour pouvoir fabriquer l\'énergie nécessaire à leur fonctionnement grâce à la combustion du glucose. Le résidu de cette combustion, le dioxyde de carbone (CO2), doit être évacué de l\'organisme.        On appelle respiration les échanges d\'O2 et de CO2 entre les cellules et le milieu extérieur. Elle est assurée par l\'appareil respiratoire, logé dans la cage thoracique et couplé à la circulation sanguine.</p>        <h2>Quelle est la composition de l\'appareil respiratoire ?</h2>            <h3>L\'appareil respiratoire est composé :</h3>        <span class="link see-more" id="btn_texte" onclick="javascript:see_more(\'texte\');">Voir plus...</span>        <div id="texte" class="hidden" style="display:none">          <p>              <ul>              Des voies respiratoires, qui permettent les échanges d\'air entre l\'atmosphère et les poumons. Elles comprennent :<br/>              <li>la cavité nasale, qui filtre, réchauffe et humidifie l\'air ;</li>              <li>le pharynx, qui appartient également à l\'appareil digestif ;</li>              <li>le larynx, qui permet en plus la phonation grâce à la présence de cordes vocales ;</li>              <li>la trachée, qui purifie, réchauffe et humidifie l\'air, et sécrète un mucus protecteur.</li>              Des voies intrapulmonaires, qui amènent l\'air des voies respiratoires jusqu\'aux alvéoles pulmonaires. Ce sont :<br/>              <li>les bronches, qui purifient, réchauffent et humidifient l\'air, et sécrètent un mucus protecteur ;</li>              <li>les bronchioles.</li>              Des poumons, deux organes spongieux et élastiques, qui renferment chacun environ 350 millions d\'alvéoles pulmonaires.<br/><br/>              De la plèvre, un double feuillet séreux qui sécrète et contient le liquide pleural, et qui relie les poumons à la cage thoracique tout en les maintenant ouverts.<br/><br/>              Le diaphragme est un muscle situé sous les poumons. Il s\'abaisse pendant l\'inspiration, pour laisser les poumons se distendre, et se relève pendant l\'expiration, pour aider les poumons à expulser l\'air.<br/>                          </ul>          </p>        </div>        <p><img class="img_center" src="images/appareil_respiratoire/respiration.png" alt="schema appareil respiratoire homme"></p>                     </div>    </div>            <footer>           <!-- <p>Copyright &copy; 2013</p>-->    </footer>          </div>  <p>&nbsp;</p>    <script>  function see_more(id){        if(document.getElementById(id).style.display=="none")        {                document.getElementById(id).style.display="block";                document.getElementById(\'btn_\'+id).innerHTML=\'Cacher le texte\';        }        else        {                document.getElementById(id).style.display="none";                document.getElementById(\'btn_\'+id).innerHTML=\'Voir plus...\';        }        return true;   }   </script>';
    };

}());
