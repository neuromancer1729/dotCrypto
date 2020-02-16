var pattern=/.crypto$/;
var newurl;

console.log(window.document.location.href);

if (pattern.test(window.document.location.href)) // if it matches pattern defined above
{
  newurl = viewtext_base_url + encodeURIComponent(window.location.href);
  chrome.extension.sendRequest({redirect: newurl}); // send message to redirect

}