var widgets = require("sdk/widget");
var tabs = require("sdk/tabs");
var pageMod = require("sdk/page-mod");
 
var widget = widgets.Widget({
  id: "mozilla-link",
  label: "Mozilla website",
  contentURL: "http://www.xkcd.com/favicon.ico",
  onClick: function() {
    tabs.open("https://github.com/cooperq/");
  }
});

pageMod.PageMod({
  include: "*",
  contentScript: "var regex = /witnesses|allegedly|new study|rebuild|space|google glass|smartphone|electric|senator|car|election|congressional leaders|homeland security|could not be reached for comment/gi; document.body.innerHTML = document.body.innerHTML.replace(regex, function(match){ switch(match.toLowerCase()){ case 'witnesses': return 'these dudes I know'; break; case 'allegedly': return 'kinda probably'; break; case 'new study': return 'tumblr post'; break; case 'rebuild': return 'avenge'; break; case 'space': return 'spaaace'; break; case 'google glass': return 'virtual boy'; break; case 'smartphone': return 'pokedex'; break; case 'electric': return 'atomic'; break; case 'senator': return 'elf-lord'; break; case 'car': return 'cat'; break; case 'election': return 'eating contest'; break; case 'congressional leaders': return 'river spirits'; break; case 'homeland security': return 'homestar runner'; break; case 'could not be reached for comment': return 'is guilty and everyone knows it'; break; default: return match; break; } });"
});
