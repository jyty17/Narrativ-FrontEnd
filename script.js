/* Code goes here */

class SmartLink {
	constructor(id, element) {
		this.auctionID = id;
		this.element = element;
	}
	validAuctionId() {
		if(Number(this.auctionID)) {
			return true;
		}
		return false;
	}
	runAuction() {
		var promise = new Promise(
			(resolve, reject) => {
			if(this.validAuctionId(this.auctionID)) {
				var item = {
					data: {
						destination_url: 'http://merchant.example/product/1',
					    merchant_name: 'Sephora',
					    product_name: 'Highlighter brush',
					    price: '15.89',
	  				}
					}
				resolve(item);
			}
		});
		return promise;
	}
	reWriteLink(URL, linkText) {
		this.element.href = URL;
		this.element.innerHTML = linkText;
	}
}

class Jstag {
	constructor() {
		this.smartlinks = [];
		this.findAllSmartLinks();
	}
	findAllSmartLinks() {
		let anchors = document.getElementsByTagName('a');
		var i;
		for(i = 0; i < anchors.length; i++) {
			var a = anchors[i].href.split('/');
			var sl = new SmartLink(a[a.length-1], anchors[i]);
			if(sl.validAuctionId() && anchors[i].href.includes('co')) {
				this.smartlinks.push(sl);
			}
		}
	}

	runAllSmartLinks() {
		this.smartlinks.map((x) => {
			var run = x.runAuction().then((item) => {
				x.reWriteLink(item.data.destination_url, item.data.product_name+', $'+item.data.price+' at '+item.data.merchant_name);
			});
		})
	}
}

function runit() {
	let x = new Jstag();
	x.runAllSmartLinks();
}