import wixWindow from ‘wix-window’;
import wixLocation from ‘wix-location’;

function open_Lightbox()
{
	let query = wixLocation.query;
	var goto = query.name;
	wixWindow.openLightbox(goto);
}

$w.onReady(function () 
{
	open_Lightbox();
});

//add this code to your page you wnt to use it on.
//Then add the url www.test.com/pagename/?name=Lightboxname

//I hope this helps
