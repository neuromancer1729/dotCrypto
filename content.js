var pattern=/.crypto$/;
var newurl;

console.log(window.document.location.href);

var base_url = 'https://unstoppabledomains.com/api/v1/'

if (pattern.test(window.document.location.href)) // if it matches pattern defined above
{
  newurl = base_url + encodeURIComponent(window.location.href);
  chrome.extension.sendRequest({redirect: newurl}); // send message to redirect

}