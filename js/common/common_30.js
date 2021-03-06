document.writeln("<header>");
document.writeln("    <nav class='navbar navbar-expand-md navbar-light' id='navbar-header'>");
document.writeln("      <a href='../home'><h1 class='navbar-brand'>LaTeX公式编辑器<span id='ver_h1'></span></h1></a>");
document.writeln("      <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#collapsibleNavbar'>");
document.writeln("        <span class='navbar-toggler-icon'></span>");
document.writeln("      </button>");
document.writeln("      <div class='collapse navbar-collapse' id='collapsibleNavbar'>");
document.writeln("        <ul class='navbar-nav'>");
document.writeln("          <li class='nav-item'>");
document.writeln("            <a class='nav-link' href='../home' id='btn_home'>编辑器</a>");
document.writeln("          </li>");
document.writeln("          <li class='nav-item'>");
document.writeln("            <a class='nav-link' href='../help' id='btn_help'>帮助文档</a>");
document.writeln("          </li>");
document.writeln("          <li class='nav-item'>");
document.writeln("            <a class='nav-link' href='../update' id='btn_update'>更新日志</a>");
document.writeln("          </li>");
document.writeln("          <!--<li class='nav-item'>");
document.writeln("            <a class='nav-link' href='../messageboard'  id='btn_messageboard'>留言板</a>");
document.writeln("          </li>-->");
document.writeln("        </ul>");
document.writeln("        <ul class='navbar-nav ml-auto'>");
document.writeln("          <li class='nav-item' id='wrap_btn_href_login'>");
document.writeln("            <a class='nav-link' href='../login' id='btn_href_login'>登录/注册</a>");
document.writeln("          </li>");
document.writeln("          <li class='nav-item dropdown' id='wrap_btn_href_personal'>");
document.writeln("            <a class='nav-link dropdown-toggle' href='../personal' id='a-login-ed' data-toggle='dropdown'>");
document.writeln("              <img src='' id='img-nav-portrait' /><span id='span-nav-portrait'>个人中心</span>");
document.writeln("            </a>");
document.writeln("            <div class='dropdown-menu'>");
document.writeln("              <a class='dropdown-item' href='../personal'>个人中心</a>");
document.writeln("              <hr>");
document.writeln("              <a class='dropdown-item' href='#' id='a-logout'>退出登录</a>");
document.writeln("            </div>");
document.writeln("          </li>");
document.writeln("        </ul>");
document.writeln("      </div>");
document.writeln("    </nav>");
document.writeln("  </header>");

document.body.removeChild(document.getElementById("common_30"));
